import Radio, { RadioProps } from '@/components/molecules/Radio';
import React, { CSSProperties } from 'react';
import styled from 'styled-components';

const RADIO_GROUP_DEFAULT_GAP = 8;
interface RadioGroupProps {
  option: RadioProps[];
  direction?: CSSProperties['flexDirection'];
  name: string;
  gap?: number;
}
const RadioGroup = (props: RadioGroupProps) => {
  const { direction = 'row', gap = RADIO_GROUP_DEFAULT_GAP, option, name, ...rest } = props;

  return (
    <RadioGroupComponent direction={direction} gap={gap} {...rest}>
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
