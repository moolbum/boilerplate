import React, { CSSProperties, forwardRef } from 'react';
import styled from 'styled-components';
import { FlexProps } from './types';

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, forwardedRef) => {
  const { gap = 8, direction = 'row', alignItems = 'baseline', ...rest } = props;

  return <FlexContainer ref={forwardedRef} gap={gap} alignItems={alignItems} direction={direction} {...rest} />;
});

export default Flex;

const FlexContainer = styled.div<{
  gap: number;
  direction?: CSSProperties['flexDirection'];
  alignItems?: CSSProperties['alignItems'];
}>`
  display: flex;
  gap: ${({ gap }) => gap}px;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
`;
