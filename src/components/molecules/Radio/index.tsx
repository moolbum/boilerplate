import React, { CSSProperties, InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import styled from 'styled-components';
import Typo from '../../atoms/Typo';

const RADIO_DEFAULT_GAP = 4;

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode | string;
  direction?: CSSProperties['flexDirection'];
  gap?: number;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, forwardedRef) => {
  const { label, value, direction = 'row', gap = RADIO_DEFAULT_GAP, ...rest } = props;

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
    <RadioComponent direction={direction} gap={gap}>
      <input ref={forwardedRef} type="radio" id={value?.toString()} {...rest} />
      {renderLabel()}
    </RadioComponent>
  );
});

export default Radio;

const RadioComponent = styled.div<{ direction: CSSProperties['flexDirection']; gap: number }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap}px;

  input {
    margin: 0;
  }
`;
