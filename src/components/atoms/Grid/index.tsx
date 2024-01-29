import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { GridColumnProps, GridRowProps } from './types';

// Grid Row
const GridRow = forwardRef<HTMLDivElement, GridRowProps>((props, forwardedRef) => {
  const { columnCount = 12, rowGap = 8, columnGap = 8, fullWidth, ...rest } = props;

  return (
    <StyledGridRow
      ref={forwardedRef}
      columnCount={columnCount}
      rowGap={rowGap}
      columnGap={columnGap}
      fullWidth={fullWidth}
      {...rest}
    />
  );
});

const StyledGridRow = styled.div<{
  columnCount: number;
  rowGap: number;
  columnGap: number;
  fullWidth?: boolean;
}>`
  display: grid;
  grid-gap: ${({ rowGap, columnGap }) => `${rowGap}px ${columnGap}px`};

  ${({ columnCount }) => css`
    grid-template-columns: repeat(${columnCount}, 1fr);
  `};
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

// Grid Column
const GridColumn = forwardRef<HTMLDivElement, GridColumnProps>((props, forwardedRef) => {
  const { columnSpan = 2, ...rest } = props;
  return <StyledGridColumn ref={forwardedRef} columnSpan={columnSpan} {...rest} />;
});

const StyledGridColumn = styled.div<{ columnSpan?: number }>`
  ${({ columnSpan }) => css`
    grid-column: span ${columnSpan};
  `};
`;

// Result
const Grid = Object.assign(GridRow, {
  Col: GridColumn,
});

export default Grid;
