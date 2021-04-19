import React from 'react';
import {Card, Stack, Icon} from '@shopify/argo-admin';

export function IconExample() {
  return (
    <Card sectioned title="Icon component">
      <Stack>
        <Icon source="cancelSmallMinor" />
        <Icon source="searchMinor" />
        <Icon source="starHollow" />
        <Icon source="starFilled" />
        <Icon source="starFilled" color="yellow" />
        <Icon source="sortMinor" />
      </Stack>
    </Card>
  );
}
