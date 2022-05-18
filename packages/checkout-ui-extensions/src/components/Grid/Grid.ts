import {createRemoteComponent} from '@remote-ui/core';

import {AccessibilityRole, Unit} from '../shared';

type Spacing =
  | 'none'
  | 'extraTight'
  | 'tight'
  | 'base'
  | 'loose'
  | 'extraLoose';
type InlineAlignment = 'center' | 'leading' | 'trailing';
type BlockAlignment = 'center' | 'leading' | 'trailing' | 'baseline';

export type Size = 'auto' | 'fill' | number | Unit<'fr' | '%'>;
type Columns = Size[] | Size;
type Rows = Size[] | Size;
export interface GridProps {
  /**
   * Sizes for each column of the layout.
   *
   *
   * `auto`: intrinsic size of the content.
   *
   * `fill`: fills the remaining available space. When multiple columns are set to `fill`, the remaining space is shared equally.
   *
   * `Unit<'%' | 'fr'>`: size in percentages `%` or fractions `fr`.
   *
   * `number`: size in pixels.
   *
   *
   * - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.
   *
   * - When only one size is set and outside of an array, the grid will have one column of that size.
   *
   * @defaultValue 'fill'
   */
  columns?: Columns;
  /**
   * Sizes for each row of the layout.
   *
   *
   * `auto`: intrinsic size of the content.
   *
   * `fill`: fills the remaining available space. When multiple rows are set to `fill`, the remaining space is shared equally.
   *
   * `Unit<'%' | 'fr'>`: size in percentages `%` or fractions `fr`.
   *
   * `number`: size in pixels.
   *
   *
   * - When the sum of the defined sizes is larger than the available space, elements will shrink to avoid overflow.
   *
   * - When only one size is set and outside of an array, the grid will have one row of that size.
   *
   * @defaultValue 'fill'
   */
  rows?: Rows;
  /**
   * Adjust spacing between children
   *
   * @defaultValue 'none'
   **/
  spacing?: Spacing;
  /**
   * Position children along the cross axis
   */
  blockAlignment?: BlockAlignment;
  /**
   * Position children along the main axis
   */
  inlineAlignment?: InlineAlignment;
  /**
   * Set the semantic of the component’s content
   */
  accessibilityRole?:
    | AccessibilityRole
    | [AccessibilityRole, AccessibilityRole];
  /**
   * A label that describes the purpose or contents of the element. When provided,
   * it will be announced to buyers using assistive technologies and will
   * provide them with more context.
   */
  accessibilityLabel?: string;
}

/**
 * Grid is used to lay out content in a matrix of rows and columns.
 */
export const Grid = createRemoteComponent<'Grid', GridProps>('Grid');
