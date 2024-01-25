import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { MainHeader } from '@/components/organisms';

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
