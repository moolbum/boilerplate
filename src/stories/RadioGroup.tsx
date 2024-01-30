import { RadioGroup, RadioGroupProps } from '@/components/molecules';
import { useState } from 'react';

const StorybookRadioGroup = (props: RadioGroupProps) => {
  const [radio, setRadio] = useState('10');

  return (
    <>
      <RadioGroup
        {...props}
        value={radio}
        onValueChange={value => {
          setRadio(value);
        }}
      />

      {radio}
    </>
  );
};

export default StorybookRadioGroup;
