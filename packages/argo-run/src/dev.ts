import {URL} from 'url';

import getPort from 'get-port';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import {
  loadExtension,
  getLegacyPostPurchaseData,
  convertLegacyPostPurchaseDataToQueryString,
  log,
  namedArgument,
} from './utilities';
import {createWebpackConfiguration} from './webpack-config';
import {openBrowser} from './browser';

const LEGACY_POST_PURCHASE_DATA_PATH = '/data';
const WEBSOCKET_PATH = '/build';

const PUBLIC_PATH = '/assets/';

export async function dev(...args: string[]) {
  const extension = loadExtension();

  const port = Number(
    namedArgument('port', args) ?? (await getPort({port: 8910})),
  );
  const url = `http://localhost:${port}`;
  const filename = 'extension.js';
  const localhostScriptUrl = `${url}${PUBLIC_PATH}${filename}`;

  const compiler = webpack(
    createWebpackConfiguration({
      development: true,
      output: {
        filename,
        publicPath: PUBLIC_PATH,
      },
      hotOptions: {
        https: false,
        webSocket: {host: 'localhost', port, path: WEBSOCKET_PATH},
      },
    }),
  );

  const firstCompilePromise = new Promise<void>((resolve) => {
    let hasResolved = false;

    compiler.hooks.done.tap('Argogogo.Compiled', (stats) => {
      if (stats.hasErrors()) {
        log(`Build failed with errors: ${stats.toString('errors-only')}`, {
          error: true,
        });

        return;
      }

      if (hasResolved) {
        log(`Rebuilt your extension`);
      } else {
        hasResolved = true;
        resolve();
      }
    });
  });

  const server = new WebpackDevServer(compiler, {
    // webpack-dev-server injects a lot of things to the client
    // which are imcompatible with WebWorker environment.
    // It's also unnecessary because we have an alternative provided by
    // `@shopify/argo-webpack-hot-client/worker`
    injectClient: false,
    injectHot: false,

    // This makes local server public so that
    // it can be forwarded from ngrok
    host: '0.0.0.0',
    port,
    disableHostCheck: true,

    // `transportMode` switches to `ws` so that the worker file can use WebSocket
    // instead of default SocketJs in webpack-dev-server.
    // `sockPath` allows to override default path from webpack-dev-server.
    hot: false,
    hotOnly: false,
    liveReload: false,
    inline: false,
    transportMode: 'ws',
    sockPath: WEBSOCKET_PATH,

    publicPath: PUBLIC_PATH,

    before(app) {
      app.get('/', (_, res) => {
        res.set('Content-Type', 'text/html');
        res.set('Cache-Control', 'no-cache');
        res.send('<html>TODO</html>');
        res.end();
      });

      // This endpoint is used by C1 to request information about the local workspace,
      // including what extensions are available locally, and how to connect to the
      // build server websocket for those extensions.
      app.get('/query', (req, res) => {
        const protocol = req.headers['x-forwarded-proto'] ?? req.protocol;
        const host = req.headers.host;
        const origin = `${protocol}://${host}`;

        res.set('Access-Control-Allow-Origin', '*');
        res.set('Cache-Control', 'no-cache');

        res.json({
          queryUrl: `${origin}${req.path}`,
          extensions: [
            {
              scriptUrl: `${origin}${PUBLIC_PATH}${filename}`,
              socketUrl: `${origin.replace(/^http/, 'ws')}${WEBSOCKET_PATH}`,
              extensionPoint:
                extension.type === 'checkout'
                  ? extension.config.extensionPoints[0]
                  : 'Checkout::PostPurchase::Render',
            },
          ],
        });
      });

      // This endpoint powers a browser extension that was built for the
      // post-purchase extension:
      // https://github.com/Shopify/post-purchase-devtools/blob/master/src/background/background.ts#L16-L35
      app.get(LEGACY_POST_PURCHASE_DATA_PATH, (_, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(getLegacyPostPurchaseData(localhostScriptUrl, extension));
      });
    },

    historyApiFallback: {
      rewrites: [
        {
          from: /./,
          to: '/',
        },
      ],
    },

    // Webpack has a horrible setup for disabling logs. There is a `noInfo`
    // option, which just sets the overall `logLevel` to `warn`, and so
    // continues to show things like webpack build output that we want to
    // hide. There’s a `quiet` option, but that is ignored on startup
    // so that the URL of the dev server is always printed (which again,
    // we do not want). This was the only approach I found that works —
    // pass `logLevel`, which is not actually typed as being available, but
    // is used when creating the logger :/
    ...({logLevel: 'silent'} as any),
    clientLogLevel: 'silent',
    stats: process.env.DEBUG === undefined ? false : 'verbose',
  });

  log(`Starting dev server on ${url}`);

  const httpListenPromise = new Promise<void>((resolve, reject) => {
    server.listen(port, '0.0.0.0', (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });

  await Promise.all([firstCompilePromise, httpListenPromise]);

  log(`Your extension is available at ${localhostScriptUrl}`);

  if (extension.type === 'post-purchase') {
    log(
      `You can append this query string: ${convertLegacyPostPurchaseDataToQueryString(
        getLegacyPostPurchaseData(localhostScriptUrl, extension),
      )}`,
    );
  } else {
    log(`Next, run \`shopify tunnel start --port=${port}\` in a new terminal.`);
    log(
      `You’ll then need to create a checkout on your development shop, and append this query string to the first page of checkout,`,
    );
    log(
      `replacing TUNNEL_URL with your own ngrok URL: \`?dev=https://TUNNEL_URL/query\``,
    );
  }

  const openUrl = getOpenUrl(args);

  if (openUrl) {
    const extensionPoint = namedArgument('extension-point', args);

    openUrl.searchParams.set('extension', JSON.stringify(localhostScriptUrl));

    if (extensionPoint) {
      openUrl.searchParams.set('extension-point', extensionPoint);
    }

    const opened = openBrowser(openUrl.href);

    if (opened) {
      log(`Opening a preview of your extension at ${openUrl.href}`);
    } else {
      log(`You can see a preview of your extension at ${openUrl.href}`);
    }
  }
}

function getOpenUrl(args: string[]) {
  const openArg = namedArgument('open', args);
  return (openArg ?? '').startsWith('http') ? new URL(openArg!) : undefined;
}
