import {
  reactExtension,
  BlockSpacer,
  View,
} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return (
    <>
      <View border="base" padding="base">
        View
      </View>
      <BlockSpacer spacing="loose" />
      <View border="base" padding="base">
        View
      </View>
    </>
  );
}