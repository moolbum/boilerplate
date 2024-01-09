import React, { HTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { ColorType, colors } from '@/styles/color';
import { fontWeights, getFontFamily, typography, TypographyType } from '@/styles/typography';

interface TypoProps extends HTMLAttributes<HTMLElement> {
  as?: keyof HTMLElementTagNameMap;
  color?: ColorType;
  typo?: TypographyType;
  fontWeight?: keyof typeof fontWeights;

  // Under Line
  isUnderLine?: boolean;
  underLineThickness?: number;
  underlineOffset?: number;
}

const Typo = forwardRef<HTMLElement, TypoProps>((props, ref) => {
  const {
    as = 'span',
    role,
    color = 'black',
    fontWeight = 'regular',
    typo = 'b9',
    isUnderLine = false,
    underLineThickness = isUnderLine ? 1 : undefined,
    underlineOffset = isUnderLine ? 1 : undefined,
    ...rest
  } = props;

  return (
    <Component
      as={as}
      color={color}
      typo={typo}
      role={role ?? (as === 'span' ? 'text' : undefined)}
      ref={ref}
      fontWeight={fontWeight}
      isUnderLine={isUnderLine}
      underLineThickness={underLineThickness}
      underlineOffset={underlineOffset}
      {...rest}
    />
  );
});

export default Typo;

const Component = styled.span<{
  color: ColorType;
  typo: TypographyType;
  isUnderLine: boolean;

  underLineThickness?: number;
  underlineOffset?: number;
  fontWeight?: keyof typeof fontWeights;
}>`
  color: ${({ color }) => colors[color]};
  ${({ typo }) => typography[typo]}
  ${({ fontWeight }) => getFontFamily(fontWeight)}
  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeights[fontWeight]};
    `};

  ${({ isUnderLine, underLineThickness, underlineOffset }) =>
    isUnderLine &&
    css`
      text-decoration-line: underline;
      text-underline-position: under;
      text-decoration-thickness: ${underLineThickness}px;
      text-underline-offset: ${underlineOffset}px;
    `}

  ${props =>
    !!props.onClick &&
    css`
      cursor: pointer;
    `}
`;
