import { Grid, GridRowProps, Typo } from '@/components/atoms';
import { colors } from '@/styles/color';
import { borderRadius } from '@/styles/radius';
import styled from 'styled-components';

const StorybookGrid = (props: GridRowProps) => {
  return (
    <div>
      <Grid {...props}>
        <Grid.Col>
          <Div>
            <Typo fontWeight="bold" typo="h3">
              1
            </Typo>
          </Div>
        </Grid.Col>
        {/* <Div>
          <Typo fontWeight="bold" typo="h3">
            1
          </Typo>
        </Div>
        <Div style={{ height: '100px' }}>
          <Typo fontWeight="bold" typo="h3">
            2
          </Typo>
        </Div>
        <Div style={{ height: '70px' }}>
          <Typo fontWeight="bold" typo="h3">
            3
          </Typo>
        </Div> */}
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
