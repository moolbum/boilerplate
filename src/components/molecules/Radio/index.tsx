import React, { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import styled from 'styled-components';
import Typo from '../../atoms/Typo';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode | string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, forwardedRef) => {
  const { label, value, ...rest } = props;

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
    <RadioComponent>
      <input ref={forwardedRef} type="radio" id={value?.toString()} {...rest} />
      {renderLabel()}
    </RadioComponent>
  );
});

export default Radio;

const RadioComponent = styled.div`
  display: flex;
  align-items: center;

  input {
    margin: 0;
  }
`;
