import { CSSProperties, HTMLAttributes } from 'react';

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
}

export default FlexProps;
