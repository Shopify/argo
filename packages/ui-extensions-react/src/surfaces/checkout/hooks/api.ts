import {useContext} from 'react';
import {
  RenderExtensionPoint,
  ApiForRenderExtension,
} from '@shopify/ui-extensions/checkout';

import {CheckoutUIExtensionError} from '../errors';
import {ExtensionApiContext} from '../context';

/**
 * Returns the full API object that was passed in to your
 * extension when it was created.
 */
export function useApi<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): ApiForRenderExtension<ID> {
  const api = useContext(ExtensionApiContext);

  if (api == null) {
    throw new CheckoutUIExtensionError(
      'You can only call this hook when running as a UI extension.',
    );
  }

  return api as ApiForRenderExtension<ID>;
}

/**
 * Returns the full API object that was passed in to your
 * extension when it was created.
 * @deprecated you shoud be importing useApi instead
 */
export function useExtensionApi<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): ApiForRenderExtension<ID> {
  return useApi();
}