import {createRemoteComponent} from '@remote-ui/core';

export type Spacing = 'xtight' | 'tight' | 'loose' | 'xloose';
export type Alignment = 'leading' | 'center' | 'trailing' | 'baseline';

export interface InlineStackProps {
  /** Position children along the cross axis */
  alignment?: Alignment;
  /** Adjust spacing between children */
  spacing?: Spacing;
}

/**
 * InlineStack is used to lay out a horizontal row of elements
 */
export const InlineStack = createRemoteComponent<
  'InlineStack',
  InlineStackProps
>('InlineStack');
