import {extension, Checkbox} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const checkbox = root.createComponent(
    Checkbox,
    {id: 'checkbox', name: 'checkbox'},
    'Save this information for next time',
  );

  root.appendChild(checkbox);
});