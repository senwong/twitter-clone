import React from 'react';
import styled from 'styled-components';
import CustomizedButton from '../BaseComponents/CustomizedButton';

const Container = styled.div`
  padding: 9px 0;
  display: flex;
  justify-content: flex-end;
  background-color: rgb(255, 255, 255);
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
