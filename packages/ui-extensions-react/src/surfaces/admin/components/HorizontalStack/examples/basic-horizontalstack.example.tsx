import React from 'react';
import {
  render,
  HorizontalStack,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <HorizontalStack gap="base">
      <>Child 1</>
      <>Child 2</>
      <>Child 3</>
      <>Child 4</>
    </HorizontalStack>
  );
}