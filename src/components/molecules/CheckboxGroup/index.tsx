import React, { CSSProperties, useState } from 'react';
import styled from 'styled-components';
import Checkbox, { CheckboxProps } from '@/components/atoms/Checkbox';

const CHECKBOX_GROUP_DEFAULT_GAP = 8;

interface CheckboxGroupProps {
  option: CheckboxProps[];
  direction?: CSSProperties['flexDirection'];
  name: string;
  gap?: number;
  value?: CheckboxProps['value'][];
  onChange?: (value: CheckboxProps['value'][]) => void;
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { direction = 'row', gap = CHECKBOX_GROUP_DEFAULT_GAP, option, name, onChange, value, ...rest } = props;

  const [checkboxValues, setCheckboxValues] = useState<CheckboxProps['value'][]>(value ?? []);

  const handleCheckboxChange = (selectValue: CheckboxProps['value']) => {
    setCheckboxValues(prev => {
      const updatedValues = prev.includes(selectValue)
        ? prev.filter(value => value !== selectValue)
        : [...prev, selectValue];

      onChange?.(updatedValues);

      return updatedValues;
    });
  };

  return (
    <CheckboxGroupComponent direction={direction} gap={gap} {...rest}>
      {option.map(({ label, value, ...checkboxProps }) => (
        <Checkbox
          key={value?.toString()}
          name={name}
          value={value}
          label={label}
          id={value?.toString()}
          onChange={() => handleCheckboxChange(value)}
          checked={checkboxValues.includes(value)}
          {...checkboxProps}
        />
      ))}
    </CheckboxGroupComponent>
  );
};

export default CheckboxGroup;

const CheckboxGroupComponent = styled.div<{ direction: CSSProperties['flexDirection']; gap: CSSProperties['gap'] }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap}px;
`;
