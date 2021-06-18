import React from 'react';
import {extend, render, Button} from '@shopify/admin-ui-extensions-react';

function App() {
  return (
    <Button title="Press Me" primary onPress={() => console.log('Pressed')} disabled={false} />
  );
}

extend(
  'Playground',
  render(() => <App />),
);
