import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import Checkbox, { CheckboxProps } from '@/components/molecules/Checkbox';

const CHECKBOX_GROUP_DEFAULT_GAP = 8;

interface CheckboxGroupProps {
  option: CheckboxProps[];
  direction?: CSSProperties['flexDirection'];
  name: string;
  gap?: number;
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { direction = 'row', gap = CHECKBOX_GROUP_DEFAULT_GAP, option, name, ...rest } = props;

  return (
    <CheckboxGroupComponent direction={direction} gap={gap} {...rest}>
      {option.map(({ label, value, ...props }, idx) => {
        return (
          <Checkbox key={idx.toString()} name={name} value={value} label={label} id={value?.toString()} {...props} />
        );
      })}
    </CheckboxGroupComponent>
  );
};

export default CheckboxGroup;

const CheckboxGroupComponent = styled.div<{ direction: CSSProperties['flexDirection']; gap: CSSProperties['gap'] }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap}px;
`;
