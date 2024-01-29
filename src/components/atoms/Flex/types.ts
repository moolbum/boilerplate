import { CSSProperties, HTMLAttributes } from 'react';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
}
