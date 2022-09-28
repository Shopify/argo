import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';
import type {RenderExtension, RunExtension} from './extension-signature';
import type {StandardApi} from './standard-api';

type Components = typeof import('../components');

type AllComponents = Components[keyof Components];
/**
 * A UI extension will register for one or more extension points using `shopify.extend()`.
 * An extension point in a UI extension is a plain JavaScript function.
 * This function receives some API for interacting with the application,
 * and is expected to return a value in a specific shape.
 * The input arguments and the output type are different
 * for each extension point.
 */
export interface ExtensionPoints {
  'CustomerAccount::FullPage::RenderWithin': RenderExtension<
    StandardApi & FullPageApi,
    AllComponents
  >;
  'CustomerAccount::Returns::Initiate': RunExtension<
    StandardApi & {orderId: string},
    void
  >;
  'CustomerAccount::Profile::RenderAfter': RenderExtension<
    StandardApi,
    AllComponents
  >;
  'CustomerAccount::TopNav::RenderWithin': RunExtension<
    StandardApi,
    {url: string; label: string}[]
  >;
  'CustomerAccount::PageWidget::RenderOnce': RenderExtension<
    StandardApi,
    AllComponents
  >;

  'CustomerAccount::KitchenSink': RenderExtension<
    StandardApi & {name: string},
    AllComponents
  >;
  'CustomerAccount::KitchenSinkRun': RunExtension<
    StandardApi & {name: string},
    string
  >;
}

interface FullPageApi {
  location: StatefulRemoteSubscribable<{
    pathname: string;
    search: string;
  }>;
}

export type ExtensionPoint = keyof ExtensionPoints;
