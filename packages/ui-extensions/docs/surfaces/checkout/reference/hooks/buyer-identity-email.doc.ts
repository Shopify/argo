import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {
  getLinksByTag,
  REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2,
} from '../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'useEmail',
  description: '',
  descriptionType: 'UseEmailGeneratedType',
  requires: REQUIRES_PROTECTED_CUSTOMER_DATA_LEVEL_2,
  isVisualComponent: false,
  type: 'hook',
  category: 'React Hooks',
  subCategory: 'Buyer Identity',
  definitions: [
    {
      title: '',
      description: '',
      type: 'UseEmailGeneratedType',
    },
  ],
  related: getLinksByTag('apis'),
};

export default data;