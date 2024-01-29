import { HTMLAttributes } from 'react';

export interface GridRowProps extends HTMLAttributes<HTMLDivElement> {
  columnCount?: number;
  fullWidth?: boolean;
  rowGap?: number;
  columnGap?: number;
}

export interface GridColumnProps extends HTMLAttributes<HTMLDivElement> {
  columnSpan?: number;
}
