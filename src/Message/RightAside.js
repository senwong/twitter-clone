import React from 'react';
import styled from 'styled-components';
import Text from '../BaseComponents/Text';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import { whiteBackgroud } from '../themes';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${whiteBackgroud}
`;

function RightAside() {
  return (
    <Container>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '10px' }}>
          <Text xlarge bold>你还没有选择一条私信</Text>
        </div>
        <Text secondary>从你的已有私信中选择一条，或者写一条新私信。</Text>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '18px' }}>
          <CustomizedButton filled>新私信</CustomizedButton>
        </div>
      </div>
    </Container>
  );
}
export default RightAside;
