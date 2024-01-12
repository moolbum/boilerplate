import React from 'react';
import LocalIcon from '@/components/atom/Icons/LocalIcon';
import LucideIcon from '@/components/atom/Icons/LucideIcon';
import RadixIcon from '@/components/atom/Icons/RadixIcon';
import Typo from '@/components/atom/Typo';
import TableSvg from '@/assets/icons/icon-table-placeholder.svg';
import Flex from '@/components/molecule/Flex';
import Badge from '@/components/atom/Badge';

function MainPage() {
  return (
    <Flex>
      <Typo as="h1" role="title" fontWeight="semibold" color="red500">
        h1 MainPage
      </Typo>
      <Typo as="h2" fontWeight="bold">
        h2 MainPage
      </Typo>
      <Typo as="p">P MainPage</Typo>
      <Typo>Default MainPage</Typo>
      <Typo isUnderLine underLineThickness={4} underlineOffset={2}>
        Under Line 20
      </Typo>
      <Typo onClick={() => {}} isUnderLine>
        Under Line
      </Typo>

      <Flex gap={8}>
        <Typo as="h1" typo="h1" fontWeight="bold">
          Icon
        </Typo>
        <RadixIcon name="ActivityLogIcon" size={16} />
        <LucideIcon name="ALargeSmall" size={16} />
        <LocalIcon name={TableSvg} size={16} />
      </Flex>

      <Flex>
        <Badge color="gray">test</Badge>
        <Badge variant="outline">outline</Badge>
      </Flex>
    </Flex>
  );
}

export default MainPage;
