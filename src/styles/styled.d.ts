import 'styled-components';
import { ColorsTypes, DeviceTypes, SpriteTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    device: DeviceTypes;
    sprite: SpriteTypes;
  }
}