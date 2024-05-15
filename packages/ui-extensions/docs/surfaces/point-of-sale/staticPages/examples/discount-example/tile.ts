import {extension, Tile} from '@shopify/ui-extensions/point-of-sale';

export default extension('pos.home.tile.render', (root, api) => {
  const shouldEnable = (subtotal: string): boolean => {
    return Number(subtotal) > 100;
  };
  // You can use the initial cart value to set up state
  const tile = root.createComponent(Tile, {
    title: 'Discount Example App',
    subtitle: 'Javascript',
    enabled: shouldEnable(api.cart.subscribable.initial.subtotal),
    onPress: api.action.presentModal,
  });

  // You can subscribe to changes in the cart to mutate state
  api.cart.subscribable.subscribe((cart) => {
    tile.updateProps({enabled: shouldEnable(cart.subtotal)});
  });

  root.append(tile);
});
