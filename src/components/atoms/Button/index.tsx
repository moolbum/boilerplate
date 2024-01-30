import React, { forwardRef, useId } from 'react';
import styled, { css } from 'styled-components';
import { AccentColorType, RadiusType, borderRadius, colors } from '@src/styles';
import { ButtonSizeType, ButtonVariantType } from '@src/types';
import { getButtonSize, getButtonVariant } from './style';
import { ButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  const {
    type = 'button',
    size = 'medium',
    radius = 'small',
    fullWidth = true,
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
    />
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
  border-radius: ${({ radius }) => borderRadius[radius]};
  transition: background-color 0.1s ease-in-out;

  ${({ variant, color }) => getButtonVariant(variant, color)}
  ${({ size }) => getButtonSize(size)}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

    &:disabled {
    color: ${colors.gray700};
    background: ${colors.gray300};
    cursor: not-allowed;
  }
`;
