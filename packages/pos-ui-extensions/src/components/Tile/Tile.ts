import {createRemoteComponent} from '@remote-ui/core';

export interface TileProps {
  title: string;
  subtitle?: string;
  enabled: boolean;
  destructive?: boolean;
  onPress: () => void;
}

export const Tile = createRemoteComponent<'Tile', TileProps>('Tile');
