import {extension, Divider} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const divider = root.createComponent(Divider);

  root.appendChild(divider);
});