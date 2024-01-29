import { BadgeSizeType } from '@src/types/size';
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { getCardSize } from './style';
import { colors } from '@/styles/color';
import CardProps from './types';

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
