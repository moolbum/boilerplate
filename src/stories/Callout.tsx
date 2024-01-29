import { Callout, CalloutProps } from '@/components/atoms';
import styled from 'styled-components';

const StorybookCallout = (props: CalloutProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
      <StyledCallout {...props} />
    </div>
  );
};

export default StorybookCallout;

const StyledCallout = styled(Callout)`
  figure {
    margin: 0;
  }
`;
