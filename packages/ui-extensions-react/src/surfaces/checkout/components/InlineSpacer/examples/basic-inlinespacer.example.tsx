import {
  reactExtension,
  InlineSpacer,
  InlineStack,
  View,
} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return (
    <InlineStack spacing="none">
      <View border="base" padding="base">
        View
      </View>
      <InlineSpacer spacing="loose" />
      <View border="base" padding="base">
        View
      </View>
      <InlineSpacer spacing="tight" />
      <View border="base" padding="base">
        View
      </View>
      <InlineSpacer spacing="base" />
      <View border="base" padding="base">
        View
      </View>
    </InlineStack>
  );
}