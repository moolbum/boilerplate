import { HTMLAttributes, ReactNode } from 'react';
import { ColorType } from '@src/styles';
import { CalloutSizeType } from '@src/types/size';

export interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
  size?: CalloutSizeType;
  icon?: ReactNode;
  iconOnClick?: () => void;
  gap?: number;
  backgroundColor?: ColorType;
  borderColor?: ColorType;
  fullWidth?: boolean;
}
