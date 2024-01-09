import Typo from '@/src/components/atom/Typo';
import React from 'react';

const MainPage = () => {
  return (
    <div>
      <Typo as="h1" typo="d2" role="title" fontWeight="semibold" color="red300">
        h1 MainPage
      </Typo>
      <Typo as="h2" fontWeight="bold">
        h2 MainPage
      </Typo>
      <Typo as="p">P MainPage</Typo>
      <Typo>Default MainPage</Typo>
    </div>
  );
};

export default MainPage;
