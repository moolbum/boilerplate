import { Grid, GridColumnProps, GridRowProps, Typo } from '@/components/atoms';
import { colors } from '@/styles/color';
import { borderRadius } from '@/styles/radius';
import styled from 'styled-components';

interface StorybookGridProps extends GridRowProps, GridColumnProps {}

const StorybookGrid = (props: StorybookGridProps) => {
  const { columnSpan } = props;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Grid {...props}>
        {Array.from({ length: 12 }).map((_, idx) => {
          return (
            <Grid.Col key={idx} columnSpan={columnSpan}>
              <Div>
                <Typo fontWeight="bold" typo="h3">
                  {idx + 1}
                </Typo>
              </Div>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default StorybookGrid;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background: ${colors.gray200};
  border-radius: ${borderRadius.medium};
`;
