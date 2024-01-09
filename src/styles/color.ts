const colors = {
  white: '#ffffff',
  black: '#000000',

  // gray
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
  red100: '#A51926',
  red200: '#BC1B2A',
  red300: '#D22030',
  red400: '#E42939',
  red500: '#F04452',
  red600: '#F66570',
  red700: '#FB8890',
  red800: '#FEAFB4',
  red900: '#FFD4D6',

  // pink
  pink100: '#C2255C',
  pink200: '#E64980',
  pink300: '#F783AC',
  pink400: '#FCC2D7',
  pink500: '#FFDEEB',
  pink600: '#FFF0F6',

  // orange
  orange100: '#E8590C',
  orange200: '#FD7E14',
  orange300: '#FFA94D',
  orange400: '#FFD8A8',
  orange500: '#FFE8CC',
  orange600: '#FFF4E6',

  // yellow
  yellow100: '#E1AE00',
  yellow200: '#FFCC00',
  yellow300: '#FFD633',
  yellow400: '#FFE066',
  yellow500: '#FFF0B3',
  yellow600: '#FFF7D9',

  // lime
  lime100: '#5C940D',
  lime200: '#82C91E',
  lime300: '#C0EB75',
  lime400: '#D8F5A2',
  lime500: '#E9FAC8',
  lime600: '#F4FCE3',

  // green
  green100: '#0A9A32',
  green200: '#15BD66',
  green300: '#35DB80',
  green400: '#64E8A4',
  green500: '#93EDBF',
  green600: '#EBFAEF',

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

  // grape
  grape100: '#862E9C',
  grape200: '#BE4BDB',
  grape300: '#DA77F2',
  grape400: '#EEBEFA',
  grape500: '#F3D9FA',
  grape600: '#F8F0FC',
} as const;

export default colors;

type ColorType = keyof typeof colors;
export { type ColorType };
