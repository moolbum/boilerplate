import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { MainHeader, SideNav } from '@/components/organisms';

function SubPageLayout({ children }: PropsWithChildren) {
  return (
    <SubPageContainer>
      <MainHeader />

      <StyledMain>
        <SideNav />
        {children}
      </StyledMain>
    </SubPageContainer>
  );
}

export default SubPageLayout;

const SubPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  display: flex;
`;
