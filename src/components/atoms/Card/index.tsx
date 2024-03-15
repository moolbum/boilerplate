import React, { HTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '@src/styles';
import { BadgeSizeType, CommonSizeType } from '@src/types';
import { getCardSize } from './style';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: CommonSizeType;
  fullWidth?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, forwardedRef) => {
  const { children, fullWidth, ...rest } = props;

  return (
    <CardComponent ref={forwardedRef} fullWidth={fullWidth} {...rest}>
      {children}
    </CardComponent>
  );
});

export default Card;

const CardComponent = styled.section<{ size?: BadgeSizeType; fullWidth?: boolean }>`
  border-radius: 8px;
  border: 1px solid ${colors.gray500};

  ${({ size }) => getCardSize(size)}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
