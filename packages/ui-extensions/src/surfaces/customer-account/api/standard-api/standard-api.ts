import {
  Extension,
  I18n,
  Storage,
  Language,
  AuthenticatedAccount,
  GraphQLError,
  StorefrontApiVersion,
  Ui,
  SessionToken,
} from '../shared';

import type {ExtensionTarget} from '../../targets';
import {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

/**
 * The merchant-defined setting values for the extension.
 */
export interface ExtensionSettings {
  [key: string]: string | number | boolean | undefined;
}
/**
 * The following APIs are provided to all extension targets.
 */
export interface StandardApi<Target extends ExtensionTarget = ExtensionTarget> {
  /**
   * The identifier that specifies where in Shopify’s UI your code is being
   * injected. This will be one of the targets you have included in your
   * extension’s configuration file.
   *
   * @example 'customer-account.order-status.block.render'
   * @see https://shopify.dev/docs/api/checkout-ui-extensions/unstable/extension-targets-overview
   * @see https://shopify.dev/docs/apps/app-extensions/configuration#targets
   *
   * @deprecated Deprecated as of version `2023-07`, use `extension.target` instead.
   */
  extensionPoint: Target;

  /**
   * Meta information about the extension.
   */
  extension: Extension;

  /**
   * Information about the authenticated account.
   */
  authenticatedAccount: AuthenticatedAccount;

  /**
   * The renderer version being used for the extension.
   *
   * @example 'unstable'
   */
  version: Version;

  /**
   * Details about the language of the buyer.
   */
  localization: Localization;

  /**
   * Utilities for translating content and formatting values according to the current `localization`
   * of the user.
   */
  i18n: I18n;

  /**
   * Key-value storage for the extension target.
   */
  storage: Storage;

  /**
   * Provides access to session tokens, which can be used to verify token claims on your app's server.
   *
   * See [session token examples](https://shopify.dev/docs/api/customer-account-ui-extensions/apis/session-token#examples) for more information.
   */
  sessionToken: SessionToken;

  /**
   * The settings matching the settings definition written in the
   * [`shopify.ui.extension.toml`](https://shopify.dev/docs/api/customer-account-ui-extensions/configuration) file.
   *
   *  See [settings examples](https://shopify.dev/docs/api/customer-account-ui-extensions/apis/order-status-api/settings#examples) for more information.
   *
   * > Note: When an extension is being installed in the editor, the settings will be empty until
   * a merchant sets a value. In that case, this object will be updated in real time as a merchant fills in the settings.
   */
  settings: StatefulRemoteSubscribable<ExtensionSettings>;

  /**
   * Methods to interact with the extension's UI.
   */
  ui: Ui;

  navigation: StandardExtensionNavigation;

  /**
   * Used to query the Storefront GraphQL API with a prefetched token.
   *
   * See [storefront api access examples](https://shopify.dev/docs/api/customer-account-ui-extensions/apis/storefront-api#examples) for more information.
   */
  query: <Data = unknown, Variables = {[key: string]: unknown}>(
    query: string,
    options?: {variables?: Variables; version?: StorefrontApiVersion},
  ) => Promise<{data?: Data; errors?: GraphQLError[]}>;
}

export interface CompanyLocationApi {
  locationId: string;
}

export interface FulfillmentApi {
  /**
   * Id of a single fulfillment.
   */
  fulfillmentId: string;
}

export interface ReturnApi {
  /**
   * Id of a single return.
   */
  returnId: string;
}

export interface OrderApi {
  orderId: string;
}

export interface Localization {
  /**
   * The language the buyer sees in the customer account hub.
   */
  language: StatefulRemoteSubscribable<Language>;

  /**
   * This is the buyer's language, as supported by the extension.
   * If the buyer's actual language is not supported by the extension,
   * this is the fallback locale used for translations.
   *
   * For example, if the buyer's language is 'fr-CA' but your extension
   * only supports translations for 'fr', then the `isoCode` for this
   * language is 'fr'. If your extension does not provide french
   * translations at all, this value is the default locale for your
   * extension (that is, the one matching your .default.json file).
   */
  extensionLanguage: StatefulRemoteSubscribable<Language>;
}

/**
 * An enumerated value representing the type of navigation.
 */
export type NavigationType = 'push' | 'replace' | 'traverse';

export interface NavigationOptions {
  /**
   * Developer-defined information to be stored in the associated NavigationHistoryEntry once the navigation is complete, retrievable via getState().
   */
  state?: Record<string, any>;
  /**
   * An enumerated value that sets the history behavior of this navigation.
   */
  history: 'auto' | 'push' | 'replace';
}

/**
 * The NavigationHistoryEntry interface of the Navigation API represents a single navigation history entry.
 */
export interface NavigationHistoryEntry {
  /** Returns the key of the history entry. This is a unique, UA-generated value that represents the history entry's slot in the entries list rather than the entry itself. */
  key: string;
  /**
   * Returns the URL of this history entry.
   */
  url: string;
  /**
   * Returns a clone of the available state associated with this history entry.
   */
  getState(): Record<string, any>;
}

/**
 * The NavigationCurrentEntryChangeEvent interface of the Navigation API is the event object for the currententrychange event, which fires when the Navigation.currentEntry has changed.
 */
export interface NavigationCurrentEntryChangeEvent {
  /**
   * Returns the type of the navigation that resulted in the change.
   */
  navigationType: NavigationType;
  /**
   * Returns the NavigationHistoryEntry that was navigated from.
   */
  from: NavigationHistoryEntry;
}

export interface StandardExtensionNavigation {
  /**
   * The navigate() method navigates to a specific URL, updating any provided state in the history entries list.
   */
  navigate: NavigateFunction;
}

export interface FullExtensionNavigation extends StandardExtensionNavigation {
  /**
   * The currentEntry read-only property of the Navigation interface returns a NavigationHistoryEntry object representing the location the user is currently navigated to right now.
   */
  currentEntry: NavigationHistoryEntry;
  /**
   * The updateCurrentEntry() method of the Navigation interface updates the state of the currentEntry; used in cases where the state change will be independent of a navigation or reload.
   */
  updateCurrentEntry(options: {state: Record<string, any>}): void;
  addEventListener(
    type: 'currententrychange',
    cb: (event: NavigationCurrentEntryChangeEvent) => void,
  ): void;
  removeEventListener(
    type: 'currententrychange',
    cb: (event: NavigationCurrentEntryChangeEvent) => void,
  ): void;
}

export interface NavigateFunction {
  /**
   * Navigates to a specific URL, updating any provided state in the history entries list.
   * @param url The destination URL to navigate to.
   */
  (url: string, options?: NavigationOptions): void;
}

export type Version = string;
