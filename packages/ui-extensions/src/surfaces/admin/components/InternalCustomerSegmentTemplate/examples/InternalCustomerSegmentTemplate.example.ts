import {
  extension,
  InternalCustomerSegmentTemplate,
} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.customers.segmentation-templates.render',
  (root, {i18n, __enabledFeatures}) => {
    const productsPurchasedOnTagsEnabled = __enabledFeatures.includes('productsPurchasedByTags');
    const productTemplate = root.createComponent(InternalCustomerSegmentTemplate, {
      title: i18n.translate('product.title'),
      description: i18n.translate('product.description'),
      icon: 'productsMajor',
      query: productsPurchasedOnTagsEnabled
        ? 'products_purchased(tag: (product_tag)) = true'
        : 'products_purchased(id: (product_id)) = true',
      queryToInsert: productsPurchasedOnTagsEnabled
        ? 'products_purchased(tag:'
        : 'products_purchased(id:',
      dateAdded: new Date('2023-01-15').toISOString(),
      category: 'reEngageCustomers',
    });

    const locationTemplate = root.createComponent(InternalCustomerSegmentTemplate, {
      title: i18n.translate('location.title'),
      description: [i18n.translate('location.firstParagraph'), i18n.translate('location.secondParagraph')],
      icon: 'locationMajor',
      query: "customer_cities CONTAINS 'US-NY-NewYorkCity'",
      category: 'location',
    });

    root.appendChild(productTemplate);
    root.appendChild(locationTemplate);

    root.mount();
  },
);