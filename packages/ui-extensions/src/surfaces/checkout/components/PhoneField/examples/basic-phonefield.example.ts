import {extension, PhoneField} from '@shopify/ui-extensions/checkout';

extension('Checkout::Dynamic::Render', (root) => {
  const phoneField = root.createComponent(PhoneField, {
    label: 'Phone',
    value: '1 (555) 555-5555',
  });

  root.appendChild(phoneField);
});