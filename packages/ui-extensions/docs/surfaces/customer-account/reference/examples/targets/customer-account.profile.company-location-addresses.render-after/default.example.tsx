import {
  reactExtension,
  Text,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  'customer-account.profile.company-location-addresses.render-after',
  () => <Extension />,
);

function Extension() {
  return <Text>I am a company location addresses extension</Text>;
}
