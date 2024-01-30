import { CheckboxProps } from '@/components/atoms';
import { CSSProperties } from 'react';

export interface CheckboxGroupProps {
  name: string;
  option?: CheckboxProps[];
  direction?: CSSProperties['flexDirection'];
  gap?: number;
  value?: CheckboxProps['value'][];
  onChange?: (value: CheckboxProps['value'][]) => void;
}
