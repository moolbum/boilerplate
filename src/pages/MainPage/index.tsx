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
import AlertDialog from '@/components/atom/AlertDialog';
import Switch from '@/components/atom/Switch';

type DialogState = null | 'OPEN_TEST' | 'OVERRIDE_OPEN';
type AlertDialogState = null | 'ALERT_OPEN';

function MainPage() {
  const [dialogState, setDialogState] = useState<DialogState>(null);
  const [alertDialogState, setAlertDialogState] = useState<AlertDialogState>(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  // Dialog
  const renderDialogOverride = () => {
    if (dialogState === 'OVERRIDE_OPEN') {
      return (
        <Dialog open title="Title" onClose={() => setDialogState('OPEN_TEST')}>
          <div>모달 중첩</div>
        </Dialog>
      );
    }

    return null;
  };
  const renderDialog = () => {
    if (dialogState === 'OPEN_TEST' || dialogState === 'OVERRIDE_OPEN') {
      return (
        <Dialog
          open
          title="OPEN_TEST"
          onOpen={() => {
            console.log('열릴때 추가 로직 ::');
          }}
          onClose={() => {
            console.log('닫힐때 추가 로직 ::');
            setDialogState(null);
          }}
        >
          <div>
            오픈 이라네
            <Button size="large" color="blue" onClick={() => setDialogState('OVERRIDE_OPEN')}>
              모달 오픈
            </Button>
          </div>
        </Dialog>
      );
    }

    return null;
  };

  // Alert Dialog
  const renderAlertDialog = () => {
    if (alertDialogState === 'ALERT_OPEN') {
      return (
        <AlertDialog open title="Hello world" onOk={() => {}} onClose={() => setAlertDialogState(null)}>
          안녕하세요
        </AlertDialog>
      );
    }

    return null;
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

        <Switch
          checked={isSwitchOn}
          onChange={checked => {
            setIsSwitchOn(checked);
          }}
        />
        <Switch
          checked={isSwitchOn}
          onChange={checked => {
            setIsSwitchOn(checked);
          }}
          size="medium"
        />
        <Switch
          checked={isSwitchOn}
          onChange={checked => {
            setIsSwitchOn(checked);
          }}
          size="large"
        />

        <Switch
          checked={isSwitchOn}
          onChange={checked => {
            setIsSwitchOn(checked);
          }}
          size="medium"
          disabled={true}
        />

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
          <Button variant="solid" size="large" color="blue" disabled>
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
      </Flex>

      {/* Dialog, Alert Dialog */}
      <Button
        onClick={() => {
          setDialogState('OPEN_TEST');
        }}
      >
        Dialog Open
      </Button>
      <Button
        color="red"
        onClick={() => {
          setAlertDialogState('ALERT_OPEN');
        }}
      >
        Alert Dialog Open
      </Button>
      {renderDialog()}
      {renderDialogOverride()}
      {renderAlertDialog()}
    </>
  );
}

export default MainPage;
