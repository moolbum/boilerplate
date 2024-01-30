import { AccentColorType } from '@/styles/color';
import { RadiusType } from '@/styles/radius';
import { BadgeVariantType } from '@src/types/variant';
import { BadgeSizeType } from '@src/types/size';
import { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  size?: Exclude<BadgeSizeType, 'large'>;
  radius?: Exclude<RadiusType, 'full'>;
  variant?: BadgeVariantType;
  color?: AccentColorType;
}
