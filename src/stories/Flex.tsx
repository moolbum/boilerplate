import { Flex, FlexProps, Typo } from '@/components/atoms';
import { borderRadius, colors } from '@src/styles';

import styled from 'styled-components';

const StorybookFlex = (props: FlexProps) => {
  return (
    <div>
      <Flex {...props}>
        <Div>
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
        </Div>
      </Flex>
    </div>
  );
};

export default StorybookFlex;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background: ${colors.gray200};
  border-radius: ${borderRadius.medium};
`;
