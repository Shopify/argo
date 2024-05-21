import {
  Tile,
  extension,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.tile.render',
  (root, api) => {
    const tile = root.createComponent(Tile, {
      title: 'My app',
      subtitle: 'Hello world!',
      enabled: true,
      onPress: () => {
        api.action.presentModal();
      },
    });

    root.append(tile);
  },
);
