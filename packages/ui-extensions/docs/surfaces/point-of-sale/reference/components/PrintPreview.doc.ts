import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';
import {generateCodeBlock} from '../helpers/generateCodeBlock';

const generateCodeBlockForPrintPreview = (title: string, fileName: string) =>
  generateCodeBlock(title, 'print-preview', fileName);

const data: ReferenceEntityTemplateSchema = {
  name: 'PrintPreview',
  description: `
  A component that displays a preview of a printable document. 
  > Note:
  > This component must be a direct child of the Screen component and cannot be nested inside any other component.`,
  isVisualComponent: true,
  type: 'component',
  thumbnail: 'print-preview-thumbnail.png',
  definitions: [
    {
      title: 'PrintPreview',
      description:
        'Renders a preview of a printable document. This component must a direct child of the Screen component.',
      type: 'PrintPreviewProps',
    },
  ],
  category: 'Components',
  related: [
    {
      name: 'Print API',
      subtitle: 'Handle print operations',
      url: '/api/pos-ui-extensions/apis/print-api',
    },
    {
      name: 'Build a Print Extension',
      subtitle: 'Learn how to implement printing',
      url: '/docs/api/pos-ui-extensions/examples/print-extension',
    },
  ],
  defaultExample: {
    image: 'print-preview-default.png',
    description: 'Basic usage with relative and full URLs:',
    codeblock: generateCodeBlockForPrintPreview(
      'Basic PrintPreview',
      'default.example',
    ),
  },
};

export default data;
