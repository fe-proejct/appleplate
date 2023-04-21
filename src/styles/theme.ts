import { DefaultTheme } from 'styled-components';

const colors = {
  primary: 'red',
  second: 'white',
  primaryText: '#555',
  secondText: '#9b9b9b',
  thirdText: '#e9e9e9',
  grayBg: '#3e3e3e',
  lightGrayBg: '#f6f6f6',
};

const deviceSizes = {
  mobile: '1023px',
  desktop: '1024px'
}

const device = {
  mobile: `(max-width: ${deviceSizes.mobile})`,
  desktop: `(min-width: ${deviceSizes.desktop})`,
}

export type ColorsTypes = typeof colors;
export type DeviceTypes = typeof device;
export const theme: DefaultTheme = {
  colors,
  device
}