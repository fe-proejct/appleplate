import "styled-components";
import { ColorsTypes, DeviceTypes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    device: DeviceTypes;
  }
}
