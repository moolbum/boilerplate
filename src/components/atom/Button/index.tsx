import { AccentColorType } from '@/styles/color';
import { ButtonSizeType } from '@/styles/size';
import { RadiusType, borderRadius } from '@/styles/radius';
import React, { ButtonHTMLAttributes, forwardRef, useId } from 'react';
import { ButtonVariantType } from '@/styles/variant';
import styled, { css } from 'styled-components';
import { getButtonSize, getButtonVariant } from './utils/style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  radius?: RadiusType;
  variant?: ButtonVariantType;
  color?: AccentColorType;
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  const {
    type = 'button',
    size = 'medium',
    radius = 'small',
    fullWidth = true,
    isLoading,
    children,
    variant = 'soft',
    color = 'blue',
    ...rest
  } = props;
  const buttonId = useId();

  return (
    <ButtonComponent
      id={buttonId}
      ref={forwardedRef}
      radius={radius}
      fullWidth={fullWidth}
      size={size}
      type={type}
      variant={variant}
      color={color}
      {...rest}
    >
      {/* {isLoading && <Loader />} */}
      {children}
    </ButtonComponent>
  );
});

export default Button;

const ButtonComponent = styled.button<{
  fullWidth?: boolean;
  radius: RadiusType;
  size: ButtonSizeType;
  variant: ButtonVariantType;
  color: AccentColorType;
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.1s ease-in-out,
    background-color 0.1s ease-in-out;

  border-radius: ${({ radius }) => borderRadius[radius]};

  ${({ variant, color }) => getButtonVariant(variant, color)}
  ${({ size }) => getButtonSize(size)}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
