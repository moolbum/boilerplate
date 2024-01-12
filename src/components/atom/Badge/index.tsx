import { CommonSizeType, CommonVariantType } from '@/styles/common';
import { borderRadius, RadiusType } from '@/styles/radius';
import React, { HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  size?: CommonSizeType;
  radius?: RadiusType;
  variant?: CommonVariantType;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, forwardedRef) => {
  const { size = 'medium', variant = 'soft', radius = 'full', ...rest } = props;

  return <BadgeContainer size={size} variant={variant} radius={radius} ref={forwardedRef} {...rest} />;
});

export default Badge;

const BadgeContainer = styled.span<{ radius: RadiusType; size: CommonSizeType; variant: CommonVariantType }>`
  border-radius: ${({ radius }) => borderRadius[radius]};
`;
