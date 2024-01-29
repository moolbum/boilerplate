import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  allowClear?: boolean;
  onClear?: () => void;
  isError?: boolean;
}
