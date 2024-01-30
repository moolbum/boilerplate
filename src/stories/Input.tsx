import { Input, InputProps } from '@/components/atoms';
import { useState } from 'react';

const StoryBookInput = (props: InputProps) => {
  const [value, setValue] = useState('');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        onClear={() => {
          props?.allowClear && setValue('');
        }}
        {...props}
      />
    </div>
  );
};

export default StoryBookInput;
