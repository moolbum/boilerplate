import { AccentColorType } from '@/styles/color';
import { BadgeSizeType } from '@/styles/size';
import { borderRadius, RadiusType } from '@/styles/radius';
import React, { HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import { getBadgeSize, getBadgeVariant } from './utils/style';
import { CommonVariantType } from '@/styles/variant';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  size?: Exclude<BadgeSizeType, 'large'>;
  radius?: Exclude<RadiusType, 'full'>;
  variant?: CommonVariantType;
  color?: AccentColorType;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, forwardedRef) => {
  const { size = 'small', color = 'blue', variant = 'soft', radius = 'small', ...rest } = props;

  return <BadgeComponent color={color} size={size} variant={variant} radius={radius} ref={forwardedRef} {...rest} />;
});

export default Badge;

const BadgeComponent = styled.span<{
  color: AccentColorType;
  radius: Exclude<RadiusType, 'full'>;
  size: Exclude<BadgeSizeType, 'large'>;
  variant: CommonVariantType;
}>`
  user-select: none;
  border-radius: ${({ radius }) => borderRadius[radius]};
  ${({ size }) => getBadgeSize(size)}
  ${({ variant, color }) => getBadgeVariant(variant, color)}
`;
