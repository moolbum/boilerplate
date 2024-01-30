import React from 'react';
import styled from 'styled-components';
import { RadioGroupProps } from './types';
import { Radio, RadioProps } from '@/components/atoms';

const RADIO_GROUP_DEFAULT_GAP = 8;

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

const RadioGroupComponent = styled.div<{ direction: RadioGroupProps['direction']; gap: RadioGroupProps['gap'] }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap}px;
`;
