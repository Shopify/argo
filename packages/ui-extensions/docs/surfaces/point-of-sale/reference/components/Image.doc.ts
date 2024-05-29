import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const data: ReferenceEntityTemplateSchema = {
  name: 'Image',
  description:
    'The image component displays an image to a merchant in Shopify POS.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'Image',
      description: '',
      type: 'ImageProps',
    },
  ],
  category: 'Components',
  related: [],
  defaultExample: {
    image: 'image-default.png',
    codeblock: generateCodeBlock('Example image', 'image', 'default-example'),
  },
  thumbnail: 'image-thumbnail.png',
};

export default data;
