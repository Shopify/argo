import {createRemoteComponent} from '@remote-ui/core';

import {Responsive} from '../shared';

interface Size {
  /**
   * Inline size of the skeleton in pixels.
   *
   */
  inline: number;
  /**
   * Block size of the skeleton in pixels.
   *
   */
  block: number;
}

export type SkeletonImageProps =
  | {
      /**
       * Adjust the size of the skeleton.
       *
       */
      size: Size | Responsive<Size>;
      /**
       * Displays the skeleton at the specified aspect ratio (fills the width of the
       * parent container and sets the height accordingly).
       */
      aspectRatio?: never;
    }
  | {
      /**
       * Adjust the size of the skeleton.
       *
       */
      size?: never;
      /**
       * Displays the skeleton at the specified aspect ratio (fills the width of the
       * parent container and sets the height accordingly).
       */
      aspectRatio: number;
    };

/**
 * SkeletonImage is used to provide a low fidelity representation of an image before it appears on the page.
 */
export const SkeletonImage = createRemoteComponent<
  'SkeletonImage',
  SkeletonImageProps
>('SkeletonImage');
