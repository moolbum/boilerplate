import { HTMLAttributes } from 'react';
import { ColorType } from '@/styles/color';
import { TypographyType, fontWeights } from '@/styles/typography';

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
