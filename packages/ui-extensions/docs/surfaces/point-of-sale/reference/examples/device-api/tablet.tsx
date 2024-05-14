import React, { useState } from 'react';
import {
  Tile,
  useApi,
  reactExtension,
} from '@shopify/ui-extensions-react/point-of-sale';

const SmartGridTile = () => {
  const api = useApi<'pos.home.tile.render'>();

  return (
    <Tile
      title='My App'
      enabled={api.device.isTablet()}
    />
  );
};

reactExtension('pos.home.tile.render', () => <SmartGridTile />);
