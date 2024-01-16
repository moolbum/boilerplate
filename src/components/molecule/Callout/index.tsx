import { ColorType, colors } from '@/styles/color';
import { CalloutSizeType } from '@/styles/size';
import React, { HTMLAttributes, PropsWithChildren, ReactNode, forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { getCalloutSize } from './utils/style';

interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
  size?: CalloutSizeType;
  icon?: ReactNode;
  iconOnClick?: () => void;
  gap?: number;
  backgroundColor?: ColorType;
  borderColor?: ColorType;
  fullWidth?: boolean;
}

const Callout = forwardRef<HTMLDivElement, PropsWithChildren<CalloutProps>>((props, forwardedRef) => {
  const {
    size = 'medium',
    fullWidth = true,
    children,
    icon,
    iconOnClick,
    gap = 8,
    backgroundColor = 'gray100',
    borderColor = 'gray200',
    ...rest
  } = props;

  return (
    <CalloutComponent
      ref={forwardedRef}
      gap={gap}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      fullWidth={fullWidth}
      size={size}
      {...rest}
    >
      {icon && <figure onClick={iconOnClick}>{icon}</figure>}
      {children}
    </CalloutComponent>
  );
});

export default Callout;

const CalloutComponent = styled.div<{
  fullWidth: boolean;
  gap: number;
  backgroundColor: ColorType;
  borderColor: ColorType;
  size: CalloutSizeType;
}>`
  display: flex;
  gap: ${({ gap }) => gap}px;
  background: ${({ backgroundColor }) => colors[backgroundColor]};
  border-radius: 4px;
  border: 1px solid ${({ borderColor }) => colors[borderColor]};
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ size }) => getCalloutSize(size)}

  & > figure {
    flex-shrink: 0;
  }
`;