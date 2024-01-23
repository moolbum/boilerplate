import { colors } from '@/styles/color';
import { borderRadius } from '@/styles/radius';
import React, { InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  allowClear?: boolean;
  onClear?: () => void;
  isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const { fullWidth = true, prefix, suffix, allowClear, onClear, isError = false, ...rest } = props;

  const [isFocus, setIsFocus] = useState(false);

  return (
    <InputComponent fullWidth={fullWidth} data-focus={isFocus} data-error={isError}>
      {prefix}
      <StyledInput
        ref={forwardedRef}
        {...rest}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
      />
      {allowClear && (
        <Clear type="button" onClick={onClear}>
          ❌
        </Clear>
      )}
      {suffix}
    </InputComponent>
  );
});

export default Input;

const InputComponent = styled.div<{ fullWidth: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid ${colors.gray300};
  border-radius: ${borderRadius.medium};

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;

      input {
        width: 100%;
      }
    `}

  &[data-focus='true'] {
    border: 1px solid ${colors.blue700};
  }

  &[data-error='true'] {
    border: 1px solid ${colors.red700};
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
`;

const Clear = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
