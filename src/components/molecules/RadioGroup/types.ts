import { RadioProps } from '@/components/atoms';
import { CSSProperties } from 'react';

export interface RadioGroupProps {
  option: RadioProps[];
  direction?: CSSProperties['flexDirection'];
  name: string;
  gap?: number;
  onValueChange: (value: RadioProps['value']) => void;
}
