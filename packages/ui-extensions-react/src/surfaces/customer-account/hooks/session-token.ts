import {
  SessionToken,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';

/**
 * Provides access to session tokens, which can be used to verify token claims on your app's server.
 */
export function useSessionToken<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): SessionToken {
  return useApi<Target>().sessionToken;
}