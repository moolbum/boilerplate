import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

export type CheckboxValueType = string;
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value: CheckboxValueType;
  label?: ReactNode | string;
  direction?: CSSProperties['flexDirection'];
  alignItems?: CSSProperties['alignItems'];
  gap?: number;
  onCheckChange?: (value: CheckboxValueType) => void;
}
