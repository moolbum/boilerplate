import { ColorType, TypographyType, fontWeights } from '@src/styles';
import { HTMLAttributes } from 'react';

export interface TypoProps extends HTMLAttributes<HTMLElement> {
  as?: keyof HTMLElementTagNameMap;
  color?: ColorType;
  typo?: TypographyType;
  fontWeight?: keyof typeof fontWeights;

  // Under Line
  isUnderLine?: boolean;
  underLineThickness?: number;
  underlineOffset?: number;
}
