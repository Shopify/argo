import {
  reactExtension,
  Icon,
  Pressable,
  Tooltip,
} from '@shopify/ui-extensions-react/checkout';

reactExtension('Checkout::Dynamic::Render', () => <Extension />);

function Extension() {
  return (
    <Pressable
      overlay={
        <Tooltip>In case we need to contact you about your order</Tooltip>
      }
    >
      <Icon source="questionFill" />
    </Pressable>
  );
}