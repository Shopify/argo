import {ActionItem, extension} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.draft-order-details.action.menu-item.render',
  (root, api) => {
    const actionItem = root.createComponent(ActionItem, {
      onPress: () => api.action.presentModal(),
      enabled: true,
    });

    root.append(actionItem);
  },
);
