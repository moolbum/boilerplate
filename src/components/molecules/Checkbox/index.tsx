import { Typo } from '@/components/atoms';
import React, { CSSProperties, InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import styled from 'styled-components';

const CHECKBOX_DEFAULT_GAP = 4;

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode | string;
  direction?: CSSProperties['flexDirection'];
  alignItems?: CSSProperties['alignItems'];
  gap?: number;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, forwardedRef) => {
  const { label, value, direction = 'row', gap = CHECKBOX_DEFAULT_GAP, alignItems = 'center', ...rest } = props;

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
    <CheckboxComponent direction={direction} alignItems={alignItems} gap={gap}>
      <input ref={forwardedRef} id={value?.toString()} {...rest} type="checkbox" />
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

  input {
    margin: 0;
  }
`;