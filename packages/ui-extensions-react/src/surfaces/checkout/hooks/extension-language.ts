import type {
  Language,
  RenderExtensionPoint,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the buyer's language, as supported by the extension.
 */
export function useExtensionLanguage<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Language {
  const {localization} = useApi<ID>();

  return useSubscription(localization.extensionLanguage);
}