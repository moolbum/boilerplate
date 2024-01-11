import React from 'react';
import LocalIcon from '@/components/atom/Icons/LocalIcon';
import LucideIcon from '@/components/atom/Icons/LucideIcon';
import RadixIcon from '@/components/atom/Icons/RadixIcon';
import Typo from '@/components/atom/Typo';
import TableSvg from '@/assets/icons/icon-table-placeholder.svg';
import Stack from '@/components/molecule/Stack';

function MainPage() {
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
      <Typo isUnderLine underLineThickness={20} underlineOffset={2}>
        Under Line 20
      </Typo>
      <Typo onClick={() => {}} isUnderLine>
        Under Line
      </Typo>

      <Stack gap={8}>
        <Typo as="h1" typo="h1" fontWeight="bold">
          Icon
        </Typo>
        <RadixIcon name="ActivityLogIcon" size={16} />
        <LucideIcon name="ALargeSmall" size={16} />
        <LocalIcon name={TableSvg} size={16} />
      </Stack>
    </div>
  );
}

export default MainPage;
