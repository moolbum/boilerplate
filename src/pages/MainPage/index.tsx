import React, { useState } from 'react';
import { TablePlaceholderSvg } from '@/assets/icons';
import {
  Typo,
  Badge,
  Button,
  LucideIcon,
  Dialog,
  RadixIcon,
  LocalIcon,
  Input,
  Switch,
  TextArea,
  Flex,
  Card,
  Grid,
  Callout,
} from '@/components/atoms';
import { AlertDialog, Radio, RadioGroup } from '@/components/molecules';

type DialogState = null | 'DAFAULT' | 'OVERRIDE';

function MainPage() {
  const [dialogState, setDialogState] = useState<DialogState>(null);

  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState<boolean>(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [input, setInput] = useState('');

  // Dialog
  const renderOverriedDialog = () => {
    return (
      <Dialog open={dialogState === 'OVERRIDE'} title="Title" onClose={() => setDialogState('DAFAULT')}>
        <div>모달 중첩</div>
      </Dialog>
    );
  };

  const renderDefaultDialog = () => {
    return (
      <Dialog
        open={dialogState === 'DAFAULT' || dialogState === 'OVERRIDE'}
        title="DEFAULT_TEST"
        onClose={() => {
          console.log('닫힐때 추가 로직 ::');
          setDialogState(null);
        }}
        footer={<div>footer</div>}
      >
        <div>
          <Typo>오픈 이라네</Typo>
          <Button
            size="large"
            color="blue"
            onClick={() => {
              console.log('열릴때 중첩 모달 추가 로직 ::');
              setDialogState('OVERRIDE');
            }}
          >
            모달 오픈
          </Button>
        </div>

        {renderOverriedDialog()}
      </Dialog>
    );
  };

  // Alert Dialog
  const renderAlertDialog = () => {
    return (
      <AlertDialog open={isAlertDialogOpen} title="Hello world" onClose={() => setIsAlertDialogOpen(false)}>
        안녕하세요
        <Flex direction="row" gap={8}>
          <Button
            onClick={() => {
              console.log('confirm ::');
              setIsAlertDialogOpen(false);
            }}
          >
            ✅
          </Button>
          <Button
            onClick={() => {
              setIsAlertDialogOpen(false);
            }}
          >
            ❌
          </Button>
        </Flex>
      </AlertDialog>
    );
  };

  return (
    <>
      <Flex direction="column">
        <Radio label={<div>"test!!"</div>} />
        <Radio label="test!!" value={1} />
        <RadioGroup
          name="radio"
          option={[
            { label: '라벨_1', value: 'label_1' },
            { label: '라벨_2', value: 'label_2' },
            {
              label: (
                <label htmlFor="label_3">
                  <div>라벨_3</div>
                </label>
              ),
              value: 'label_3',
            },
            { label: '라벨_4', value: 'label_4', disabled: true },
          ]}
        />
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          onClear={() => setInput('')}
          prefix="P"
          suffix="S"
          allowClear
        />
        <Input value={input} onChange={e => setInput(e.target.value)} />

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
          <LocalIcon name={TablePlaceholderSvg} size={16} />
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

        <Card>Card</Card>

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
          setDialogState('DAFAULT');
          console.log('열릴때 추가 로직 ::');
        }}
      >
        Dialog Open
      </Button>
      <Button
        color="red"
        onClick={() => {
          setIsAlertDialogOpen(true);
        }}
      >
        Alert Dialog Open
      </Button>
      {renderDefaultDialog()}
      {renderAlertDialog()}
    </>
  );
}

export default MainPage;
