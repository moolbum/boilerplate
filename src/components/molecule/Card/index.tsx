import { CommonSizeType } from '@/styles/common';
import React, { HTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { getCardSize } from './utils/style';
import { colors } from '@/styles/color';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: CommonSizeType;
  isFullSize?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, forwardedRef) => {
  const { children, isFullSize, ...rest } = props;

  return (
    <CardComponent ref={forwardedRef} isFullSize={isFullSize} {...rest}>
      {children}
    </CardComponent>
  );
});

export default Card;

const CardComponent = styled.section<{ size?: CommonSizeType; isFullSize?: boolean }>`
  border-radius: 8px;
  border: 1px solid ${colors.gray600};

  ${({ size }) => getCardSize(size)}
  ${({ isFullSize }) =>
    isFullSize &&
    css`
      width: 100%;
    `}
`;
