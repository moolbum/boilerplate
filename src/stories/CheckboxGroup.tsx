import { CheckboxGroup, CheckboxGroupProps } from '@/components/molecules';
import { useState } from 'react';

const StorybookCheckboxGroup = (props: CheckboxGroupProps) => {
  const [checkbox, setRadio] = useState(['checkbox_1']);

  return (
    <>
      <CheckboxGroup value={checkbox} onChange={e => setRadio(e)} {...props} />

      {checkbox.join(', ')}
    </>
  );
};

export default StorybookCheckboxGroup;
