import {Stepper as BaseStepper} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type StepperProps = ReactPropsFromRemoteComponentType<
  typeof BaseStepper
>;

export const Stepper = createRemoteReactComponent(BaseStepper);