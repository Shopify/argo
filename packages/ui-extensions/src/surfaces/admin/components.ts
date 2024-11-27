/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
import {ComponentChild} from 'preact';

type SizeKeyword =
  | 'small-500'
  | 'small-400'
  | 'small-300'
  | 'small-200'
  | 'small-100'
  | 'small'
  | 'base'
  | 'large'
  | 'large-100'
  | 'large-200'
  | 'large-300'
  | 'large-400'
  | 'large-500';
type ColorKeyword = 'subdued' | 'base' | 'strong';
interface GlobalProps {
  /**
   * A unique identifier for the element.
   */
  id?: string;
}
type BackgroundColorKeyword = 'transparent' | ColorKeyword;
interface BackgroundProps {
  /**
   * Adjust the background of the element.
   *
   * @default: 'transparent'
   */
  background?: BackgroundColorKeyword;
}
type ToneKeyword =
  | 'auto'
  | 'neutral'
  | 'info'
  | 'success'
  | 'caution'
  | 'warning'
  | 'critical';
type ComponentChildren = any;
type IconType =
  | 'adjust'
  | 'affiliate'
  | 'airplane'
  | 'alert-bubble'
  | 'alert-circle'
  | 'alert-diamond'
  | 'alert-location'
  | 'alert-triangle'
  | 'app-extension'
  | 'apps'
  | 'archive'
  | 'arrow-down-circle'
  | 'arrow-down-right'
  | 'arrow-down'
  | 'arrow-left-circle'
  | 'arrow-left'
  | 'arrow-right-circle'
  | 'arrow-right'
  | 'arrow-up-circle'
  | 'arrow-up-right'
  | 'arrow-up'
  | 'arrows-in-horizontal'
  | 'arrows-out-horizontal'
  | 'attachment'
  | 'automation'
  | 'backspace'
  | 'bag'
  | 'bank'
  | 'barcode'
  | 'bill'
  | 'blank'
  | 'blog'
  | 'book-open'
  | 'book'
  | 'bug'
  | 'bullet'
  | 'button-press'
  | 'button'
  | 'calculator'
  | 'calendar-check'
  | 'calendar-time'
  | 'calendar'
  | 'camera-flip'
  | 'camera'
  | 'caret-down'
  | 'caret-up'
  | 'cart-abandoned'
  | 'cart-discount'
  | 'cart-down'
  | 'cart-sale'
  | 'cart-up'
  | 'cart'
  | 'cash-dollar'
  | 'cash-euro'
  | 'cash-pound'
  | 'cash-rupee'
  | 'cash-yen'
  | 'catalog-product'
  | 'categories'
  | 'channels'
  | 'chart-cohort'
  | 'chart-donut'
  | 'chart-funnel'
  | 'chart-histogram-first-last'
  | 'chart-histogram-first'
  | 'chart-histogram-flat'
  | 'chart-histogram-full'
  | 'chart-histogram-growth'
  | 'chart-histogram-last'
  | 'chart-histogram-second-last'
  | 'chart-horizontal'
  | 'chart-line'
  | 'chart-popular'
  | 'chart-stacked'
  | 'chart-vertical'
  | 'chat-referral'
  | 'chat'
  | 'check-circle'
  | 'check'
  | 'checkbox'
  | 'chevron-down-circle'
  | 'chevron-down'
  | 'chevron-left-circle'
  | 'chevron-left'
  | 'chevron-right-circle'
  | 'chevron-right'
  | 'chevron-up-circle'
  | 'chevron-up'
  | 'circle'
  | 'clipboard-check'
  | 'clipboard-checklist'
  | 'clipboard'
  | 'clock'
  | 'code-add'
  | 'code'
  | 'collection-featured'
  | 'collection-list'
  | 'collection-reference'
  | 'collection'
  | 'color-none'
  | 'color'
  | 'compass'
  | 'complete'
  | 'compose'
  | 'confetti'
  | 'connect'
  | 'content'
  | 'contract'
  | 'corner-pill'
  | 'corner-round'
  | 'corner-square'
  | 'credit-card-cancel'
  | 'credit-card-percent'
  | 'credit-card-reader-chip'
  | 'credit-card-reader-tap'
  | 'credit-card-reader'
  | 'credit-card-secure'
  | 'credit-card-tap-chip'
  | 'credit-card'
  | 'crop'
  | 'currency-convert'
  | 'cursor-banner'
  | 'cursor-option'
  | 'cursor'
  | 'data-presentation'
  | 'data-table'
  | 'database-add'
  | 'database-connect'
  | 'database'
  | 'delete'
  | 'delivered'
  | 'delivery'
  | 'desktop'
  | 'disabled'
  | 'discount-code'
  | 'discount'
  | 'dns-settings'
  | 'dock-floating'
  | 'dock-side'
  | 'domain-landing-page'
  | 'domain-new'
  | 'domain-redirect'
  | 'domain'
  | 'drag-drop'
  | 'drag-handle'
  | 'duplicate'
  | 'edit'
  | 'email-follow-up'
  | 'email-newsletter'
  | 'email'
  | 'enabled'
  | 'enter'
  | 'envelope-soft-pack'
  | 'envelope'
  | 'exchange'
  | 'exit'
  | 'export'
  | 'external'
  | 'eye-check-mark'
  | 'eye-dropper'
  | 'eye-first'
  | 'eyeglasses'
  | 'fav'
  | 'favicon'
  | 'file'
  | 'filter'
  | 'flag'
  | 'flip-horizontal'
  | 'flip-vertical'
  | 'flower'
  | 'folder-add'
  | 'folder-down'
  | 'folder-remove'
  | 'folder-up'
  | 'folder'
  | 'food'
  | 'forklift'
  | 'forms'
  | 'games'
  | 'gauge'
  | 'geolocation'
  | 'gift-card'
  | 'gift'
  | 'globe-asia'
  | 'globe-europe'
  | 'globe'
  | 'grid'
  | 'hashtag-decimal'
  | 'hashtag'
  | 'heart'
  | 'hide'
  | 'hollow-circle'
  | 'home'
  | 'icons'
  | 'identity-card'
  | 'image-add'
  | 'image-alt'
  | 'image-explore'
  | 'image-magic'
  | 'image-none'
  | 'image-with-text-overlay'
  | 'image'
  | 'images'
  | 'import'
  | 'in-progress'
  | 'incentive'
  | 'incoming'
  | 'incomplete'
  | 'info'
  | 'inventory-updated'
  | 'inventory'
  | 'iq'
  | 'key'
  | 'keyboard-hide'
  | 'keyboard'
  | 'label-printer'
  | 'language-translate'
  | 'language'
  | 'layout-block'
  | 'layout-buy-button-horizontal'
  | 'layout-buy-button-vertical'
  | 'layout-buy-button'
  | 'layout-column-1'
  | 'layout-columns-2'
  | 'layout-columns-3'
  | 'layout-footer'
  | 'layout-header'
  | 'layout-logo-block'
  | 'layout-popup'
  | 'layout-rows-2'
  | 'layout-section'
  | 'layout-sidebar-left'
  | 'layout-sidebar-right'
  | 'lightbulb'
  | 'link'
  | 'list-bulleted'
  | 'list-numbered'
  | 'live'
  | 'location-none'
  | 'location'
  | 'lock'
  | 'map'
  | 'markets-euro'
  | 'markets-rupee'
  | 'markets-yen'
  | 'markets'
  | 'maximize'
  | 'measurement-size'
  | 'measurement-volume'
  | 'measurement-weight'
  | 'media-receiver'
  | 'megaphone'
  | 'mention'
  | 'menu-horizontal'
  | 'menu-vertical'
  | 'menu'
  | 'merge'
  | 'metafields'
  | 'metaobject-list'
  | 'metaobject-reference'
  | 'metaobject'
  | 'microphone'
  | 'minimize'
  | 'minus-circle'
  | 'minus'
  | 'mobile'
  | 'money-none'
  | 'money'
  | 'moon'
  | 'nature'
  | 'note-add'
  | 'note'
  | 'notification'
  | 'order-draft'
  | 'order-first'
  | 'order-fulfilled'
  | 'order-repeat'
  | 'order-unfulfilled'
  | 'order'
  | 'orders-status'
  | 'organization'
  | 'outdent'
  | 'outgoing'
  | 'package-fulfilled'
  | 'package-on-hold'
  | 'package-returned'
  | 'package'
  | 'page-add'
  | 'page-attachment'
  | 'page-clock'
  | 'page-down'
  | 'page-heart'
  | 'page-reference'
  | 'page-remove'
  | 'page-up'
  | 'page'
  | 'pagination-end'
  | 'pagination-start'
  | 'paint-brush-flat'
  | 'paint-brush-round'
  | 'paper-check'
  | 'partially-complete'
  | 'passkey'
  | 'pause-circle'
  | 'payment-capture'
  | 'payment'
  | 'payout-dollar'
  | 'payout-euro'
  | 'payout-pound'
  | 'payout-rupee'
  | 'payout-yen'
  | 'payout'
  | 'person-add'
  | 'person-exit'
  | 'person-lock'
  | 'person-remove'
  | 'person-segment'
  | 'person'
  | 'personalized-text'
  | 'phone-in'
  | 'phone-out'
  | 'phone'
  | 'pin'
  | 'plan'
  | 'play-circle'
  | 'play'
  | 'plus-circle'
  | 'plus'
  | 'point-of-sale'
  | 'price-list'
  | 'print'
  | 'product-add'
  | 'product-cost'
  | 'product-list'
  | 'product-reference'
  | 'product-remove'
  | 'product-return'
  | 'product-unavailable'
  | 'product'
  | 'profile'
  | 'question-circle'
  | 'receipt-dollar'
  | 'receipt-euro'
  | 'receipt-folded'
  | 'receipt-paid'
  | 'receipt-pound'
  | 'receipt-refund'
  | 'receipt-rupee'
  | 'receipt-yen'
  | 'receipt'
  | 'redo'
  | 'referral-code'
  | 'refresh'
  | 'remove-background'
  | 'reorder'
  | 'replace'
  | 'replay'
  | 'reset'
  | 'return'
  | 'reward'
  | 'rotate-left'
  | 'rotate-right'
  | 'sandbox'
  | 'save'
  | 'savings'
  | 'search-list'
  | 'search-recent'
  | 'search-resource'
  | 'search'
  | 'select'
  | 'send'
  | 'settings'
  | 'share'
  | 'shield-check-mark'
  | 'shield-none'
  | 'shield-pending'
  | 'shield-person'
  | 'shipping-label'
  | 'shopcodes'
  | 'slideshow'
  | 'smiley-happy'
  | 'smiley-joy'
  | 'smiley-neutral'
  | 'smiley-sad'
  | 'social-ad'
  | 'social-post'
  | 'sort-ascending'
  | 'sort-descending'
  | 'sort'
  | 'sound'
  | 'sports'
  | 'star-filled'
  | 'star'
  | 'status-active'
  | 'status'
  | 'stop-circle'
  | 'store-import'
  | 'store-managed'
  | 'store-online'
  | 'store'
  | 'sun'
  | 'tablet'
  | 'target'
  | 'tax'
  | 'team'
  | 'text-align-center'
  | 'text-align-left'
  | 'text-align-right'
  | 'text-block'
  | 'text-bold'
  | 'text-color'
  | 'text-font-list'
  | 'text-font'
  | 'text-grammar'
  | 'text-in-columns'
  | 'text-in-rows'
  | 'text-indent-remove'
  | 'text-indent'
  | 'text-italic'
  | 'text-quote'
  | 'text-title'
  | 'text-underline'
  | 'text-with-image'
  | 'text'
  | 'theme-edit'
  | 'theme-store'
  | 'theme-template'
  | 'theme'
  | 'thumbs-down'
  | 'thumbs-up'
  | 'tip-jar'
  | 'toggle-off'
  | 'toggle-on'
  | 'transaction-fee-dollar'
  | 'transaction-fee-euro'
  | 'transaction-fee-pound'
  | 'transaction-fee-rupee'
  | 'transaction-fee-yen'
  | 'transaction'
  | 'transfer-in'
  | 'transfer-internal'
  | 'transfer-out'
  | 'transfer'
  | 'truck'
  | 'undo'
  | 'unknown-device'
  | 'unlock'
  | 'upload'
  | 'variant'
  | 'view'
  | 'viewport-narrow'
  | 'viewport-short'
  | 'viewport-tall'
  | 'viewport-wide'
  | 'wallet'
  | 'wand'
  | 'watch'
  | 'wifi'
  | 'work'
  | 'wrench'
  | 'x-circle'
  | 'x';
export interface BadgeProps$1 extends GlobalProps {
  /**
   * The content of the Badge.
   */
  children?: ComponentChildren;
  /**
   * Sets the tone of the Badge, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Modify the color to be more or less intense.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * The type of icon to be displayed in the badge.
   */
  icon?: IconType;
  /**
   * The position of the icon in relation to the text.
   */
  iconPosition?: 'start' | 'end';
  /**
   * A label that describes the purpose or contents of the Badge. When set,
   * it will be announced to users using assistive technologies and will
   * provide them with more context.
   *
   * Use this when the badge text is not enough context for users using assistive technologies.
   */
  accessibilityLabel?: string;
  /**
   * Adjusts the size.
   *
   * @default 'base'
   */
  size?: SizeKeyword;
}
type ExtractStrict<T, U extends T> = Extract<T, U>;
export type MaybeAllValuesShorthandProperty<T extends string> =
  | T
  | `${T} ${T}`
  | `${T} ${T} ${T}`
  | `${T} ${T} ${T} ${T}`;
type MaybeTwoValuesShorthandProperty<T extends string> = T | `${T} ${T}`;
type AnyString = string & {};
interface DisplayProps {
  /**
   * Sets the outer display type of the component. The outer type sets a component's participation in [flow layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout).
   *
   * - `auto` the component's initial value. The actual value depends on the component and context.
   * - `none` hides the component from display and removes it from the accessibility tree, making it invisible to screen readers.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
   * @default 'auto'
   */
  display?: 'auto' | 'none';
}
interface AccessibilityRoleProps {
  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   *
   * Although, in HTML hosts, this property changes the element used,
   * changing this property must not impact the visual styling of inside or outside of the box.
   *
   * @default 'generic'
   */
  accessibilityRole?: AccessibilityRole;
}
type AccessibilityRole =
  /**
   * Used to indicate the primary content.
   *
   * In an HTML host, `main` will render a `<main>` element.
   * Learn more about the [`<main>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role) in the MDN web docs.
   */
  | 'main'
  /**
   * Used to indicate the component is a header.
   *
   * In an HTML host `header` will render a `<header>` element.
   * Learn more about the [`<header>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/main_role) in the MDN web docs.
   */
  | 'header'
  /**
   * Used to display information such as copyright information, navigation links, and privacy statements.
   *
   * In an HTML host `footer` will render a `<footer>` element.
   * Learn more about the [`<footer>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role) in the MDN web docs.
   */
  | 'footer'
  /**
   * Used to indicate a generic section.
   * Sections should always have a `Heading` or an accessible name provided in the `accessibilityLabel` property.
   *
   * In an HTML host `section` will render a `<section>` element.
   * Learn more about the [`<section>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/region_role) in the MDN web docs.
   *
   */
  | 'section'
  /**
   * Used to designate a supporting section that relates to the main content.
   *
   * In an HTML host `aside` will render an `<aside>` element.
   * Learn more about the [`<aside>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role) in the MDN web docs.
   */
  | 'aside'
  /**
   * Used to identify major groups of links used for navigating.
   *
   * In an HTML host `navigation` will render a `<nav>` element.
   * Learn more about the [`<nav>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role) in the MDN web docs.
   */
  | 'navigation'
  /**
   * Used to identify a list of ordered items.
   *
   * In an HTML host `ordered-list` will render a `<ol>` element.
   * Learn more about the [`<ol>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) in the MDN web docs.
   */
  | 'ordered-list'
  /**
   * Used to identify an item inside a list of items.
   *
   * In an HTML host `list-item` will render a `<li>` element.
   * Learn more about the [`<li>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role) in the MDN web docs.
   */
  | 'list-item'
  /**
   * Used to indicates the component acts as a divider that separates and distinguishes sections of content in a list of items.
   *
   * In an HTML host `list-item-separator` will render as `<li role="separator">`.
   * Learn more about the [`<li>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and the [`separator` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) in the MDN web docs.
   */
  | 'list-item-separator'
  /**
   * Used to identify a list of unordered items.
   *
   * In an HTML host `unordered-list` will render a `<ul>` element.
   * Learn more about the [`<ul>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) and its [implicit role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) in the MDN web docs.
   */
  | 'unordered-list'
  /**
   * Used to indicates the component acts as a divider that separates and distinguishes sections of content.
   *
   * In an HTML host `separator` will render as `<div role="separator">`.
   * Learn more about the [`separator` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) in the MDN web docs.
   */
  | 'separator'
  /**
   * Used to define a live region containing advisory information for the user that is not important enough to be an alert.
   *
   * In an HTML host `status` will render as `<div role="status">`.
   * Learn more about the [`status` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) in the MDN web docs.
   */
  | 'status'
  /**
   * Used for important, and usually time-sensitive, information.
   *
   * In an HTML host `alert` will render as `<div role="alert">`.
   * Learn more about the [`alert` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) in the MDN web docs.
   */
  | 'alert'
  /**
   * Used to create a nameless container element which has no semantic meaning on its own.
   *
   * In an HTML host `generic'` will render a `<div>` element.
   * Learn more about the [`generic` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role) in the MDN web docs.
   */
  | 'generic'
  /**
   * Used to strip the semantic meaning of an element, but leave the visual styling intact.
   *
   * Synonym for `none`
   * Learn more about the [`presentation` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) in the MDN web docs.
   */
  | 'presentation'
  /**
   * Used to strip the semantic meaning of an element, but leave the visual styling intact.
   *
   * Synonym for `presentation`
   * Learn more about the [`none` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/none_role) in the MDN web docs.
   */
  | 'none';
interface AccessibilityVisibilityProps {
  /**
   * Changes the visibility of the element.
   *
   * - `visible`: the element is visible to all users.
   * - `hidden`: the element is removed from the accessibility tree but remains visible.
   * - `exclusive`: the element is visually hidden but remains in the accessibility tree.
   *
   * @default 'visible'
   */
  accessibilityVisibility?: 'visible' | 'hidden' | 'exclusive';
}
type PaddingKeyword = SizeKeyword | 'none';
interface PaddingProps {
  /**
   * Adjust the padding of all edges.
   *
   * 1-to-4-value syntax (@see https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is
   * supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:
   *
   * - 4 values: `block-start inline-end block-end inline-start`
   * - 3 values: `block-start inline block-end`
   * - 2 values: `block inline`
   *
   * For example:
   * - `large` means block-start, inline-end, block-end and inline-start paddings are `large`.
   * - `large none` means block-start and block-end paddings are `large`, inline-start and inline-end paddings are `none`.
   * - `large none large` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `none`.
   * - `large none large small` means block-start padding is `large`, inline-end padding is `none`, block-end padding is `large` and inline-start padding is `small`.
   *
   * A padding value of `auto` will use the default padding for the closest container that has had its usual padding removed.
   *
   * @default 'none'
   */
  padding?: MaybeAllValuesShorthandProperty<PaddingKeyword>;
  /**
   * Adjust the block-padding.
   *
   * - `large none` means block-start padding is `large`, block-end padding is `none`.
   *
   * This overrides the block value of `padding`.
   *
   * @default '' - meaning no override
   */
  paddingBlock?: MaybeTwoValuesShorthandProperty<PaddingKeyword> | '';
  /**
   * Adjust the block-start padding.
   *
   * This overrides the block-start value of `paddingBlock`.
   *
   * @default '' - meaning no override
   */
  paddingBlockStart?: PaddingKeyword | '';
  /**
   * Adjust the block-end padding.
   *
   * This overrides the block-end value of `paddingBlock`.
   *
   * @default '' - meaning no override
   */
  paddingBlockEnd?: PaddingKeyword | '';
  /**
   * Adjust the inline padding.
   *
   * - `large none` means inline-start padding is `large`, inline-end padding is `none`.
   *
   * This overrides the inline value of `padding`.
   *
   * @default '' - meaning no override
   */
  paddingInline?: MaybeTwoValuesShorthandProperty<PaddingKeyword> | '';
  /**
   * Adjust the inline-start padding.
   *
   * This overrides the inline-start value of `paddingInline`.
   *
   * @default '' - meaning no override
   */
  paddingInlineStart?: PaddingKeyword | '';
  /**
   * Adjust the inline-end padding.
   *
   * This overrides the inline-end value of `paddingInline`.
   *
   * @default '' - meaning no override
   */
  paddingInlineEnd?: PaddingKeyword | '';
}
type SizeUnits = `${number}px` | `${number}%` | `0`;
type SizeUnitsOrAuto = SizeUnits | 'auto';
type SizeUnitsOrNone = SizeUnits | 'none';
interface SizingProps {
  /**
   * Adjust the block size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/block-size
   *
   * @default 'auto'
   */
  blockSize?: SizeUnitsOrAuto;
  /**
   * Adjust the minimum block size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-block-size
   *
   * @default '0'
   */
  minBlockSize?: SizeUnits;
  /**
   * Adjust the maximum block size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-block-size
   *
   * @default 'none'
   */
  maxBlockSize?: SizeUnitsOrNone;
  /**
   * Adjust the inline size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/inline-size
   *
   * @default 'auto'
   */
  inlineSize?: SizeUnitsOrAuto;
  /**
   * Adjust the minimum inline size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-inline-size
   *
   * @default '0'
   */
  minInlineSize?: SizeUnits;
  /**
   * Adjust the maximum inline size.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-inline-size
   *
   * @default 'none'
   */
  maxInlineSize?: SizeUnitsOrNone;
}
type BorderStyleKeyword = 'none' | 'solid' | 'dashed' | 'dotted' | 'auto';
type BorderRadiusKeyword = SizeKeyword | 'none';
type BorderShorthand =
  | SizeKeyword
  | `${SizeKeyword} ${ColorKeyword}`
  | `${SizeKeyword} ${ColorKeyword} ${BorderStyleKeyword}`;
interface BorderProps {
  /**
   * Set the border via the shorthand property.
   *
   * This can be a size, optionally followed by a color, optionally followed by a style.
   *
   * If the color is not specified, it will be `base`.
   *
   * If the style is not specified, it will be `auto`.
   *
   * Values can be overridden by `borderWidth`, `borderStyle`, and `borderColor`.
   *
   * @example
   * // The following are equivalent:
   * <Box border="large-100 strong dashed" />
   * <Box borderWidth="large-100" borderColor="strong" borderStyle="dashed" />
   *
   * @default 'none' - equivalent to `none base auto`.
   */
  border?: BorderShorthand;
  /**
   * Set the width of the border.
   *
   * If set, it takes precedence over the `border` property's width.
   *
   * Like CSS, up to 4 values can be specified.
   *
   * If one value is specified, it applies to all sides.
   *
   * If two values are specified, they apply to the block sides and inline sides respectively.
   *
   * If three values are specified, they apply to the block-start, both inline sides, and block-end respectively.
   *
   * If four values are specified, they apply to the block-start, block-end, inline-start, and inline-end sides respectively.
   *
   * @default '' - meaning no override
   */
  borderWidth?: MaybeAllValuesShorthandProperty<SizeKeyword> | '';
  /**
   * Set the style of the border.
   *
   * If set, it takes precedence over the `border` property's style.
   *
   * Like CSS, up to 4 values can be specified.
   *
   * If one value is specified, it applies to all sides.
   *
   * If two values are specified, they apply to the block sides and inline sides respectively.
   *
   * If three values are specified, they apply to the block-start, both inline sides, and block-end respectively.
   *
   * If four values are specified, they apply to the block-start, block-end, inline-start, and inline-end sides respectively.
   *
   * @default '' - meaning no override
   */
  borderStyle?: MaybeAllValuesShorthandProperty<BorderStyleKeyword> | '';
  /**
   * Set the color of the border.
   *
   * If set, it takes precedence over the `border` property's color.
   *
   * @default '' - meaning no override
   */
  borderColor?: ColorKeyword | '';
  /**
   * Set the radius of the border.
   *
   * 1-to-4-value syntax (@see https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties#edges_of_a_box) is
   * supported. Note that, contrary to the CSS, it uses flow-relative values and the order is:
   *
   * - 4 values: `start-start start-end end-end end-start`
   * - 3 values: `start-start (start-end & end-start) start-end`
   * - 2 values: `(start-start & end-end) (start-end & end-start)`
   *
   * For example:
   * - `small-100` means start-start, start-end, end-end and end-start border radii are `small-100`.
   * - `small-100 none` means start-start and end-end border radii are `small-100`, start-end and end-start border radii are `none`.
   * - `small-100 none large-100` means start-start border radius is `small-100`, start-end border radius is `none`, end-end border radius is `large-100` and end-start border radius is `none`.
   * - `small-100 none large-100 small-100` means start-start border radius is `small-100`, start-end border radius is `none`, end-end border radius is `large-100` and end-start border radius is `small-100`.
   *
   * @defaultValue 'none'
   */
  borderRadius?: MaybeAllValuesShorthandProperty<BorderRadiusKeyword>;
}
interface BaseBoxProps$1
  extends GlobalProps,
    AccessibilityVisibilityProps,
    BackgroundProps,
    DisplayProps,
    SizingProps,
    PaddingProps,
    BorderProps {
  /**
   * The content of the Box.
   */
  children?: ComponentChildren;
  /**
   * A label that describes the purpose or contents of the element.
   * When set, it will be announced to users using assistive technologies and will provide them with more context.
   *
   * Only use this when the element's content is not enough context for users using assistive technologies.
   */
  accessibilityLabel?: string;
}
interface BaseBoxProps$1WithRole
  extends BaseBoxProps$1,
    AccessibilityRoleProps {}
export interface BoxProps$1 extends BaseBoxProps$1WithRole {}
interface FocusEventProps {
  /**
   * Callback when the element loses focus.
   */
  onBlur?: () => void;
  /**
   * Callback when the element receives focus.
   */
  onFocus?: () => void;
}
interface ButtonBehaviorProps extends InteractionProps, FocusEventProps {
  /**
   * The behavior of the button.
   *
   * 'submit' - Used to indicate the component acts as a submit button, meaning it submits the closest form.
   * 'button' - Used to indicate the component acts as a button, meaning it has no default action.
   * 'reset' - Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).
   *
   * This property is ignored if the component supports `href` and it's set.
   *
   * @default 'button'
   */
  type?: 'submit' | 'button' | 'reset';
  /**
   * Callback when the button is activated.
   * This will be called before the action indicated by `type`.
   */
  onClick?: () => void;
  /**
   * Disables the button, meaning it cannot be clicked or receive focus.
   */
  disabled?: boolean;
  /**
   * Replaces content with a loading indicator while a background action is being performed.
   *
   * This also disables the button.
   */
  loading?: boolean;
}
interface LinkBehaviorProps extends FocusEventProps {
  /**
   * The URL to link to.
   * If set, it will navigate to the location specified by `href` after executing the `onClick` callback.
   */
  href?: string;
  /**
   * Specifies where to display the linked URL
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
   */
  target?: string;
  /**
   * Causes the browser to treat the linked URL as a download. Download only works for same-origin URLs, or the blob: and data: schemes.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download
   */
  download?: boolean;
  /**
   * Callback when the link is activated.
   * This will be called before navigating to the location specified by `href`.
   */
  onClick?: () => void;
}
export interface InteractionProps {
  /**
   * ID of a component that should respond to activations (e.g. clicks) on this pressable.
   *
   * See `activateAction` for how to control the behavior of the target.
   */
  activateTarget?: string;
  /**
   * Sets the action the `activateTarget` should take when this pressable is activated.
   *
   * See the documentation of particular components for the actions they support.
   *
   * @default 'auto' - a default action for the target component.
   */
  activateAction?: 'auto' | 'show' | 'hide' | 'toggle' | 'copy';
}
interface BasePressableProps extends ButtonBehaviorProps, LinkBehaviorProps {}
export interface ButtonProps$1 extends GlobalProps, BasePressableProps {
  /**
   * A label that describes the purpose or contents of the Button. It will be read to users using assistive technologies such as screen readers.
   *
   * Use this when using only an icon or the button text is not enough context
   * for users using assistive technologies.
   */
  accessibilityLabel?: string;
  /**
   * The content of the Button.
   */
  children?: ComponentChildren;
  /**
   * The type of icon to be displayed in the button.
   */
  icon?: IconType;
  /**
   * Changes the visual appearance of the Button.
   *
   * @default 'auto' - the variant is automatically determined by the Button's context
   */
  variant?: 'auto' | 'primary' | 'secondary' | 'tertiary';
  /**
   * Sets the tone of the Button, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Indicate the text language. Useful when the text is in a different language than the rest of the page.
   * It will allow assistive technologies such as screen readers to invoke the correct pronunciation.
   * [Reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("subtag" label)
   */
  lang?: string;
}
interface BaseInputProps {
  /**
   * An identifier for the field that is unique within the nearest
   * containing `Form` component.
   */
  name?: string;
  /**
   * Disables the field, disallowing any interaction.
   */
  disabled?: boolean;
}
interface InputProps extends BaseInputProps {
  /**
   * Callback when the user has **finished editing** a field, e.g. once they have blurred the field.
   */
  onChange?: (newValue: string) => void;
  /**
   * Callback when the user makes any changes in the field.
   */
  onInput?: (newValue: string) => void;
  /**
   * The current value for the field. If omitted, the field will be empty.
   */
  value?: string;
  /**
   * The default value for the field.
   */
  defaultValue?: string;
}
interface FieldErrorProps {
  /**
   * Indicate an error to the user. The field will be given a specific stylistic treatment
   * to communicate problems that have to be resolved immediately.
   */
  error?: string;
}
interface BasicFieldProps extends FieldErrorProps {
  /**
   * Whether the field needs a value. This requirement adds semantic value
   * to the field, but it will not cause an error to appear automatically.
   * If you want to present an error when this field is empty, you can do
   * so with the `error` prop.
   */
  required?: boolean;
  /**
   * Content to use as the field label.
   */
  label?: string;
}
interface FieldDetailsProps {
  /**
   * Additional text to provide context or guidance for the field.
   * This text is displayed along with the field and its label
   * to offer more information or instructions to the user.
   *
   * This will also be exposed to screen reader users.
   */
  details?: string;
}
interface FieldProps
  extends BasicFieldProps,
    InputProps,
    FocusEventProps,
    FieldDetailsProps {
  /**
   * A short hint that describes the expected value of the field.
   */
  placeholder?: string;
}
interface BaseTextFieldProps extends FieldProps {
  /**
   * The field cannot be edited by the user. It is focusable will be announced by screen readers.
   */
  readOnly?: boolean;
}
interface FieldDecorationProps {
  /**
   * A value to be displayed immediately after the editable portion of the field.
   *
   * This is useful for displaying an implied part of the value, such as "@shopify.com", or "%".
   *
   * This cannot be edited by the user, and it isn't included in the value of the field.
   *
   * It may not be displayed until the user has interacted with the input.
   * For example, an inline label may take the place of the suffix until the user focuses the input.
   *
   * @default ''
   */
  suffix?: string;
  /**
   * A value to be displayed immediately before the editable portion of the field.
   *
   * This is useful for displaying an implied part of the value, such as "https://" or "+353".
   *
   * This cannot be edited by the user, and it isn't included in the value of the field.
   *
   * It may not be displayed until the user has interacted with the input.
   * For example, an inline label may take the place of the prefix until the user focuses the input.
   *
   * @default ''
   */
  prefix?: string;
  /**
   * The type of icon to be displayed in the field.
   */
  icon?: IconType;
  /**
   * Additional content to be displayed in the field.
   * Commonly used to display an icon that activates a tooltip providing more information.
   */
  accessory?: ComponentChildren;
}
interface MinMaxLengthProps {
  /**
   * Specifies the maximum number of characters allowed.
   */
  maxLength?: number;
  /**
   * Specifies the min number of characters allowed.
   */
  minLength?: number;
}
interface BaseSelectableProps {
  /**
   * A label used for users using assistive technologies like screen readers. When set, any children or `label` supplied will not be announced.
   * This can also be used to display a control without a visual label, while still providing context to users using screen readers.
   */
  accessibilityLabel?: string;
  /**
   * Disables the control, disallowing any interaction.
   */
  disabled?: boolean;
  /**
   * The value used in form data when the control is checked.
   */
  value?: string;
}
interface BaseOptionProps extends BaseSelectableProps {
  /**
   * Whether the control is active.
   */
  selected?: boolean;
  /**
   * Whether the control is active by default.
   */
  defaultSelected?: boolean;
  /**
   * The content to use as the label.
   */
  children?: ComponentChildren;
}
interface BaseCheckableProps extends BaseSelectableProps {
  /**
   * Visual content to use as the control label.
   */
  label?: string;
  /**
   * Whether the control is active.
   */
  checked?: boolean;
  /**
   * Whether the control is active by default.
   */
  defaultChecked?: boolean;
  /**
   * An identifier for the control that is unique within the nearest
   * containing `Form` component.
   */
  name?: string;
  /**
   * A callback that is run whenever the control is changed.
   */
  onChange?: (checked: boolean) => void;
  /**
   * A callback that is run whenever the control is changed.
   */
  onInput?: (checked: boolean) => void;
}
export interface CheckboxProps$1 extends GlobalProps, BaseCheckableProps {
  /**
   * Indicate an error to the user. The field will be given a specific stylistic treatment
   * to communicate problems that have to be resolved immediately.
   */
  error?: string;
  /**
   * Additional text to provide context or guidance for the input.
   * This text is displayed along with the input and its label
   * to offer more information or instructions to the user.
   */
  details?: string;
  /**
   * Whether to display the checkbox in an indeterminate state (neither checked or unchecked).
   *
   * In terms of appearance, this takes priority over the `checked` prop.
   * But this is purely a visual change.
   * Whether the value is submitted along with a form is still down to the `checked` prop.
   */
  indeterminate?: boolean;
  /**
   * Whether the field needs a value. This requirement adds semantic value
   * to the field, but it will not cause an error to appear automatically.
   * If you want to present an error when this field is empty, you can do
   * so with the `error` prop.
   */
  required?: boolean;
}
interface AutocompleteProps<AutocompleteField extends AnyAutocompleteField> {
  /**
   * A hint as to the intended content of the field.
   *
   * When set to `true`, this property indicates that the field should support
   * autofill, but you do not have any more semantic information on the intended
   * contents.
   *
   * When set to `false`, you are indicating that this field contains sensitive
   * information, or contents that are never saved, like one-time codes.
   *
   * Alternatively, you can provide value which describes the
   * specific data you would like to be entered into this field during autofill.
   *
   * @see Learn more about the set of {@link https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill-detail-tokens|autocomplete values} supported in browsers.
   */
  autocomplete?:
    | AutocompleteField
    | `${AutocompleteSection} ${AutocompleteField}`
    | `${AutocompleteGroup} ${AutocompleteField}`
    | `${AutocompleteSection} ${AutocompleteGroup} ${AutocompleteField}`
    | boolean;
}
type AutocompleteSection = `section-${string}`;
type AutocompleteGroup = 'shipping' | 'billing';
type AutocompleteAddressGroup = 'fax' | 'home' | 'mobile' | 'pager';
type AutocompleteFieldTelephoneAlias = 'tel' | 'telephone';
type AutocompleteFieldBirthdayAlias = 'bday' | 'birthday';
type AutocompleteFieldCreditCardAlias = 'cc' | 'credit-card';
type AutocompleteFieldInstantMessageAlias = 'impp' | 'instant-message';
type AutocompleteFieldSecurityCodeAlias = 'csc' | 'security-code';
type AnyAutocompleteField =
  | 'additional-name'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'country-name'
  | 'country'
  | 'current-password'
  | 'email'
  | 'family-name'
  | 'given-name'
  | 'honorific-prefix'
  | 'honorific-suffix'
  | 'language'
  | 'name'
  | 'new-password'
  | 'nickname'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'photo'
  | 'postal-code'
  | 'sex'
  | 'street-address'
  | 'transaction-amount'
  | 'transaction-currency'
  | 'url'
  | 'username'
  | `${AutocompleteFieldBirthdayAlias}-day`
  | `${AutocompleteFieldBirthdayAlias}-month`
  | `${AutocompleteFieldBirthdayAlias}-year`
  | `${AutocompleteFieldBirthdayAlias}`
  | `${AutocompleteFieldCreditCardAlias}-additional-name`
  | `${AutocompleteFieldCreditCardAlias}-expiry-month`
  | `${AutocompleteFieldCreditCardAlias}-expiry-year`
  | `${AutocompleteFieldCreditCardAlias}-expiry`
  | `${AutocompleteFieldCreditCardAlias}-family-name`
  | `${AutocompleteFieldCreditCardAlias}-given-name`
  | `${AutocompleteFieldCreditCardAlias}-name`
  | `${AutocompleteFieldCreditCardAlias}-number`
  | `${AutocompleteFieldCreditCardAlias}-${AutocompleteFieldSecurityCodeAlias}`
  | `${AutocompleteFieldCreditCardAlias}-type`
  | `${AutocompleteAddressGroup} email`
  | `${AutocompleteFieldInstantMessageAlias}`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldInstantMessageAlias}`
  | `${AutocompleteFieldTelephoneAlias}`
  | `${AutocompleteFieldTelephoneAlias}-area-code`
  | `${AutocompleteFieldTelephoneAlias}-country-code`
  | `${AutocompleteFieldTelephoneAlias}-extension`
  | `${AutocompleteFieldTelephoneAlias}-local-prefix`
  | `${AutocompleteFieldTelephoneAlias}-local-suffix`
  | `${AutocompleteFieldTelephoneAlias}-local`
  | `${AutocompleteFieldTelephoneAlias}-national`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-area-code`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-country-code`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-extension`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-local-prefix`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-local-suffix`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-local`
  | `${AutocompleteAddressGroup} ${AutocompleteFieldTelephoneAlias}-national`;
type TextAutocompleteField = ExtractStrict<
  AnyAutocompleteField,
  | 'additional-name'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'country-name'
  | 'country'
  | 'family-name'
  | 'given-name'
  | 'honorific-prefix'
  | 'honorific-suffix'
  | 'language'
  | 'name'
  | 'nickname'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'postal-code'
  | 'sex'
  | 'street-address'
  | 'transaction-currency'
  | 'username'
  | `${AutocompleteFieldCreditCardAlias}-name`
  | `${AutocompleteFieldCreditCardAlias}-given-name`
  | `${AutocompleteFieldCreditCardAlias}-additional-name`
  | `${AutocompleteFieldCreditCardAlias}-family-name`
  | `${AutocompleteFieldCreditCardAlias}-type`
>;
export interface DividerProps$1 extends GlobalProps {
  /**
   * Specify the direction of the divider.
   *
   * An 'inline' divider separates blocks of content.
   * In a left-to-right or right-to-left writing mode, this would typically be a horizontal line.
   *
   * A 'block' divider separates items within the current line of content.
   * In a left-to-right or right-to-left writing mode, this would typically be a vertical line.
   *
   * @default 'inline'
   */
  direction?: 'inline' | 'block';
  /**
   * Modify the color to be more or less intense.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
}
type SpacingKeyword = SizeKeyword | 'none';
interface GapProps {
  /**
   * Adjust spacing between elements.
   *
   * A single value applies to both axes.
   * A pair of values (eg `large-100 large-500`) can be used to set the inline and block axes respectively.
   *
   * @default 'auto'
   */
  gap?: MaybeTwoValuesShorthandProperty<SpacingKeyword>;
  /**
   * Adjust spacing between elements in the block axis.
   *
   * This overrides the row value of `gap`.
   *
   * @default '' - meaning no override
   */
  rowGap?: SpacingKeyword | '';
  /**
   * Adjust spacing between elements in the inline axis.
   *
   * This overrides the column value of `gap`.
   *
   * @default '' - meaning no override
   */
  columnGap?: SpacingKeyword | '';
}
type BaselinePosition = 'baseline' | 'first baseline' | 'last baseline';
type ContentDistribution =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
type ContentPosition = 'center' | 'start' | 'end';
type OverflowPosition = `unsafe ${ContentPosition}` | `safe ${ContentPosition}`;
type AlignItemsKeyword =
  | 'normal'
  | 'stretch'
  | BaselinePosition
  | OverflowPosition
  | ContentPosition;
type JustifyContentKeyword =
  | 'normal'
  | ContentDistribution
  | OverflowPosition
  | ContentPosition;
type AlignContentKeyword =
  | 'normal'
  | BaselinePosition
  | ContentDistribution
  | OverflowPosition
  | ContentPosition;
export interface HeadingProps$1
  extends GlobalProps,
    AccessibilityVisibilityProps {
  /** A unique identifier for the field. */
  id?: string;
  /**
   * The content of the Heading.
   */
  children?: ComponentChildren;
  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   *
   * @default 'heading'
   *
   * - `heading` defines the element as a heading to a page or section.
   * - `presentation` means the heading level will be stripped,
   * and will prevent the element’s implicit ARIA semantics from
   * being exposed to the accessibility tree.
   * - `none` is a synonym for the `presentation` role.
   */
  accessibilityRole?:
    | 'heading'
    | ExtractStrict<AccessibilityRole, 'presentation' | 'none'>;
  /**
   * Truncates the text content to the specified number of lines.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp
   *
   * @default 'none'
   */
  lineClamp?: number | 'none';
}
export interface IconProps extends GlobalProps {
  /**
   * Sets the tone of the Icon, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Modify the color to be more or less intense.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * Adjusts the size of the icon.
   *
   * @default 'base'
   */
  size?: SizeKeyword | 'fill';
  type?: IconType | AnyString;
}
interface BaseImageProps$1 {
  /**
   * An alternative text description that describe the image for the reader to
   * understand what it is about. It is extremely useful for both users using
   * assistive technology and sighted users. A well written `description`
   * provides people with visual impairments the ability to participate in
   * consuming non-text content. When a screen readers encounters an `Image`,
   * the description is read and announced aloud. If an image fails to load,
   * potentially due to a poor connection, the `description` is displayed on
   * screen instead. This has the benefit of letting a sighted buyer know an
   * image was meant to load here, but as an alternative, they’re still able to
   * consume the text content. Read
   * [considerations when writing alternative text](https://ux.shopify.com/considerations-when-writing-alt-text-a9c1985a8204)
   * to learn more.
   *
   * @default `''`
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#alt
   */
  alt?: string;
  /**
   * A set of media conditions and their corresponding sizes.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes
   */
  sizes?: string;
  /**
   * The image source (either a remote URL or a local file resource).
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#src
   */
  src?: string;
  /**
   * A set of image sources and their width or pixel density descriptors.
   *
   * This overrides the `src` property.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset
   */
  srcSet?: string;
}
type optionalSpace = '' | ' ';
export interface ImageProps$1 extends GlobalProps, BaseImageProps$1 {
  /**
   * Sets the semantic meaning of the component’s content. When set,
   * the role will be used by assistive technologies to help users
   * navigate the page.
   *
   * @default 'img'. Note that the 'img' role doesn't need to be applied if
   * the host applies it for you; for example, an HTML host rendering
   * an <img> element should NOT apply the `img` role.
   */
  accessibilityRole?:
    | 'img'
    | ExtractStrict<AccessibilityRole, 'presentation' | 'none'>;
  /**
   *
   * The displayed inline width of the image.
   *
   * `fill`: the image will takes up 100% of the available inline-size.
   * `auto`: the image will be displayed at its natural size.
   *
   * @default 'fill'
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#width
   */
  inlineSize?: 'fill' | 'auto';
  /**
   *
   * The aspect ratio of the image.
   * This will be respected even if the image hasn’t loaded yet.
   *
   * @default ''
   */
  aspectRatio?: `${number}${optionalSpace}/${optionalSpace}${number}` | number;
  /**
   * Determines the loading behavior of the image:
   * - `eager`: Immediately loads the image, irrespective of its position within the visible viewport.
   * - `lazy`: Delays loading the image until it approaches a specified distance from the viewport.
   *
   * @default `eager`
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading
   */
  loading?: 'eager' | 'lazy';
  /**
   * Invoked when load completes successfully.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload
   */
  onLoad?: () => void;
  /**
   * Invoked on load error.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror
   */
  onError?: () => void;
}
export interface LinkProps$1 extends GlobalProps, LinkBehaviorProps {
  /**
   * The content of the Link.
   */
  children?: ComponentChildren;
  /**
   * Sets the tone of the Link, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * A label that describes the purpose or contents of the Link. It will be read to users using assistive technologies such as screen readers.
   *
   * Use this when using only an icon or the content of the link is not enough context
   * for users using assistive technologies.
   */
  accessibilityLabel?: string;
  /**
   * Indicate the text language. Useful when the text is in a different language than the rest of the page.
   * It will allow assistive technologies such as screen readers to invoke the correct pronunciation.
   * [Reference of values](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) ("subtag" label)
   */
  lang?: string;
}
interface BaseTypographyProps {
  /**
   * Sets the color of the Typography component, based on the intention of the information being conveyed.
   *
   * @default 'base'
   */
  color?: ColorKeyword;
  /**
   * Sets the tone of the Typography component, based on the intention of the information being conveyed.
   *
   * @default 'auto'
   */
  tone?: ToneKeyword;
  /**
   * Set the numeric properties of the font
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric
   *
   * @default 'auto' - inherit from the parent element
   */
  fontVariantNumeric?: 'auto' | 'normal' | 'tabular-nums';
}
export interface ParagraphProps$1
  extends GlobalProps,
    BaseTypographyProps,
    AccessibilityVisibilityProps {
  /**
   * Truncates the text content to the specified number of lines.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp
   *
   * @default 'none' - no truncation is applied
   */
  lineClamp?: number | 'none';
}
export interface SectionProps$1 extends GlobalProps {
  /**
   * The content of the Section.
   */
  children?: ComponentChildren;
  /**
   * A label used to describe the section that will be announced by assistive technologies.
   *
   * When no `heading` property is provided or included as a children of the Section, you **must** provide an
   * `accessibilityLabel` to describe the Section. This is important as it allows assistive technologies to provide
   * the right context to users.
   */
  accessibilityLabel?: string;
  /**
   * A title that describes the content of the section.
   */
  heading?: string;
  /**
   * Adjust the padding of all edges.
   *
   * `auto`: applies padding that is appropriate for the element. Note that it may result in no padding if Shopify
   * believes this is the right design decision in a particular context.
   *
   * `none`: removes all padding from the element. This can be useful when elements inside the Section need to span
   * to the edge of the Section. For example, a full-width image. In this case, rely on `Box` with a padding of 'base'
   * to bring back the desired padding for the rest of the content.
   *
   * @default: "auto"
   */
  padding?: 'auto' | 'none';
}
export interface SelectProps
  extends GlobalProps,
    FieldProps,
    AutocompleteProps<AnyAutocompleteField>,
    FocusEventProps {
  /**
   * The options a user can select from.
   *
   * Accepts `Option` and `OptionGroup` components.
   */
  children?: ComponentChildren;
}
export interface OptionProps extends GlobalProps, BaseOptionProps {}
export interface OptionGroupProps extends GlobalProps {
  /**
   * Whether the options within this group can be selected or not.
   */
  disabled?: boolean;
  /**
   * The user-facing label for this group of options.
   */
  label?: string;
  /**
   * The options a user can select from.
   *
   * Accepts `Option` components.
   */
  children?: ComponentChildren;
}
export interface SpinnerProps$1 extends GlobalProps {
  /**
   * Adjusts the size of the spinner icon.
   *
   * @default 'base'
   */
  size?:
    | SizeKeyword
    /**
     * `fill` will cause the spinner icon to take up 100% of the available inline space, and maintain a 1:1 aspect ratio.
     */
    | 'fill';
  /**
   * A label that describes the purpose of the progress. When set,
   * it will be announced to users using assistive technologies and will
   * provide them with more context.
   *
   * Use it to provide context of what is loading.
   *
   * @default 'Loading...'
   */
  accessibilityLabel?: string;
}
export interface StackProps$1 extends BaseBoxProps$1WithRole, GapProps {
  /**
   * The content of the Stack.
   */
  children?: ComponentChildren;
  /**
   * Sets how the Stack's children are placed within the Stack.
   *
   * @default 'inline'
   */
  direction?: 'inline' | 'block';
  /**
   * Aligns the Stack along the main axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   * @default 'normal'
   */
  justifyContent: JustifyContentKeyword;
  /**
   * Aligns the Stack's children along the cross axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   * @default 'normal'
   */
  alignItems: AlignItemsKeyword;
  /**
   * Aligns the Stack along the cross axis.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   * @default 'normal'
   */
  alignContent: AlignContentKeyword;
}
export interface TextProps$1
  extends GlobalProps,
    AccessibilityVisibilityProps,
    BaseTypographyProps,
    DisplayProps {
  /**
   * The content of the Text.
   */
  children?: ComponentChildren;
  /**
   * Use to emphasize a word or a group of words.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
   * Provide semantic meaning and default styling to the text.
   *
   * Other presentation properties on `<Text>` override the default styling.
   *
   * @default 'generic'
   */
  type?: TextType;
}
type TextType =
  /**
   * Indicate the text is contact information. Typically used for addresses.
   *
   * This must have `inline` layout (despite the default being `block` in HTML hosts).
   *
   * Surfaces may apply styling to this type.
   *
   * In an HTML host, the text will be rendered in an `<address>` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address
   */
  | 'address'
  /**
   * Indicate the text is no longer accurate or no longer relevant. One such use-case is discounted prices.
   *
   * Surfaces should apply styling to this type to suggest its content no longer applies.
   *
   * In an HTML host, the text will be rendered in a `<s>` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s
   */
  | 'redundant'
  /**
   * Indicate the text is marked or highlighted and relevant to the user’s current action.
   * One such use-case is to indicate the characters that matched a search query.
   *
   * Surfaces should apply styling to this type to draw attention to the content.
   *
   * In an HTML host, the text will be rendered in a `<mark>` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
   */
  | 'mark'
  /**
   * Indicate emphatic stress. Typically for words that have a stressed emphasis compared to surrounding text.
   *
   * Surfaces should apply styling to this type to distinguish it from surrounding text. Italicization is a common choice, but not required.
   *
   * In an HTML host, the text will be rendered in an `<em>` element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
   */
  | 'emphasis'
  /**
   * Indicate an offset from the normal prose of the text. Typically used to indicate
   * a foreign word, fictional character thoughts, or when the text refers to the definition of a word
   * instead of representing its semantic meaning.
   *
   * Surfaces should italicize this content by default.
   *
   * In an HTML host, the text will be rendered in a `<i>` tag.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
   */
  | 'offset'
  /**
   * Indicate strong importance, seriousness, or urgency.
   *
   * Surfaces should render this content bold by default.
   *
   * In an HTML host, the text will be rendered in a `<strong>` tag.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
   */
  | 'strong'
  /**
   * No additional semantics or styling is applied.
   *
   * Surfaces must not apply any default styling to this type.
   *
   * In an HTML host, the text will be rendered in a `<span>` tag.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
   */
  | 'generic';
export interface TextFieldProps
  extends GlobalProps,
    BaseTextFieldProps,
    MinMaxLengthProps,
    AutocompleteProps<TextAutocompleteField>,
    FieldDecorationProps {}
type IconType$1 =
  | 'wifi'
  | 'work'
  | 'watch'
  | 'wand'
  | 'viewport-wide'
  | 'wallet'
  | 'viewport-short'
  | 'viewport-tall'
  | 'viewport-narrow'
  | 'upload'
  | 'unknown-device'
  | 'undo'
  | 'transfer'
  | 'wrench'
  | 'transfer-in'
  | 'transaction-fee-rupee'
  | 'transaction-fee-yen'
  | 'transaction-fee-pound'
  | 'transfer-internal'
  | 'transaction-fee-euro'
  | 'transaction'
  | 'thumbs-up'
  | 'transfer-out'
  | 'transaction-fee-dollar'
  | 'toggle-on'
  | 'thumbs-down'
  | 'theme-template'
  | 'theme-store'
  | 'text'
  | 'text-with-image'
  | 'theme-edit'
  | 'text-title'
  | 'text-underline'
  | 'text-quote'
  | 'tip-jar'
  | 'text-indent'
  | 'text-in-columns'
  | 'text-italic'
  | 'text-in-rows'
  | 'text-color'
  | 'text-grammar'
  | 'text-font-list'
  | 'theme'
  | 'text-align-left'
  | 'text-align-right'
  | 'text-font'
  | 'text-align-center'
  | 'text-block'
  | 'toggle-off'
  | 'target'
  | 'team'
  | 'tax'
  | 'text-bold'
  | 'store-online'
  | 'tablet'
  | 'sun'
  | 'store-import'
  | 'stop-circle'
  | 'store-managed'
  | 'status-active'
  | 'status'
  | 'sports'
  | 'store'
  | 'star-filled'
  | 'sound'
  | 'sort-descending'
  | 'sort-ascending'
  | 'social-post'
  | 'smiley-neutral'
  | 'social-ad'
  | 'slideshow'
  | 'smiley-happy'
  | 'smiley-sad'
  | 'smiley-joy'
  | 'shopcodes'
  | 'shipping-label'
  | 'shield-person'
  | 'shield-check-mark'
  | 'shield-none'
  | 'shield-pending'
  | 'share'
  | 'settings'
  | 'search-recent'
  | 'search-resource'
  | 'search'
  | 'search-list'
  | 'send'
  | 'save'
  | 'rotate-left'
  | 'rotate-right'
  | 'reward'
  | 'sandbox'
  | 'return'
  | 'replay'
  | 'remove-background'
  | 'refresh'
  | 'referral-code'
  | 'reset'
  | 'receipt-refund'
  | 'receipt'
  | 'receipt-rupee'
  | 'receipt-paid'
  | 'receipt-euro'
  | 'receipt-dollar'
  | 'receipt-pound'
  | 'question-circle'
  | 'profile'
  | 'receipt-yen'
  | 'product-remove'
  | 'product-reference'
  | 'product-list'
  | 'product-unavailable'
  | 'product-return'
  | 'product-add'
  | 'print'
  | 'price-list'
  | 'play'
  | 'point-of-sale'
  | 'plan'
  | 'play-circle'
  | 'pin'
  | 'phone-out'
  | 'phone-in'
  | 'personalized-text'
  | 'product-cost'
  | 'person-segment'
  | 'person-remove'
  | 'person-add'
  | 'redo'
  | 'person-lock'
  | 'payout-rupee'
  | 'payout-pound'
  | 'payout'
  | 'replace'
  | 'payout-yen'
  | 'pause-circle'
  | 'payout-euro'
  | 'passkey'
  | 'person-exit'
  | 'payment-capture'
  | 'paint-brush-round'
  | 'pagination-start'
  | 'paper-check'
  | 'paint-brush-flat'
  | 'pagination-end'
  | 'page-remove'
  | 'payout-dollar'
  | 'page-attachment'
  | 'page-reference'
  | 'page-clock'
  | 'page-up'
  | 'page-add'
  | 'package-returned'
  | 'package'
  | 'page-heart'
  | 'package-on-hold'
  | 'outdent'
  | 'package-fulfilled'
  | 'orders-status'
  | 'outgoing'
  | 'page-down'
  | 'order-repeat'
  | 'order-draft'
  | 'organization'
  | 'notification'
  | 'note'
  | 'note-add'
  | 'nature'
  | 'money'
  | 'order-first'
  | 'metaobject-reference'
  | 'money-none'
  | 'metaobject'
  | 'metaobject-list'
  | 'minimize'
  | 'menu'
  | 'megaphone'
  | 'menu-vertical'
  | 'media-receiver'
  | 'menu-horizontal'
  | 'moon'
  | 'measurement-volume'
  | 'measurement-weight'
  | 'measurement-size'
  | 'markets-yen'
  | 'maximize'
  | 'markets-rupee'
  | 'markets-euro'
  | 'location-none'
  | 'live'
  | 'markets'
  | 'list-numbered'
  | 'lock'
  | 'list-bulleted'
  | 'link'
  | 'layout-sidebar-left'
  | 'layout-sidebar-right'
  | 'layout-section'
  | 'layout-logo-block'
  | 'layout-rows-2'
  | 'layout-popup'
  | 'layout-header'
  | 'layout-columns-2'
  | 'layout-columns-3'
  | 'layout-buy-button'
  | 'layout-buy-button-horizontal'
  | 'layout-buy-button-vertical'
  | 'layout-column-1'
  | 'keyboard'
  | 'layout-footer'
  | 'layout-block'
  | 'label-printer'
  | 'keyboard-hide'
  | 'key'
  | 'inventory-updated'
  | 'iq'
  | 'language-translate'
  | 'incoming'
  | 'incentive'
  | 'inventory'
  | 'image-with-text-overlay'
  | 'image'
  | 'image-none'
  | 'image-magic'
  | 'mention'
  | 'image-explore'
  | 'import'
  | 'image-alt'
  | 'home'
  | 'icons'
  | 'identity-card'
  | 'image-add'
  | 'metafields'
  | 'images'
  | 'gauge'
  | 'globe-europe'
  | 'gift-card'
  | 'hashtag'
  | 'food'
  | 'forms'
  | 'forklift'
  | 'folder-remove'
  | 'globe-asia'
  | 'folder-add'
  | 'heart'
  | 'folder-up'
  | 'flip-vertical'
  | 'flower'
  | 'flip-horizontal'
  | 'flag'
  | 'folder-down'
  | 'favicon'
  | 'filter'
  | 'file'
  | 'eye-check-mark'
  | 'eye-dropper'
  | 'eye-first'
  | 'eyeglasses'
  | 'hashtag-decimal'
  | 'exit'
  | 'folder'
  | 'export'
  | 'games'
  | 'envelope-soft-pack'
  | 'email-newsletter'
  | 'email-follow-up'
  | 'exchange'
  | 'enter'
  | 'domain-new'
  | 'domain'
  | 'drag-handle'
  | 'domain-redirect'
  | 'duplicate'
  | 'domain-landing-page'
  | 'dns-settings'
  | 'dock-floating'
  | 'discount'
  | 'envelope'
  | 'dock-side'
  | 'drag-drop'
  | 'delete'
  | 'data-table'
  | 'database-add'
  | 'database-connect'
  | 'currency-convert'
  | 'data-presentation'
  | 'database'
  | 'cursor-option'
  | 'crop'
  | 'credit-card'
  | 'cursor'
  | 'credit-card-reader'
  | 'desktop'
  | 'credit-card-percent'
  | 'credit-card-reader-chip'
  | 'credit-card-secure'
  | 'credit-card-cancel'
  | 'corner-round'
  | 'corner-square'
  | 'credit-card-reader-tap'
  | 'corner-pill'
  | 'contract'
  | 'content'
  | 'compass'
  | 'connect'
  | 'compose'
  | 'discount-code'
  | 'confetti'
  | 'collection-featured'
  | 'color-none'
  | 'collection-reference'
  | 'color'
  | 'code-add'
  | 'code'
  | 'clipboard-checklist'
  | 'circle'
  | 'clipboard-check'
  | 'collection-list'
  | 'clipboard'
  | 'chevron-up-circle'
  | 'chevron-right'
  | 'chevron-right-circle'
  | 'chevron-down-circle'
  | 'checkbox'
  | 'chat-referral'
  | 'credit-card-tap-chip'
  | 'chat'
  | 'chart-popular'
  | 'chart-histogram-second-last'
  | 'chart-stacked'
  | 'chart-horizontal'
  | 'chart-line'
  | 'chart-histogram-last'
  | 'chart-histogram-full'
  | 'chart-histogram-flat'
  | 'chart-histogram-growth'
  | 'chart-histogram-first'
  | 'chart-vertical'
  | 'channels'
  | 'chart-donut'
  | 'chart-histogram-first-last'
  | 'chart-funnel'
  | 'catalog-product'
  | 'categories'
  | 'cash-yen'
  | 'chart-cohort'
  | 'cash-pound'
  | 'cash-rupee'
  | 'cash-dollar'
  | 'cart-down'
  | 'cart-sale'
  | 'cash-euro'
  | 'cart-abandoned'
  | 'caret-down'
  | 'caret-up'
  | 'cart-discount'
  | 'camera-flip'
  | 'camera'
  | 'cart'
  | 'calculator'
  | 'cart-up'
  | 'calendar-time'
  | 'chevron-left-circle'
  | 'button'
  | 'button-press'
  | 'chevron-left'
  | 'book'
  | 'blog'
  | 'book-open'
  | 'bank'
  | 'bug'
  | 'backspace'
  | 'barcode'
  | 'arrows-in-horizontal'
  | 'bill'
  | 'arrows-out-horizontal'
  | 'bullet'
  | 'arrow-up'
  | 'automation'
  | 'arrow-left-circle'
  | 'arrow-down'
  | 'arrow-right'
  | 'arrow-up-circle'
  | 'arrow-right-circle'
  | 'arrow-down-circle'
  | 'alert-location'
  | 'arrow-left'
  | 'alert-diamond'
  | 'app-extension'
  | 'cursor-banner'
  | 'airplane'
  | 'affiliate'
  | 'adjust'
  | 'x'
  | 'x-circle'
  | 'variant'
  | 'star'
  | 'sort'
  | 'select'
  | 'plus'
  | 'product'
  | 'phone'
  | 'plus-circle'
  | 'person'
  | 'page'
  | 'payment'
  | 'order-unfulfilled'
  | 'order'
  | 'order-fulfilled'
  | 'mobile'
  | 'merge'
  | 'microphone'
  | 'location'
  | 'lightbulb'
  | 'minus-circle'
  | 'language'
  | 'in-progress'
  | 'incomplete'
  | 'info'
  | 'hide'
  | 'external'
  | 'email'
  | 'enabled'
  | 'edit'
  | 'globe'
  | 'collection'
  | 'disabled'
  | 'chevron-up'
  | 'delivery'
  | 'chevron-down'
  | 'clock'
  | 'check'
  | 'view'
  | 'calendar'
  | 'blank'
  | 'check-circle'
  | 'arrow-up-right'
  | 'minus'
  | 'alert-circle'
  | 'alert-bubble'
  | 'attachment'
  | 'archive'
  | 'calendar-check'
  | 'apps'
  | 'alert-triangle';

interface IconProps {
  type: '' | IconType;
  tone: Extract<
    IconProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
  size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

interface BadgeProps {
  accessibilityLabel: NonNullable<BadgeProps$1['accessibilityLabel']>;
  color: Extract<BadgeProps$1['color'], 'base' | 'strong'>;
  icon: IconProps['type'] | '';
  size: Extract<BadgeProps$1['size'], 'base' | 'large' | 'large-100'>;
  tone: Extract<
    BadgeProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
}

declare const tagName$g = 'shopify-badge';
interface ReactProps$g extends Partial<BadgeProps>, Pick<BadgeProps$1, 'id'> {}

type Style = string | CSSStyleSheet;
type Styles = Style[] | Style;
type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChild;
  styles?: Styles;
};
interface ActivationEventEsque {
  shiftKey: boolean;
  metaKey: boolean;
  ctrlKey: boolean;
  button: number;
}
interface ClickOptions {
  /**
   * The event you want to influence the synthetic click.
   */
  sourceEvent?: ActivationEventEsque;
}
/**
 * Base class for creating custom elements with Preact.
 * While this class could be used in both Node and the browser, the constructor will only be used in the browser.
 * So we give it a type of HTMLElement to avoid typing issues later where it's used, which will only happen in the browser.
 */
declare const BaseClass: any;
declare abstract class PreactCustomElement extends BaseClass {
  /** @private */
  static get observedAttributes(): string[];
  constructor({
    styles,
    ShadowRoot: renderFunction,
    delegatesFocus,
    ...options
  }: RenderImpl);

  /** @private */
  attributeChangedCallback(name: string): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  /**
   * Queue a run of the render function.
   * You shouldn't need to call this manually - it should be handled by changes to @property values.
   * @private
   */
  queueRender(): void;
  /**
   * Internal function to add styles for legacy browsers.
   *
   * @private
   */
  _addLegacyStyleComponent(style: string): void;
  /**
   * Like the standard `element.click()`, but you can influence the behavior with a `sourceEvent`.
   *
   * For example, if the `sourceEvent` was a middle click, or has particular keys held down,
   * components will attempt to produce the desired behavior on links, such as opening the page in the background tab.
   * @private
   * @param options
   */
  click({sourceEvent}?: ClickOptions): void;
}

declare class Badge extends PreactCustomElement implements BadgeProps {
  accessor accessibilityLabel: BadgeProps['accessibilityLabel'];
  accessor color: BadgeProps['color'];
  accessor icon: BadgeProps['icon'];
  accessor size: BadgeProps['size'];
  accessor tone: BadgeProps['tone'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$g]: Badge;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$g]: HTMLAttributes<HTMLElement> & ReactProps$g;
    }
  }
}

type MakeResponsive<T> = T | `@media${string}`;

type AlignedBox = Required<BoxProps$1>;
interface BoxProps {
  accessibilityRole: AlignedBox['accessibilityRole'];
  background: Extract<
    AlignedBox['background'],
    'transparent' | 'base' | 'subdued' | 'strong'
  >;
  blockSize: AlignedBox['blockSize'];
  minBlockSize: AlignedBox['minBlockSize'];
  maxBlockSize: AlignedBox['maxBlockSize'];
  inlineSize: AlignedBox['inlineSize'];
  minInlineSize: AlignedBox['minInlineSize'];
  maxInlineSize: AlignedBox['maxInlineSize'];
  padding: MakeResponsive<AlignedBox['padding']>;
  paddingBlock: MakeResponsive<AlignedBox['paddingBlock']>;
  paddingBlockStart: MakeResponsive<AlignedBox['paddingBlockStart']>;
  paddingBlockEnd: MakeResponsive<AlignedBox['paddingBlockEnd']>;
  paddingInline: MakeResponsive<AlignedBox['paddingInline']>;
  paddingInlineStart: MakeResponsive<AlignedBox['paddingInlineStart']>;
  paddingInlineEnd: MakeResponsive<AlignedBox['paddingInlineEnd']>;
  borderWidth: MaybeAllValuesShorthandProperty<
    Extract<
      AlignedBox['borderWidth'],
      'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200'
    >
  >;
  borderStyle: MaybeAllValuesShorthandProperty<
    Extract<AlignedBox['borderStyle'], 'none' | 'solid' | 'dashed'>
  >;
  borderRadius: MaybeAllValuesShorthandProperty<
    Extract<
      AlignedBox['borderRadius'],
      | 'none'
      | 'small-200'
      | 'small-100'
      | 'small'
      | 'base'
      | 'large'
      | 'large-100'
      | 'large-200'
    >
  >;
  borderColor: Extract<
    AlignedBox['borderColor'],
    'subdued' | 'base' | 'strong'
  >;
  accessibilityLabel: AlignedBox['accessibilityLabel'];
  accessibilityVisibility: AlignedBox['accessibilityVisibility'];
  display: AlignedBox['display'];
}

declare const tagName$f = 'shopify-box';
interface ReactProps$f extends Partial<BoxProps>, Pick<BoxProps$1, 'id'> {}

declare class BoxElement extends PreactCustomElement implements BoxProps {
  constructor(renderImpl: RenderImpl);
  accessor accessibilityRole: BoxProps['accessibilityRole'];
  accessor background: BoxProps['background'];
  accessor blockSize: BoxProps['blockSize'];
  accessor minBlockSize: BoxProps['minBlockSize'];
  accessor maxBlockSize: BoxProps['maxBlockSize'];
  accessor inlineSize: BoxProps['inlineSize'];
  accessor minInlineSize: BoxProps['minInlineSize'];
  accessor maxInlineSize: BoxProps['maxInlineSize'];
  accessor padding: BoxProps['padding'];
  accessor paddingBlock: BoxProps['paddingBlock'];
  accessor paddingBlockStart: BoxProps['paddingBlockStart'];
  accessor paddingBlockEnd: BoxProps['paddingBlockEnd'];
  accessor paddingInline: BoxProps['paddingInline'];
  accessor paddingInlineStart: BoxProps['paddingInlineStart'];
  accessor paddingInlineEnd: BoxProps['paddingInlineEnd'];
  accessor borderWidth: BoxProps['borderWidth'];
  accessor borderStyle: BoxProps['borderStyle'];
  accessor borderRadius: BoxProps['borderRadius'];
  accessor borderColor: BoxProps['borderColor'];
  accessor accessibilityLabel: BoxProps['accessibilityLabel'];
  accessor accessibilityVisibility: BoxProps['accessibilityVisibility'];
  accessor display: BoxProps['display'];
}

declare class Box extends BoxElement implements BoxProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$f]: Box;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$f]: HTMLAttributes<HTMLElement> & ReactProps$f;
    }
  }
}

type ButtonOnlyProps = Extract<
  ButtonProps$1,
  {
    type?: unknown;
  }
>;
type ButtonBaseProps = Required<
  Pick<
    ButtonOnlyProps,
    | 'accessibilityLabel'
    | 'disabled'
    | 'activateAction'
    | 'activateTarget'
    | 'lang'
    | 'loading'
    | 'type'
    | 'variant'
    | 'target'
    | 'href'
    | 'download'
  >
>;
interface ButtonProps extends ButtonBaseProps {
  tone: Extract<ButtonProps$1['tone'], 'neutral' | 'critical' | 'auto'>;
  icon: IconProps['type'];
}

declare const tagName$e = 'shopify-button';
interface ReactProps$e
  extends Partial<ButtonProps>,
    Pick<ButtonProps$1, 'onClick' | 'onFocus' | 'onBlur' | 'id'> {}

interface SharedProps$3
  extends Required<Pick<InteractionProps, 'activateTarget'>> {
  activateAction: Extract<
    InteractionProps['activateAction'],
    'show' | 'hide' | 'toggle' | 'auto'
  >;
}
declare class PreactOverlayControl
  extends PreactCustomElement
  implements SharedProps$3
{
  accessor activateTarget: SharedProps$3['activateTarget'];
  accessor activateAction: SharedProps$3['activateAction'];
  constructor(renderImpl: RenderImpl);
}

declare class Button extends PreactOverlayControl implements ButtonProps {
  accessor disabled: ButtonProps['disabled'];
  accessor icon: ButtonProps['icon'];
  accessor loading: ButtonProps['loading'];
  accessor variant: ButtonProps['variant'];
  accessor tone: ButtonProps['tone'];
  accessor lang: ButtonProps['lang'];
  accessor target: ButtonProps['target'];
  accessor href: ButtonProps['href'];
  accessor download: ButtonProps['download'];
  accessor onclick: EventListener | null;
  accessor onblur: EventListener | null;
  accessor onfocus: EventListener | null;
  accessor type: ButtonProps['type'];
  accessor accessibilityLabel: ButtonProps['accessibilityLabel'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$e]: Button;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$e]: HTMLAttributes<HTMLElement> & ReactProps$e;
    }
  }
}

interface CheckboxProps
  extends Required<
    Pick<
      CheckboxProps$1,
      | 'accessibilityLabel'
      | 'checked'
      | 'details'
      | 'disabled'
      | 'error'
      | 'id'
      | 'indeterminate'
      | 'label'
      | 'name'
      | 'required'
      | 'value'
    >
  > {}

declare const tagName$d = 'shopify-checkbox';
interface ReactProps$d
  extends Partial<CheckboxProps>,
    Pick<CheckboxProps$1, 'id' | 'onChange'> {}

type InputBaseProps = Required<
  Pick<
    TextFieldProps,
    | 'disabled'
    | 'error'
    | 'label'
    | 'name'
    | 'placeholder'
    | 'readOnly'
    | 'required'
    | 'value'
    | 'id'
  >
> & {
  defaultValue: string;
};
type InputReactProps = Pick<
  TextFieldProps,
  'onChange' | 'onFocus' | 'onInput' | 'onBlur'
>;

declare const internals: unique symbol;
declare class PreactInputElement
  extends PreactCustomElement
  implements
    Pick<
      InputBaseProps,
      | 'defaultValue'
      | 'disabled'
      | 'error'
      | 'label'
      | 'name'
      | 'required'
      | 'value'
    >
{
  static formAssociated: boolean;
  /** @private */
  [internals]: ElementInternals;
  accessor onchange: EventListener | null;
  accessor oninput: EventListener | null;
  accessor onfocus: EventListener | null;
  accessor onblur: EventListener | null;
  accessor name: InputBaseProps['name'];
  accessor label: InputBaseProps['label'];
  accessor error: InputBaseProps['error'];
  accessor defaultValue: InputBaseProps['defaultValue'];
  get value(): InputBaseProps['value'];
  set value(value: InputBaseProps['value']);
  accessor disabled: InputBaseProps['disabled'];
  accessor required: InputBaseProps['required'];
  constructor(renderImpl: RenderImpl);
}

declare class Checkbox extends PreactInputElement implements CheckboxProps {
  accessor indeterminate: CheckboxProps['indeterminate'];
  get checked(): boolean;
  set checked(checked: CheckboxProps['checked']);
  accessor details: CheckboxProps['details'];
  accessor accessibilityLabel: CheckboxProps['accessibilityLabel'];
  get value(): string;
  set value(value: string);
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$d]: Checkbox;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$d]: HTMLAttributes<HTMLElement> & ReactProps$d;
    }
  }
}

interface DividerProps {
  direction: Extract<DividerProps$1['direction'], 'inline' | 'block'>;
  color: Extract<DividerProps$1['color'], 'subdued' | 'base' | 'strong'>;
}

declare const tagName$c = 'shopify-divider';
interface ReactProps$c
  extends Partial<DividerProps>,
    Pick<DividerProps$1, 'id'> {}

declare class Divider extends PreactCustomElement implements DividerProps {
  accessor direction: DividerProps['direction'];
  accessor color: DividerProps['color'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$c]: Divider;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$c]: HTMLAttributes<HTMLElement> & ReactProps$c;
    }
  }
}

type RequiredHeadingProps = Required<HeadingProps$1>;
interface HeadingProps {
  accessibilityRole: RequiredHeadingProps['accessibilityRole'];
  accessibilityVisibility: RequiredHeadingProps['accessibilityVisibility'];
  lineClamp: RequiredHeadingProps['lineClamp'];
}

declare const tagName$b = 'shopify-heading';
interface ReactProps$b
  extends Partial<HeadingProps>,
    Pick<HeadingProps$1, 'id'> {}

declare class Heading extends PreactCustomElement implements HeadingProps {
  accessor accessibilityRole: HeadingProps['accessibilityRole'];
  accessor lineClamp: HeadingProps['lineClamp'];
  accessor accessibilityVisibility: HeadingProps['accessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$b]: Heading;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$b]: HTMLAttributes<HTMLElement> & ReactProps$b;
    }
  }
}

declare const tagName$a = 'shopify-icon';
interface ReactProps$a extends Partial<IconProps>, Pick<IconProps$1, 'id'> {}

declare class Icon extends PreactCustomElement implements IconProps {
  accessor color: IconProps['color'];
  accessor tone: IconProps['tone'];
  accessor type: IconProps['type'];
  accessor size: IconProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$a]: Icon;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$a]: Omit<HTMLAttributes<HTMLElement>, 'size'> & ReactProps$a;
    }
  }
}

interface ImageProps {
  accessibilityRole: Extract<
    ImageProps$1['accessibilityRole'],
    'img' | 'presentation' | 'none'
  >;
  alt: NonNullable<ImageProps$1['alt']>;
  loading: Extract<ImageProps$1['loading'], 'eager' | 'lazy'>;
  src: NonNullable<ImageProps$1['src']>;
}

declare const tagName$9 = 'shopify-image';
interface ReactProps$9
  extends Partial<ImageProps>,
    Pick<ImageProps$1, 'onError' | 'onLoad' | 'id'> {}

declare class Image extends PreactCustomElement implements ImageProps {
  accessor src: ImageProps['src'];
  accessor alt: ImageProps['alt'];
  accessor loading: ImageProps['loading'];
  accessor accessibilityRole: ImageProps['accessibilityRole'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$9]: Image;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$9]: HTMLAttributes<HTMLElement> & ReactProps$9;
    }
  }
}

type RequiredLinkProps = Required<LinkProps$1>;
interface LinkProps {
  tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
  accessibilityLabel: RequiredLinkProps['accessibilityLabel'];
  href: RequiredLinkProps['href'];
  target: RequiredLinkProps['target'];
}

declare const tagName$8 = 'shopify-link';
interface ReactProps$8
  extends Partial<LinkProps>,
    Pick<LinkProps$1, 'onClick' | 'id' | 'lang'> {}

declare class Link extends PreactCustomElement implements LinkProps {
  accessor tone: LinkProps['tone'];
  accessor accessibilityLabel: LinkProps['accessibilityLabel'];
  accessor href: LinkProps['href'];
  accessor target: LinkProps['target'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$8]: Link;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$8]: HTMLAttributes<HTMLElement> & ReactProps$8;
    }
  }
}

declare const tagName$7 = 'shopify-option';
interface ReactProps$7 extends Partial<SharedProps$2> {}

interface SharedProps$2
  extends Required<Pick<OptionProps, 'disabled' | 'value'>> {}
declare class Option extends PreactCustomElement implements SharedProps$2 {
  accessor value: SharedProps$2['value'];
  accessor disabled: SharedProps$2['disabled'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$7]: Option;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$7]: HTMLAttributes<HTMLElement> & ReactProps$7;
    }
  }
}

declare const tagName$6 = 'shopify-option-group';
interface ReactProps$6 extends Partial<SharedProps$1> {}

interface SharedProps$1
  extends Required<Pick<OptionGroupProps, 'disabled' | 'label'>> {}
declare class OptionGroup extends PreactCustomElement implements SharedProps$1 {
  accessor disabled: SharedProps$1['disabled'];
  accessor label: SharedProps$1['label'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$6]: OptionGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$6]: HTMLAttributes<HTMLElement> & ReactProps$6;
    }
  }
}

interface ParagraphProps
  extends Required<
    Pick<
      ParagraphProps$1,
      'lineClamp' | 'accessibilityVisibility' | 'fontVariantNumeric' | 'tone'
    >
  > {
  color: Extract<ParagraphProps$1['color'], 'base' | 'subdued'>;
}

declare const tagName$5 = 'shopify-paragraph';
interface ReactProps$5
  extends Partial<ParagraphProps>,
    Pick<ParagraphProps$1, 'id'> {}

declare class Paragraph extends PreactCustomElement implements ParagraphProps {
  accessor fontVariantNumeric: ParagraphProps['fontVariantNumeric'];
  accessor lineClamp: ParagraphProps['lineClamp'];
  accessor tone: ParagraphProps['tone'];
  accessor color: ParagraphProps['color'];
  accessor accessibilityVisibility: ParagraphProps['accessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$5]: Paragraph;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$5]: HTMLAttributes<HTMLElement> & ReactProps$5;
    }
  }
}

type RequiredSectionProps = Required<SectionProps$1>;
interface SectionProps {
  accessibilityLabel: RequiredSectionProps['accessibilityLabel'];
  heading: RequiredSectionProps['heading'];
  padding: RequiredSectionProps['padding'];
}

declare const tagName$4 = 'shopify-section';
interface ReactProps$4
  extends Partial<SectionProps>,
    Pick<SectionProps$1, 'id'> {}

declare class Section extends PreactCustomElement implements SectionProps {
  constructor();
  /** @private */
  connectedCallback(): void;
  accessor accessibilityLabel: SectionProps['accessibilityLabel'];
  accessor heading: SectionProps['heading'];
  accessor padding: SectionProps['padding'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$4]: Section;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$4]: HTMLAttributes<HTMLElement> & ReactProps$4;
    }
  }
}

declare const tagName$3 = 'shopify-select';
interface ReactProps$3 extends Partial<SharedProps & InputReactProps> {}

declare class PreactInputFieldElement
  extends PreactInputElement
  implements InputBaseProps
{
  accessor placeholder: InputBaseProps['placeholder'];
  accessor readOnly: InputBaseProps['readOnly'];
  constructor(renderImpl: RenderImpl);
}

interface SharedProps
  extends Pick<
    SelectProps,
    | 'disabled'
    | 'error'
    | 'label'
    | 'name'
    | 'placeholder'
    | 'required'
    | 'value'
  > {}
declare class Select extends PreactInputFieldElement implements SharedProps {
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$3]: Select;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$3]: HTMLAttributes<HTMLElement> & ReactProps$3;
    }
  }
}

interface SpinnerProps
  extends Required<Pick<SpinnerProps$1, 'accessibilityLabel'>> {
  /**
   * The size of the component.
   *
   * @default 'base'
   */
  size: Extract<SpinnerProps$1['size'], 'large' | 'large-100' | 'base'>;
}

declare const tagName$2 = 'shopify-spinner';
interface ReactProps$2
  extends Partial<SpinnerProps>,
    Pick<SpinnerProps$1, 'id'> {}

declare class Spinner extends PreactCustomElement implements SpinnerProps {
  accessor accessibilityLabel: string;
  accessor size: SpinnerProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$2]: Spinner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$2]: HTMLAttributes<HTMLElement> & ReactProps$2;
    }
  }
}

type AlignedStackProps = Required<StackProps$1>;
interface StackProps extends BoxProps {
  justifyContent: AlignedStackProps['justifyContent'];
  alignItems: AlignedStackProps['alignItems'];
  alignContent: AlignedStackProps['alignContent'];
  gap: MakeResponsive<AlignedStackProps['gap']>;
  rowGap: MakeResponsive<AlignedStackProps['rowGap']>;
  columnGap: MakeResponsive<AlignedStackProps['columnGap']>;
  direction: MakeResponsive<AlignedStackProps['direction']>;
}

declare const tagName$1 = 'shopify-stack';
interface ReactProps$1 extends Partial<StackProps>, Pick<StackProps$1, 'id'> {}

declare class Stack extends BoxElement implements StackProps {
  constructor();
  accessor direction: StackProps['direction'];
  accessor justifyContent: StackProps['justifyContent'];
  accessor alignItems: StackProps['alignItems'];
  accessor alignContent: StackProps['alignContent'];
  accessor gap: StackProps['gap'];
  accessor rowGap: StackProps['rowGap'];
  accessor columnGap: StackProps['columnGap'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName$1]: Stack;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName$1]: HTMLAttributes<HTMLElement> & ReactProps$1;
    }
  }
}

interface TextProps
  extends Required<Pick<TextProps$1, 'display' | 'accessibilityVisibility'>> {
  color: Extract<TextProps$1['color'], 'base' | 'subdued'>;
  type: Extract<
    TextProps$1['type'],
    'address' | 'redundant' | 'strong' | 'generic' | 'emphasis'
  >;
  tone: Extract<
    TextProps$1['tone'],
    'auto' | 'info' | 'success' | 'warning' | 'critical' | 'neutral' | 'caution'
  >;
  fontVariantNumeric: Extract<
    TextProps$1['fontVariantNumeric'],
    'auto' | 'normal' | 'tabular-nums'
  >;
}

declare const tagName = 'shopify-text';
interface ReactProps extends Partial<TextProps>, Pick<TextProps$1, 'id'> {}

declare class Text extends PreactCustomElement implements TextProps {
  accessor display: TextProps['display'];
  accessor fontVariantNumeric: TextProps['fontVariantNumeric'];
  accessor color: TextProps['color'];
  accessor tone: TextProps['tone'];
  accessor type: TextProps['type'];
  accessor accessibilityVisibility: TextProps['accessibilityVisibility'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Text;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: HTMLAttributes<HTMLElement> & ReactProps;
    }
  }
}

export {
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  Heading,
  Icon,
  Image,
  Link,
  Option,
  OptionGroup,
  Paragraph,
  Section,
  Select,
  Spinner,
  Stack,
  Text,
};
