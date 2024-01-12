import React, { HTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';

// Grid Row
interface GridRowProps extends HTMLAttributes<HTMLDivElement> {
  columnCount?: number;
  isFullSize?: boolean;
  rowGap?: number;
  columnGap?: number;
}
const GridRow = forwardRef<HTMLDivElement, GridRowProps>((props, forwardedRef) => {
  const { columnCount = 12, rowGap = 8, columnGap = 8, isFullSize, ...rest } = props;

  return (
    <StyledGridRow
      ref={forwardedRef}
      columnCount={columnCount}
      rowGap={rowGap}
      columnGap={columnGap}
      isFullSize={isFullSize}
      {...rest}
    />
  );
});

const StyledGridRow = styled.div<{
  columnCount: number;
  rowGap: number;
  columnGap: number;
  isFullSize?: boolean;
}>`
  display: grid;
  grid-gap: ${({ rowGap, columnGap }) => `${rowGap}px ${columnGap}px`};

  ${({ columnCount }) => css`
    grid-template-columns: repeat(${columnCount}, 1fr);
  `};
  ${({ isFullSize }) =>
    isFullSize &&
    css`
      width: 100%;
    `}
`;

// Grid Column
interface GridColumnProps extends HTMLAttributes<HTMLDivElement> {
  columnSpan?: number;
}
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
