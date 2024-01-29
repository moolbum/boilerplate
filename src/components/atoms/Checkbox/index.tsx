import React, { CSSProperties, forwardRef } from 'react';
import { CheckboxProps, CheckboxValueType, Typo } from '@/components/atoms';
import styled from 'styled-components';

const CHECKBOX_DEFAULT_GAP = 4;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, forwardedRef) => {
  const {
    label,
    value,
    direction = 'row',
    gap = CHECKBOX_DEFAULT_GAP,
    alignItems = 'center',
    onChange,
    onCheckChange,
    disabled,
    ...rest
  } = props;

  const handleCheckboxChange = (value: CheckboxValueType) => {
    onCheckChange?.(value);
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
    <CheckboxComponent direction={direction} alignItems={alignItems} gap={gap} data-disabled={disabled}>
      <input
        ref={forwardedRef}
        id={value.toString()}
        onChange={e => {
          onChange?.(e);
          handleCheckboxChange(value as CheckboxValueType);
        }}
        disabled={disabled}
        {...rest}
        type="checkbox"
      />
      {renderLabel()}
    </CheckboxComponent>
  );
});

export default Checkbox;

const CheckboxComponent = styled.div<{
  direction: CSSProperties['flexDirection'];
  alignItems: CSSProperties['alignItems'];
  gap: number;
}>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap}px;

  &[data-disabled='true'] > * {
    cursor: not-allowed;
  }

  input {
    margin: 0;
  }
`;
