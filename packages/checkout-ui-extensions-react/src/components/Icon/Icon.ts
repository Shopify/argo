import {Icon as BaseIcon} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type IconProps = ReactPropsFromRemoteComponentType<typeof BaseIcon>;

export const Icon = createRemoteReactComponent(BaseIcon);