import React, {useState} from 'react';
import {
  Navigator,
  Screen,
  List,
  Text,
  ScrollView,
  Section,
  ListRowSubtitle,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridModal = () => {
  const [seeDetails, setSeeDetails] = useState(false);
  const listData = [
    {
      id: 'graphicTees',
      leftSide: {
        label: 'Graphic Tees',
        subtitle: [{content: 'Summer Collection'}, {content: 'Unisex'}] as [
          ListRowSubtitle,
          ListRowSubtitle?,
        ],
      },
      rightSide: {
        label: 'Product details',
        showChevron: true,
      },
      onPress: () => setSeeDetails(!seeDetails),
    },
    {
      id: 'denimShorts',
      leftSide: {
        label: 'Denim Shorts',
        subtitle: [{content: 'Summer Collection'}, {content: 'Denim'}] as [
          ListRowSubtitle,
          ListRowSubtitle?,
        ],
      },
    },
  ];
  return (
    <Navigator>
      <Screen name="ProductList" title="Product List">
        <List title="Products" data={listData} />
        {seeDetails && (
          <ScrollView>
            <Section title="Our T-shirts">
              <Text>Our shirts are made with 100% organic cotton!</Text>
            </Section>
          </ScrollView>
        )}
      </Screen>
    </Navigator>
  );
};

export default reactExtension('pos.home.modal.render', () => (
  <SmartGridModal />
));
