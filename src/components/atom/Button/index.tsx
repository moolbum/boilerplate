import { AccentColorType } from '@/styles/color';
import { ButtonSizeType } from '@/styles/size';
import { RadiusType, borderRadius } from '@/styles/radius';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { CommonVariantType } from '@/styles/variant';
import styled, { css } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  radius?: RadiusType;
  variant?: CommonVariantType;
  color?: AccentColorType;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  const { type = 'button', radius = 'small', fullWidth, ...rest } = props;

  return <ButtonComponent ref={forwardedRef} radius={radius} fullWidth={fullWidth} type={type} {...rest} />;
});

export default Button;

const ButtonComponent = styled.button<{ radius: RadiusType; fullWidth?: boolean }>`
  border-radius: ${({ radius }) => borderRadius[radius]};
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
