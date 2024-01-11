import React, { CSSProperties, HTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  direction?: CSSProperties['flexDirection'];
}

const Stack = forwardRef<HTMLDivElement, StackProps>((props, forwardedRef) => {
  const { gap = 8, direction, ...rest } = props;

  return <StackContainer ref={forwardedRef} gap={gap} direction={direction} {...rest} />;
});

export default Stack;

const StackContainer = styled.div<{ gap: number; direction?: CSSProperties['flexDirection'] }>`
  display: flex;
  gap: ${({ gap }) => gap}px;
  flex-direction: ${({ direction }) => direction};
`;
