import React, { InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { borderRadius, colors } from '@src/styles';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  allowClear?: boolean;
  onClear?: () => void;
  isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
  const { fullWidth = true, prefix, suffix, allowClear, onClear, isError = false, disabled, ...rest } = props;

  const [isFocus, setIsFocus] = useState(false);

  return (
    <InputComponent fullWidth={fullWidth} data-focus={isFocus} data-error={isError} data-disabled={disabled}>
      <div className="prefix">{prefix}</div>
      <StyledInput
        ref={forwardedRef}
        disabled={disabled}
        {...rest}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
      />
      {allowClear && (
        <button className="clear-button" type="button" onClick={onClear}>
          ❌
        </button>
      )}
      <div className="suffix">{suffix}</div>
    </InputComponent>
  );
});

export default Input;

const StyledInput = styled.input`
  border: none;
  outline: none;
`;

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
  &[data-disabled='true'] {
    background: ${colors.gray200};

    ${StyledInput} {
      background: ${colors.gray200};
      cursor: not-allowed;
    }
  }

  .prefix,
  .suffix {
    flex-shrink: 0;
  }

  .clear-button {
    flex-shrink: 0;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
