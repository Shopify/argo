import {OrderStatusApi} from './order-status/order-status';
import {StandardApi} from './standard-api/standard-api';
import {CartLineItemApi} from './cart-line/cart-line-item';
import {FullPageApi} from '../targets';

export interface Docs_OrderStatus_MetafieldsApi
  extends Pick<OrderStatusApi<any>, 'appMetafields' | 'metafields'> {}

export interface Docs_OrderStatus_AttributesApi
  extends Pick<OrderStatusApi<any>, 'attributes'> {}

export interface Docs_OrderStatus_BuyerIdentityApi
  extends Pick<OrderStatusApi<any>, 'buyerIdentity'> {}

export interface Docs_OrderStatus_CheckoutSettingsApi
  extends Pick<OrderStatusApi<any>, 'checkoutSettings'> {}

export interface Docs_OrderStatus_CostApi
  extends Pick<OrderStatusApi<any>, 'cost'> {}

export interface Docs_OrderStatus_LocalizationApi
  extends Pick<OrderStatusApi<any>, 'localization'> {}

export interface Docs_OrderStatus_DiscountsApi
  extends Pick<OrderStatusApi<any>, 'discountAllocations' | 'discountCodes'> {}

export interface Docs_OrderStatus_GiftCardsApi
  extends Pick<OrderStatusApi<any>, 'appliedGiftCards'> {}

export interface Docs_OrderStatus_NoteApi
  extends Pick<OrderStatusApi<any>, 'note'> {}

export interface Docs_OrderStatus_SessionTokenApi
  extends Pick<OrderStatusApi<any>, 'sessionToken'> {}

export interface Docs_OrderStatus_SettingsApi
  extends Pick<OrderStatusApi<any>, 'settings'> {}

export interface Docs_OrderStatus_SettingsApi
  extends Pick<OrderStatusApi<any>, 'settings'> {}

export interface Docs_OrderStatus_AddressApi
  extends Pick<OrderStatusApi<any>, 'shippingAddress' | 'billingAddress'> {}

export interface Docs_OrderStatus_ShopApi
  extends Pick<OrderStatusApi<any>, 'shop'> {}

export interface Docs_OrderStatus_CartLinesApi
  extends Pick<OrderStatusApi<any>, 'lines'> {}

export interface Docs_CartLineItem_CartLinesApi
  extends Pick<CartLineItemApi, 'target'> {}

export interface Docs_OrderStatus_OrderApi
  extends Pick<OrderStatusApi<any>, 'order'> {}

export interface Docs_Standard_ExtensionApi
  extends Pick<StandardApi<any>, 'extension'> {}

export interface Docs_Standard_AuthenticatedAccountApi
  extends Pick<StandardApi<any>, 'authenticatedAccount'> {}

export interface Docs_Standard_VersionApi
  extends Pick<StandardApi<any>, 'version'> {}

export interface Docs_Standard_LocalizationApi
  extends Pick<StandardApi<any>, 'localization' | 'i18n'> {}

export interface Docs_Standard_StorageApi
  extends Pick<StandardApi<any>, 'storage'> {}

export interface Docs_Standard_UIApi extends Pick<StandardApi<any>, 'ui'> {}

export interface Docs_Standard_QueryApi
  extends Pick<StandardApi<any>, 'query'> {}

export interface Docs_StandardApi extends Omit<StandardApi<any>, 'router'> {}

export interface Docs_FullPageApi extends Omit<FullPageApi, 'location'> {}