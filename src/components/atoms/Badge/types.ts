import { AccentColorType } from '@/styles/color';
import { RadiusType } from '@/styles/radius';
import { BadgeVariantType } from '@/styles/variant';
import { BadgeSizeType } from '@src/types/size';
import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  size?: Exclude<BadgeSizeType, 'large'>;
  radius?: Exclude<RadiusType, 'full'>;
  variant?: BadgeVariantType;
  color?: AccentColorType;
}

export default BadgeProps;
