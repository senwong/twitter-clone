import React from 'react';
import styled from 'styled-components';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import { whiteBackgroud } from '../themes';

const Container = styled.div`
  padding: 9px 9px 9px 0;
  display: flex;
  justify-content: flex-end;
  ${whiteBackgroud}
`;
function SaveButton() {
  return (
    <Container>
      <CustomizedButton filled>
        保存
      </CustomizedButton>
    </Container>
  );
}
export default SaveButton;
