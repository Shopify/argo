import {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';
import {AnyComponent} from '../checkout';

import {CartLineItemApi} from './api/cart-line/cart-line-item';
import type {OrderStatusApi} from './api/order-status/order-status';
import type {RenderExtension, RunExtension} from './extension';
import {
  StandardApi,
  FullExtensionNavigation,
} from './api/standard-api/standard-api';

type Components = typeof import('./components');

type AllComponents = Components[keyof Components];

/**
 * A UI extension will register for one or more extension targets using `shopify.extend()`.
 * An extension target in a UI extension is a plain JavaScript function.
 * This function receives some API for interacting with the application,
 * and is expected to return a value in a specific shape.
 * The input arguments and the output type are different
 * for each extension target.
 */
export type ExtensionTargets = OrderStatusExtensionTargets &
  CustomerAccountExtensionTargets;
export type ExtensionTarget = keyof ExtensionTargets;

export interface OrderStatusExtensionTargets {
  /**
   * A [dynamic extension target](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#dynamic-extension-targets) that renders exclusively on the Order Status Page.
   * Unlike static extension targets, dynamic extension targets render where the merchant
   * sets them using the [checkout editor](https://shopify.dev/apps/checkout/test-ui-extensions#test-the-extension-in-the-checkout-editor).
   *
   * The [supported locations](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#supported-locations) for dynamic extension targets can be previewed during development
   * by [using a URL parameter](https://shopify.dev/docs/apps/checkout/best-practices/testing-ui-extensions#dynamic-extension-targets).
   */
  'customer-account.order-status.block.render': RenderExtension<
    OrderStatusApi<'customer-account.order-status.block.render'>,
    AnyComponent
  >;
  /**
   * A static extension target that renders on every line item, inside the details
   * under the line item properties element on the Order Status Page.
   */
  'customer-account.order-status.cart-line-item.render-after': RenderExtension<
    CartLineItemApi &
      OrderStatusApi<'customer-account.order-status.cart-line-item.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after all line items on the Order Status page.
   */
  'customer-account.order-status.cart-line-list.render-after': RenderExtension<
    OrderStatusApi<'customer-account.order-status.cart-line-list.render-after'>,
    AnyComponent
  >;
  /**
   * A static extension target that is rendered after a purchase below the customer information on the Order Status page.
   */
  'customer-account.order-status.customer-information.render-after': RenderExtension<
    OrderStatusApi<'customer-account.order-status.cart-line-list.render-after'>,
    AnyComponent
  >;
}
export type OrderStatusExtensionTarget = keyof OrderStatusExtensionTargets;

export interface CustomerAccountExtensionTargets {
  'CustomerAccount::FullPage::RenderWithin': RenderExtension<
    StandardApi<'CustomerAccount::FullPage::RenderWithin'> & FullPageApi,
    AllComponents
  >;
  'CustomerAccount::Returns::Initiate': RunExtension<
    StandardApi<'CustomerAccount::Returns::Initiate'> & {orderId: string},
    void
  >;
  'CustomerAccount::KitchenSink': RenderExtension<
    StandardApi<'CustomerAccount::KitchenSink'> & {name: string},
    AllComponents
  >;
  'CustomerAccount::KitchenSinkRun': RunExtension<
    StandardApi<'CustomerAccount::KitchenSinkRun'> & {name: string},
    string
  >;
  'customer-account.dynamic.render': RenderExtension<
    StandardApi<'customer-account.dynamic.render'>,
    AllComponents
  >;
  'customer-account.order-index.block.render': RenderExtension<
    StandardApi<'customer-account.order-index.block.render'>,
    AllComponents
  >;
  'customer-account.profile.block.render': RenderExtension<
    StandardApi<'customer-account.profile.block.render'>,
    AllComponents
  >;
  'customer-account.profile.company-details.render-after': RenderExtension<
    StandardApi<'customer-account.profile.company-details.render-after'>,
    AllComponents
  >;
  'customer-account.profile.addresses.render-after': RenderExtension<
    StandardApi<'customer-account.profile.addresses.render-after'>,
    AllComponents
  >;
  'customer-account.profile.payment.render-after': RenderExtension<
    StandardApi<'customer-account.profile.payment.render-after'>,
    AllComponents
  >;
  'customer-account.profile.staff-and-permissions.render-after': RenderExtension<
    StandardApi<'customer-account.profile.staff-and-permissions.render-after'>,
    AllComponents
  >;
  'customer-account.order-status.action.menu-item.render': RenderExtension<
    StandardApi & {orderId: string},
    AllComponents
  >;
  'customer-account.order-status.action.render': RenderExtension<
    StandardApi & ActionExtensionApi & {orderId: string},
    AllComponents
  >;
  'customer-account.navigation.menu-item.render': RenderExtension<
    StandardApi<'customer-account.navigation.menu-item.render'>,
    AllComponents
  >;
}

export type CustomerAccountExtensionTarget =
  keyof CustomerAccountExtensionTargets;

/**
 * For a given extension target, returns the value that is expected to be
 * returned by that extension target’s callback type.
 */
export type ReturnTypeForExtension<Target extends keyof ExtensionTargets> =
  ReturnType<ExtensionTargets[Target]>;

/**
 * For a given extension target, returns the tuple of arguments that would
 * be provided to that extension target’s callback type.
 */
export type ArgumentsForExtension<Target extends keyof ExtensionTargets> =
  Parameters<ExtensionTargets[Target]>;

/**
 * A union type containing all of the extension targets that follow the pattern of
 * accepting a [`@remote-ui/core` `RemoteRoot`](https://github.com/Shopify/remote-ui/tree/main/packages/core)
 * and an additional `api` argument, and using those arguments to render
 * UI.
 */
export type RenderExtensionTarget = {
  [Target in keyof ExtensionTargets]: ExtensionTargets[Target] extends RenderExtension<
    any,
    any
  >
    ? Target
    : never;
}[keyof ExtensionTargets];

/**
 * A union type containing the extension targets on order status page that follow the pattern of
 * accepting a [`@remote-ui/core` `RemoteRoot`](https://github.com/Shopify/remote-ui/tree/main/packages/core)
 * and an additional `api` argument, and using those arguments to render
 * UI.
 */
export type RenderOrderStatusExtensionTarget = {
  [Target in keyof OrderStatusExtensionTargets]: OrderStatusExtensionTargets[Target] extends RenderExtension<
    any,
    any
  >
    ? Target
    : never;
}[keyof OrderStatusExtensionTargets];

/**
 * A union type containing the extension targets on customer account except order status page that follow the pattern of
 * accepting a [`@remote-ui/core` `RemoteRoot`](https://github.com/Shopify/remote-ui/tree/main/packages/core)
 * and an additional `api` argument, and using those arguments to render
 * UI.
 */
export type RenderCustomerAccountExtensionTarget = {
  [Target in keyof CustomerAccountExtensionTargets]: CustomerAccountExtensionTargets[Target] extends RenderExtension<
    any,
    any
  >
    ? Target
    : never;
}[keyof CustomerAccountExtensionTargets];

/**
 * A mapping of each “render extension” name to its callback type.
 */
export type RenderExtensions = {
  [Target in RenderExtensionTarget]: ExtensionTargets[Target];
};

type ExtractedApiFromRenderExtension<T> = T extends RenderExtension<
  infer Api,
  any
>
  ? Api
  : never;

type ExtractedAllowedComponentsFromRenderExtension<T> =
  T extends RenderExtension<any, infer Components> ? Components : never;

/**
 * For a given rendering extension target, returns the type of the API that the
 * extension will receive at runtime. This API type is the second argument to
 * the callback for that extension target. The first callback for all of the rendering
 * extension targets each receive a `RemoteRoot` object.
 */
export type ApiForRenderExtension<Target extends keyof RenderExtensions> =
  ExtractedApiFromRenderExtension<RenderExtensions[Target]>;

/**
 * For a given rendering extension target, returns the UI components that the
 * extension target supports.
 */
export type AllowedComponentsForRenderExtension<
  Target extends keyof RenderExtensions,
> = ExtractedAllowedComponentsFromRenderExtension<RenderExtensions[Target]>;

export interface FullPageApi {
  location: StatefulRemoteSubscribable<{
    pathname: string;
    search: string;
  }>;
  navigation: FullExtensionNavigation;
}

export interface ActionExtensionApi {
  close(): void;
}

/**
 * For a given extension target, returns the type of the API that the
 * extension will receive at runtime.
 */
export type ApiForExtension<Target extends keyof ExtensionTargets> =
  ExtractedApiFromExtension<ExtensionTargets[Target]>;

type ExtractedApiFromRunExtension<T> = T extends RunExtension<
  infer Api,
  unknown
>
  ? Api
  : never;

type ExtractedApiFromExtension<T> = T extends RenderExtension<any, any>
  ? ExtractedApiFromRenderExtension<T>
  : T extends RunExtension<any, any>
  ? ExtractedApiFromRunExtension<T>
  : never;

/**
 * A union type containing all extension targets that follow the pattern of
 * accepting an `api` argument, and using those arguments to run code that does not render anything, but instead return
 * a value or execute a side effect.
 */
export type RunExtensionTarget = {
  [Target in keyof ExtensionTargets]: ExtensionTargets[Target] extends RunExtension<
    any,
    any
  >
    ? Target
    : never;
}[keyof ExtensionTargets];