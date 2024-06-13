import React from 'react';
import {
  reactExtension,
  ActionItem,
  useApi,
} from '@shopify/ui-extensions-react/point-of-sale';

const ActionItemComponent = () => {
  const api = useApi<'pos.order-details.action.menu-item.render'>();
  return <ActionItem enabled onPress={() => api.action.presentModal()} />;
};

export default reactExtension(
  'pos.order-details.action.menu-item.render',
  () => <ActionItemComponent />,
);
