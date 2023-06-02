import React from 'react';
import {reactExtension, Radio} from '@shopify/ui-extensions-react/admin';

function App() {
  return (
    <>
      <Radio
        label="Option 1"
        helpText="Help text for option 1."
        checked
        id="option1"
        name="greatOptions"
        onChange={() => console.log('Option 1 selected')}
      />
      <Radio
        label="Option 2"
        helpText="Help text for option 2."
        id="option2"
        name="greatOptions"
        checked={false}
        onChange={() => console.log('Option 2 selected')}
      />
    </>
  );
}

export default reactExtension('Playground', () => <App />);
