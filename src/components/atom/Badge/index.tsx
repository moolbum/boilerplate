import { AccentColorType } from '@/styles/color';
import { CommonSizeType, CommonVariantType } from '@/styles/common';
import { borderRadius, RadiusType } from '@/styles/radius';
import React, { HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import { getBadgeSize, getBadgeVariant } from './utils/style';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  size?: Exclude<CommonSizeType, 'large'>;
  radius?: RadiusType;
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
  radius: RadiusType;
  size: Exclude<CommonSizeType, 'large'>;
  variant: CommonVariantType;
}>`
  user-select: none;
  border-radius: ${({ radius }) => borderRadius[radius]};
  ${({ size }) => getBadgeSize(size)}
  ${({ variant, color }) => getBadgeVariant(variant, color)}
`;
