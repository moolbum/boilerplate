import React, { useState } from 'react';
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
import TextArea from '@/components/atom/TextArea';
import Callout from '@/components/molecule/Callout';
import Dialog from '@/components/atom/Dialog';

type DialogState = null | 'OPEN_TEST';

function MainPage() {
  const [isDialogOpen, setIsDialogOpen] = useState<DialogState>(null);

  const renderDialog = () => {
    if (isDialogOpen === 'OPEN_TEST') {
      return (
        <Dialog open title="Title" onOpenChange={() => setIsDialogOpen(null)}>
          <div>오픈 이라네</div>
        </Dialog>
      );
    }
  };

  return (
    <>
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
        <Typo>Under Line</Typo>

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

        {/* soft Button */}
        <Flex>
          <Button size="large" color="blue">
            button
          </Button>
          <Button size="large" color="gray">
            button
          </Button>
          <Button size="large" color="green">
            button
          </Button>
          <Button size="large" color="lime">
            button
          </Button>
          <Button size="large" color="mint">
            button
          </Button>
          <Button size="large" color="orange">
            button
          </Button>
          <Button size="large" color="pink">
            button
          </Button>
          <Button size="large" color="purple">
            button
          </Button>
          <Button size="large" color="red">
            button
          </Button>
          <Button size="large" color="sky">
            button
          </Button>
          <Button size="large" color="yellow">
            button
          </Button>
        </Flex>

        {/* solid Button */}
        <Flex>
          <Button variant="solid" size="large" color="blue">
            button
          </Button>
          <Button variant="solid" size="large" color="gray">
            button
          </Button>
          <Button variant="solid" size="large" color="green">
            button
          </Button>
          <Button variant="solid" size="large" color="lime">
            button
          </Button>
          <Button variant="solid" size="large" color="mint">
            button
          </Button>
          <Button variant="solid" size="large" color="orange">
            button
          </Button>
          <Button variant="solid" size="large" color="pink">
            button
          </Button>
          <Button variant="solid" size="large" color="purple">
            button
          </Button>
          <Button variant="solid" size="large" color="red">
            button
          </Button>
          <Button variant="solid" size="large" color="sky">
            button
          </Button>
          <Button variant="solid" size="large" color="yellow">
            button
          </Button>
        </Flex>

        {/* outline Button */}
        <Flex>
          <Button variant="outline" size="large" color="blue">
            button
          </Button>
          <Button variant="outline" size="large" color="gray">
            button
          </Button>
          <Button variant="outline" size="large" color="green">
            button
          </Button>
          <Button variant="outline" size="large" color="lime">
            button
          </Button>
          <Button variant="outline" size="large" color="mint">
            button
          </Button>
          <Button variant="outline" size="large" color="orange">
            button
          </Button>
          <Button variant="outline" size="large" color="pink">
            button
          </Button>
          <Button variant="outline" size="large" color="purple">
            button
          </Button>
          <Button variant="outline" size="large" color="red">
            button
          </Button>
          <Button variant="outline" size="large" color="sky">
            button
          </Button>
          <Button variant="outline" size="large" color="yellow">
            button
          </Button>
        </Flex>

        {/* ghost Button */}
        <Flex>
          <Button variant="ghost" size="large" color="blue">
            button
          </Button>
          <Button variant="ghost" size="large" color="gray">
            button
          </Button>
          <Button variant="ghost" size="large" color="green">
            button
          </Button>
          <Button variant="ghost" size="large" color="lime">
            button
          </Button>
          <Button variant="ghost" size="large" color="mint">
            button
          </Button>
          <Button variant="ghost" size="large" color="orange">
            button
          </Button>
          <Button variant="ghost" size="large" color="pink">
            button
          </Button>
          <Button variant="ghost" size="large" color="purple">
            button
          </Button>
          <Button variant="ghost" size="large" color="red">
            button
          </Button>
          <Button variant="ghost" size="large" color="sky">
            button
          </Button>
          <Button variant="ghost" size="large" color="yellow">
            button
          </Button>
        </Flex>

        <TextArea />
        <div>
          <Callout icon={<Typo>Icon</Typo>}>
            <Typo>test</Typo>
          </Callout>
        </div>

        <Button fullWidth={false} onClick={() => setIsDialogOpen('OPEN_TEST')}>
          Dialog Open
        </Button>
      </Flex>
      {renderDialog()}
    </>
  );
}

export default MainPage;
