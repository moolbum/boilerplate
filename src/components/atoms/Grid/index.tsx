import React, { HTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';

// Grid Row
export interface GridRowProps extends HTMLAttributes<HTMLDivElement> {
  columnCount?: number;
  fullWidth?: boolean;
  rowGap?: number;
  columnGap?: number;
}

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

const getGridRowTemplateStyle = (columnCount: GridRowProps['columnCount']) => {
  return css`
    grid-template-columns: repeat(${columnCount}, 1fr);
  `;
};

const StyledGridRow = styled.div<{
  columnCount: GridRowProps['columnCount'];
  rowGap: GridRowProps['rowGap'];
  columnGap: GridRowProps['columnGap'];
  fullWidth?: GridRowProps['fullWidth'];
}>`
  display: grid;
  grid-gap: ${({ rowGap, columnGap }) => `${rowGap}px ${columnGap}px`};

  ${({ columnCount }) => getGridRowTemplateStyle(columnCount)};
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

// Grid Column
export interface GridColumnProps extends HTMLAttributes<HTMLDivElement> {
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
