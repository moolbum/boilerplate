import { Typo } from '@/components/atoms';
import React, { CSSProperties, InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import styled from 'styled-components';

const RADIO_DEFAULT_GAP = 4;

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode | string;
  direction?: CSSProperties['flexDirection'];
  alignItems?: CSSProperties['alignItems'];
  gap?: number;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, forwardedRef) => {
  const { label, value, direction = 'row', gap = RADIO_DEFAULT_GAP, alignItems = 'center', ...rest } = props;

  const renderLabel = () => {
    if (typeof label === 'string') {
      return (
        <label htmlFor={value?.toString()}>
          <Typo>{label}</Typo>
        </label>
      );
    }

    return label;
  };

  return (
    <RadioComponent direction={direction} alignItems={alignItems} gap={gap}>
      <input ref={forwardedRef} id={value?.toString()} {...rest} type="radio" />
      {renderLabel()}
    </RadioComponent>
  );
});

export default Radio;

const RadioComponent = styled.div<{
  direction: CSSProperties['flexDirection'];
  alignItems: CSSProperties['alignItems'];
  gap: number;
}>`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap}px;

  input {
    margin: 0;
  }
`;
