import { CheckboxProps } from '@/components/atoms';
import { CSSProperties } from 'react';

export interface CheckboxGroupProps {
  option: CheckboxProps[];
  direction?: CSSProperties['flexDirection'];
  name: string;
  gap?: number;
  value?: CheckboxProps['value'][];
  onChange?: (value: CheckboxProps['value'][]) => void;
}
