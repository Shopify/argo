import {
  SessionToken,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {useApi} from './api';

/**
 * Provides access to session tokens, which can be used to verify token claims on your app's server.
 */
export function useSessionToken<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): SessionToken {
  return useApi<ID>().sessionToken;
}