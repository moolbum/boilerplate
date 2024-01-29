import { Button, ButtonProps } from '@/components/atoms';

const StorybookButton = (props: ButtonProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
      <Button {...props} />
    </div>
  );
};

export default StorybookButton;
