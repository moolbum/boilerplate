import { Card, CardProps } from '@/components/atoms';

const StorybookCard = (props: CardProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
      <Card {...props} />
    </div>
  );
};

export default StorybookCard;
