import Radio, { RadioProps } from '@/components/molecules/Radio';
import React, { CSSProperties } from 'react';
import styled from 'styled-components';

interface RadioGroupProps {
  option: RadioProps[];
  direction?: CSSProperties['flexDirection'];
  name?: string;
  gap?: number;
}
const RadioGroup = ({ direction = 'row', gap = 8, option, name }: RadioGroupProps) => {
  return (
    <RadioGroupComponent direction={direction} gap={gap}>
      {option.map(({ label, value, ...props }, idx) => {
        return <Radio key={idx.toString()} name={name} value={value} label={label} id={value?.toString()} {...props} />;
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
