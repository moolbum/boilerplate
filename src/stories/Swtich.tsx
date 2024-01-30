import { Switch, SwitchProps, Typo } from '@/components/atoms';
import { useState } from 'react';

const StorybookSwitch = (props: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(props?.checked ?? false);

  return (
    <>
      <Switch checked={isChecked} onChange={() => setIsChecked(prev => !prev)} {...props} />

      <Typo>{String(isChecked)}</Typo>
    </>
  );
};

export default StorybookSwitch;
