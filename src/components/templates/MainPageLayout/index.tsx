import React, { PropsWithChildren } from 'react';
import { MainHeader } from '@/components/organisms';
import styled from 'styled-components';

function MainPageLayout({ children }: PropsWithChildren) {
  return (
    <MainPageContainer>
      <MainHeader />
      <main>{children}</main>
    </MainPageContainer>
  );
}

export default MainPageLayout;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
