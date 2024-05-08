import type {LandingTemplateSchema} from '@shopify/generate-docs';

const data: LandingTemplateSchema = {
  title: 'Targets Overview',
  description: `
A [target](/docs/apps/app-extensions/configuration#targets) represents where your admin UI extension will appear.

You register targets in your \`shopify.extension.toml\` and inside the Javascript file denoted by your toml's \`module\` property.
  `,
  // The id for the page that is used for routing. If this documentation is for a primary landing page, confirm id matches the reference name.
  id: 'extension-targets',
  // Basic content for the page and Hero section.
  sections: [
    {
      type: 'GenericAccordion',
      title: 'Admin action locations',
      anchorLink: 'action-locations',
      sectionContent:
        'Admin action extensions appear on resource pages throughout the admin. Learn more about [admin actions](/docs/apps/admin/admin-actions-and-blocks#admin-actions).',
      accordionContent: [
        {
          title: 'Abandoned checkout details',
          description:
            'This page shows information about a single abandoned checkout. The `admin.abandoned-checkout-details.action.render` target is available on this page.',
          image: 'admin.abandoned-checkout-details.action.render.png',
        },
        {
          title: 'Collection details',
          description:
            'This page shows information about a single collection. The `admin.collection-details.action.render` target is available on this page.',
          image: 'admin.collection-details.action.render.png',
        },
        {
          title: 'Collection index',
          description:
            'This page shows a table of multiple collections. The `admin.collection-index.action.render` target is available on this page.',
          image: 'admin.collection-index.action.render.png',
        },
        {
          title: 'Customer details',
          description:
            'This page shows information about a single customer. The `admin.customer-details.action.render` target is available on this page.',
          image: 'admin.customer-details.action.render.png',
        },
        {
          title: 'Customer index',
          description:
            'This page shows a table of multiple customers. The `admin.customer-index.action.render` target is available on this page.',
          image: 'admin.customer-index.action.render.png',
        },
        {
          title: 'Customer index selection',
          description:
            'This page shows a table of multiple customers. The `admin.customer-index.selection-action.render` target is available on this page when multiple customers are selected.',
          image: 'admin.customer-index.selection-action.render',
        },
        {
          title: 'Customer segment details',
          description:
            'This page shows information about a single customer segment. The `admin.customer-segment-details.action.render` target is available on this page.',
          image: 'admin.customer-segment-details.action.render.png',
        },
        {
          title: 'Discount details',
          description:
            'This page shows information about a single discount. The `admin.discount-details.action.render` target is available on this page.',
          image: 'admin.discount-details.action.render.png',
        },
        {
          title: 'Discount index',
          description:
            'This page shows a table of multiple discounts. The `admin.discount-index.action.render` target is available on this page.',
          image: 'admin.discount-index.action.render.png',
        },
        {
          title: 'Draft order details',
          description:
            'This page shows information about a single draft order. The `admin.draft-order-details.action.render` target is available on this page.',
          image: 'admin.draft-order-details.action.render.png',
        },
        {
          title: 'Draft order index',
          description:
            'This page shows a table of multiple draft orders. The `admin.draft-order-index.action.render` target is available on this page.',
          image: 'admin.draft-order-index.action.render.png',
        },
        {
          title: 'Draft order index selection',
          description:
            'This page shows a table of multiple draft orders. The `admin.draft-order-index.selection-action.render` target is available on this page when multiple draft orders are selected.',
          image: 'admin.draft-order-index.selection-action.render.png',
        },
        {
          title: 'Order details',
          description:
            'This page shows information about a single order. The `admin.order-details.action.render` target is available on this page.',
          image: 'admin.order-details.action.render.png',
        },
        {
          title: 'Order details fulfilled card',
          description:
            'This page shows information about a single order, including a card showing the fulfillment details. The `admin.order-fulfilled-card.action.render` target is available on this page, but only if your app is selected as the fulfillment app for that order.',
        },
        {
          title: 'Order index',
          description:
            'This page shows a table of multiple orders. The `admin.order-index.action.render` target is available on this page.',
          image: 'admin.order-index.action.render.png',
        },
        {
          title: 'Order index selection',
          description:
            'This page shows a table of multiple orders. The `admin.order-index.selection-action.render` target is available on this page when multiple orders are selected.',
          image: 'admin.order-index.selection-action.render.png',
        },
        {
          title: 'Product details',
          description:
            'This page shows information about a single product. The `admin.product-details.action.render` target is available on this page.',
          image: 'admin.product-details.action.render.png',
        },
        {
          title: 'Product index',
          description:
            'This page shows a table of multiple products. The `admin.product-index.action.render` target is available on this page.',
          image: 'admin.product-index.action.render.png',
        },
        {
          title: 'Product index selection',
          description:
            'This page shows a table of multiple products. The `admin.product-index.selection-action.render` target is available on this page when multiple products are selected.',
          image: 'admin.product-index.selection-action.render.png',
        },
        {
          title: 'Product variant details',
          description:
            'This page shows information about a single product variant. The `admin.product-variant-details.action.render` target is available on this page.',
          image: 'admin.product-variant-details.action.render.png',
        },
      ],
    },
    {
      type: 'Markdown',
      title: 'Admin block locations',
      anchorLink: 'block-locations',
      sectionContent:
        'Admin block extensions appear on resource detail pages throughout the admin. Learn more about [admin blocks](/docs/apps/admin/admin-actions-and-blocks#admin-blocks).',
      sectionSubContent: [
        {
          title: 'Abandoned checkout details',
          sectionContent:
            'This page shows information about a single abandoned checkout. The `admin.abandoned-checkout-details.block.render` target is available on this page.',
        },
        {
          title: 'Collection details',
          sectionContent:
            'This page shows information about a single collection. The `admin.collection-details.block.render` target is available on this page.',
        },
        {
          title: 'Customer details',
          sectionContent:
            'This page shows information about a single customer. The `admin.customer-details.block.render` target is available on this page.',
        },
        {
          title: 'Draft order details',
          sectionContent:
            'This page shows information about a single draft order. The `admin.draft-order-details.block.render` target is available on this page.',
        },
        {
          title: 'Order details',
          sectionContent:
            'This page shows information about a single order. The `admin.order-details.block.render` target is available on this page.',
        },
        {
          title: 'Product details',
          sectionContent:
            'This page shows information about a single product. The `admin.product-details.block.render` target is available on this page.',
        },
        {
          title: 'Product variant details',
          sectionContent:
            'This page shows information about a single product variant. The `admin.product-variant-details.block.render` target is available on this page.',
        },
      ],
    },
    {
      type: 'Markdown',
      title: 'Customer segmentation locations',
      anchorLink: 'customer-segmentation-locations',
      sectionContent:
        'Customer segmentation extensions appear in the [customer segment editor](https://help.shopify.com/en/manual/customers/customer-segmentation/create-customer-segments). Learn more about [customer segmentation](/docs/apps/marketing/customer-segments).',
      sectionSubContent: [
        {
          title: 'Customer segment editor',
          sectionContent:
            'This page allows editing and templating of customer segments. The `admin.customers.segmentation-templates.render` target is available on this page.',
        },
      ],
    },
    {
      type: 'Markdown',
      title: 'Product configuration locations',
      anchorLink: 'product-config-locations',
      sectionContent:
        'Product configuration extensions appear on the product details and product variant details pages, and allow configuration of product bundles. Learn more about [product configuration](/docs/apps/selling-strategies/bundles/product-config).',
      sectionSubContent: [
        {
          title: 'Product details configuration',
          sectionContent:
            'This page shows information about a single product. The `admin.product-details.configuration.render` target is available on this page.',
        },
        {
          title: 'Product variant details configuration',
          sectionContent:
            'This page shows information about a single product variant. The `admin.product-variant-details.configuration.render` target is available on this page.',
        },
      ],
    },
    {
      type: 'Markdown',
      title: 'Validation settings locations',
      anchorLink: 'validation-settings-locations',
      sectionContent:
        'Validation settings extensions appear in the checkout rules section of the settings page. They allow merchants to configure validation rules for their checkout. Learn more about [validation settings](/docs/apps/checkout/validation).',
      sectionSubContent: [
        {
          title: 'Checkout rules',
          sectionContent:
            'This page allows merchants to set up rules around their checkout experience. The `admin.settings.validation.render` target is available on this page.',
        },
      ],
    },
  ],
};

export default data;
