import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode | string;
  direction?: CSSProperties['flexDirection'];
  alignItems?: CSSProperties['alignItems'];
  gap?: number;
  onValueChange?: (value: InputHTMLAttributes<HTMLInputElement>['value']) => void;
}

export default RadioProps;