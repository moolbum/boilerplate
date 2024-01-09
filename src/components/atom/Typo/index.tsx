import React, { HTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { ColorType, colors } from '@/styles/color';
import { fontWeights, getFontFamily, typography, TypographyType } from '@/styles/typography';

interface TypoProps extends HTMLAttributes<HTMLElement> {
  as?: keyof HTMLElementTagNameMap;
  color?: ColorType;
  typo?: TypographyType;
  fontWeight?: keyof typeof fontWeights;
}

const Typo = forwardRef<HTMLElement, TypoProps>((props, ref) => {
  const { as = 'span', role, color = 'black', fontWeight = 'regular', typo = 'b9r', ...rest } = props;

  return (
    <Component
      as={as}
      color={color}
      typo={typo}
      role={role ?? (as === 'span' ? 'text' : undefined)}
      ref={ref}
      fontWeight={fontWeight}
      {...rest}
    />
  );
});

export default Typo;

const Component = styled.span<{ color: ColorType; typo: TypographyType; fontWeight?: keyof typeof fontWeights }>`
  color: ${({ color }) => colors[color]};
  ${({ typo }) => typography[typo]}
  ${({ fontWeight }) => getFontFamily(fontWeight)}
  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeights[fontWeight]};
    `};
`;
