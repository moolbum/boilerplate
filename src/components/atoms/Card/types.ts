import { HTMLAttributes } from 'react';
import { CommonSizeType } from '@src/types/size';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: CommonSizeType;
  fullWidth?: boolean;
}
