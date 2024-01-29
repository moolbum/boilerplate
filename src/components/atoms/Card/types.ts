import { HTMLAttributes } from 'react';
import { CommonSizeType } from '@src/types/size';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: CommonSizeType;
  fullWidth?: boolean;
}

export default CardProps;
