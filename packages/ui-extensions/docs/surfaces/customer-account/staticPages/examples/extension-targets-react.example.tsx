import {
  reactExtension,
  Banner,
  useTranslate,
} from '@shopify/ui-extensions-react/customer-account';

reactExtension('customer-account.order-index.block.render', () => (
  <App />
));

function App() {
  const translate = useTranslate();
  return <Banner>{translate('welcomeMessage')}</Banner>;
}
