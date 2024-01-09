const colorSet = {
  // blue
  blue100: '#0B3E91',
  blue200: '#1150AA',
  blue300: '#1761C2',
  blue400: '#166DD7',
  blue500: '#1479EB',
  blue600: '#61A3EF',
  blue700: '#ADCCF3',
  blue800: '#C9DEF7',
  blue900: '#D7E7F9',
  blue950: '#F0F8FF',

  // gray
  gray100: '#000000',
  gray200: '#222729',
  gray300: '#353C3F',
  gray400: '#4A5256',
  gray500: '#5E696E',
  gray600: '#6E777C',
  gray700: '#AEB7BC',
  gray800: '#CFD6D9',
  gray900: '#E7EDF0',
  gray950: '#F1F4F6',
  gray990: '#F7F9FA',

  // red
  red100: '#BF4040',
  red200: '#D64C4C',
  red300: '#E68686',
  red400: '#EEA3A3',
  red500: '#F2B2B2',
  red600: '#F5C0C0',
  red700: '#FAD8D8',
  red800: '#FFEFEF',

  // yellow
  yellow100: '#E1AE00',
  yellow200: '#FFCC00',
  yellow300: '#FFD633',
  yellow400: '#FFE066',
  yellow500: '#FFF0B3',
  yellow600: '#FFF7D9',

  // green
  green100: '#0A9A32',
  green200: '#15BD66',
  green300: '#35DB80',
  green400: '#64E8A4',
  green500: '#93EDBF',
  green600: '#EBFAEF',

  // pink
  pink100: '#c2255c',
  pink200: '#e64980',
  pink300: '#f783ac',
  pink400: '#fcc2d7',
  pink500: '#ffdeeb',
  pink600: '#fff0f6',

  // lime
  lime100: '#5c940d',
  lime200: '#82c91e',
  lime300: '#c0eb75',
  lime400: '#d8f5a2',
  lime500: '#e9fac8',
  lime600: '#f4fce3',

  // grape
  grape100: '#862e9c',
  grape200: '#be4bdb',
  grape300: '#da77f2',
  grape400: '#eebefa',
  grape500: '#f3d9fa',
  grape600: '#f8f0fc',

  // orange
  orange100: '#e8590c',
  orange200: '#fd7e14',
  orange300: '#ffa94d',
  orange400: '#ffd8a8',
  orange500: '#ffe8cc',
  orange600: '#fff4e6',

  white: '#FFFFFF',
} as const;

export default colorSet;

type ColorType = keyof typeof colorSet;
export { type ColorType };
