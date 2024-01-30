import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { AccentColorType, RadiusType, borderRadius } from '@src/styles';
import { BadgeSizeType, BadgeVariantType } from '@src/types';
import { getBadgeSize, getBadgeVariant } from './style';
import { BadgeProps } from './types';

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, forwardedRef) => {
  const { size = 'small', color = 'blue', variant = 'soft', radius = 'small', ...rest } = props;

  return <BadgeComponent color={color} size={size} variant={variant} radius={radius} ref={forwardedRef} {...rest} />;
});

export default Badge;

const BadgeComponent = styled.span<{
  color: AccentColorType;
  radius: Exclude<RadiusType, 'full'>;
  size: Exclude<BadgeSizeType, 'large'>;
  variant: BadgeVariantType;
}>`
  user-select: none;
  border-radius: ${({ radius }) => borderRadius[radius]};
  ${({ size }) => getBadgeSize(size)}
  ${({ variant, color }) => getBadgeVariant(variant, color)}
`;
