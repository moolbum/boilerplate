import { RadioProps, Typo } from '@/components/atoms';
import React, { CSSProperties, InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

const RADIO_DEFAULT_GAP = 4;

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, forwardedRef) => {
  const {
    label,
    value,
    direction = 'row',
    gap = RADIO_DEFAULT_GAP,
    alignItems = 'center',
    onChange,
    onValueChange,
    disabled,
    ...rest
  } = props;

  const handleRadioChange = (value: InputHTMLAttributes<HTMLInputElement>['value']) => {
    onValueChange?.(value);
  };

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
    <RadioComponent direction={direction} alignItems={alignItems} gap={gap} data-disabled={disabled}>
      <input
        ref={forwardedRef}
        id={value?.toString()}
        onChange={e => {
          onChange?.(e);
          handleRadioChange(value);
        }}
        disabled={disabled}
        {...rest}
        type="radio"
      />
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

  &[data-disabled='true'] > * {
    cursor: not-allowed;
  }

  input {
    margin: 0;
  }
`;
