import React from 'react';
import LocalIcon from '@/components/atom/Icons/LocalIcon';
import LucideIcon from '@/components/atom/Icons/LucideIcon';
import RadixIcon from '@/components/atom/Icons/RadixIcon';
import Typo from '@/components/atom/Typo';
import TableSvg from '@/assets/icons/icon-table-placeholder.svg';
import Flex from '@/components/molecule/Flex';
import Badge from '@/components/atom/Badge';
import SectionCard from '@/components/molecule/Card';
import Grid from '@/components/molecule/Grid';
import Button from '@/components/atom/Button';

function MainPage() {
  return (
    <Flex direction="column">
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
        <Badge color="lime" variant="outline">
          outline
        </Badge>
        <Badge color="lime" variant="solid">
          데일
        </Badge>
      </Flex>

      <SectionCard>SectionCard</SectionCard>

      <Grid>
        <Grid.Col columnSpan={4}>
          <Badge color="lime" variant="solid">
            데일
          </Badge>
        </Grid.Col>
        <Grid.Col>
          <Badge color="lime" variant="solid">
            데일
          </Badge>
        </Grid.Col>
        <Grid.Col>
          <Badge color="lime" variant="solid">
            데일
          </Badge>
        </Grid.Col>
        <Grid.Col>
          <Badge color="lime" variant="solid">
            데일
          </Badge>
        </Grid.Col>
        <Grid.Col>
          <Badge color="lime" variant="solid">
            데일
          </Badge>
        </Grid.Col>
        <Grid.Col>
          <Badge color="lime" variant="solid">
            데일
          </Badge>
        </Grid.Col>
        <Grid.Col>
          <Badge color="lime" variant="solid">
            데일
          </Badge>
        </Grid.Col>
        <Grid.Col>
          <Badge color="lime" variant="solid">
            데일
          </Badge>
        </Grid.Col>
        <Grid.Col>
          <Badge color="lime" variant="solid">
            데일
          </Badge>
        </Grid.Col>
      </Grid>

      {/* Button */}
      <Flex>
        <Button size="large" color="blue" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button size="large" color="gray" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button size="large" color="green" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button size="large" color="lime" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button size="large" color="mint" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button size="large" color="orange" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button size="large" color="pink" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button size="large" color="purple" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button size="large" color="red" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button size="large" color="sky" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button size="large" color="yellow" isLoading onClick={() => console.log('click')}>
          button
        </Button>
      </Flex>

      {/* Button */}
      <Flex>
        <Button variant="solid" size="large" color="blue" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button variant="solid" size="large" color="gray" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button variant="solid" size="large" color="green" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button variant="solid" size="large" color="lime" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button variant="solid" size="large" color="mint" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button variant="solid" size="large" color="orange" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button variant="solid" size="large" color="pink" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button variant="solid" size="large" color="purple" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button variant="solid" size="large" color="red" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button variant="solid" size="large" color="sky" isLoading onClick={() => console.log('click')}>
          button
        </Button>
        <Button variant="solid" size="large" color="yellow" isLoading onClick={() => console.log('click')}>
          button
        </Button>
      </Flex>
    </Flex>
  );
}

export default MainPage;
