import { Radio } from '@/components/atoms';
import React, { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface RadioGroupProps {
  name: string;
  option: {
    label: ReactNode | string;
    value: InputHTMLAttributes<HTMLInputElement>['value'];
    props?: Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>;
  }[];
  direction?: CSSProperties['flexDirection'];
  gap?: number;
}
const RadioGroup = ({ direction = 'row', gap = 8, option, name }: RadioGroupProps) => {
  return (
    <RadioGroupComponent direction={direction} gap={gap}>
      {option.map(({ label, value, props }, idx) => {
        return (
          <RadioItem key={idx.toString()}>
            <Radio name={name} value={value} id={value?.toString()} {...props} />
            <label htmlFor={value?.toString()}>{label}</label>
          </RadioItem>
        );
      })}
    </RadioGroupComponent>
  );
};

export default RadioGroup;

const RadioGroupComponent = styled.div<{ direction: CSSProperties['flexDirection']; gap: CSSProperties['gap'] }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap}px;
`;

const RadioItem = styled.div``;
