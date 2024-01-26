import Radio, { RadioProps } from '@/components/atoms/Radio';
import React, { CSSProperties } from 'react';
import styled from 'styled-components';

const RADIO_GROUP_DEFAULT_GAP = 8;

interface RadioGroupProps {
  option: RadioProps[];
  direction?: CSSProperties['flexDirection'];
  name: string;
  gap?: number;
  onValueChange: (value: RadioProps['value']) => void;
}

const RadioGroup = (props: RadioGroupProps) => {
  const { direction = 'row', gap = RADIO_GROUP_DEFAULT_GAP, option, name, onValueChange, ...rest } = props;

  const handleRadioChange = (value: RadioProps['value']) => {
    onValueChange(value);
  };

  return (
    <RadioGroupComponent direction={direction} gap={gap} role="group" {...rest}>
      {option.map(({ label, value, ...radioProps }) => {
        return (
          <Radio
            key={value?.toString()}
            id={value?.toString()}
            name={name}
            value={value}
            label={label}
            onValueChange={handleRadioChange}
            {...radioProps}
          />
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
