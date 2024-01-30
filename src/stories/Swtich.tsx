import { Switch, SwitchProps } from '@/components/atoms';
import { useState } from 'react';

const StorybookSwitch = (props: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(props?.checked);

  return <Switch checked={isChecked} onChange={() => setIsChecked(prev => !prev)} {...props} />;
};

export default StorybookSwitch;
