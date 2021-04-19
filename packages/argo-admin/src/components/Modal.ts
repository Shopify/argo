import {createRemoteComponent} from '@remote-ui/core';

import {DestructableAction} from '../types';

export interface ModalProps {
  open: boolean;
  title: string;
  primaryAction?: DestructableAction;
  secondaryActions?: DestructableAction[];
  onClose: () => void;
}

export const Modal = createRemoteComponent<'Modal', ModalProps>('Modal');
