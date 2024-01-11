import { CommonSizeType, CommonVariantType } from '@/styles/common';
import { borderRadius, RadiusType } from '@/styles/radius';
import React, { HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  size?: CommonSizeType;
  radius?: RadiusType;
  variant: CommonVariantType;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, forwardedRef) => {
  const { radius = 'full' } = props;

  return <BadgeContainer radius={radius} ref={forwardedRef} {...props} />;
});

export default Badge;

const BadgeContainer = styled.span<{ radius: RadiusType }>`
  border-radius: ${({ radius }) => borderRadius[radius]};
`;
