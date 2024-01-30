import { HTMLAttributes } from 'react';
import { BadgeVariantType } from '@src/types/variant';
import { BadgeSizeType } from '@src/types/size';
import { AccentColorType, RadiusType } from '@src/styles';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  size?: Exclude<BadgeSizeType, 'large'>;
  radius?: Exclude<RadiusType, 'full'>;
  variant?: BadgeVariantType;
  color?: AccentColorType;
}
