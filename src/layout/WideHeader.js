import React from 'react';
import styled from 'styled-components';
import NavigationBar from '../middleComponents/NavigationBar';
import InputText from '../BaseComponents/InputText';
import UserNameBar from './UserNameBar';

const FakeHeader = styled.div`
  height: 53px;
`;
const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 53px;
  background-color: rgb(255, 255, 255);
  z-index: 2;
`;
const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  cursor: pointer;
`;
const NavigationWrapper = styled.div`
  min-width: 360px;
  margin-right: 20px;
`;
const InputWrapper = styled.div`
  margin: 8.5px 0;
  flex-grow: 1;
`;
const UserNameWrapper = styled.div`
  margin-left: 20px;
`;
function WideHeader() {
  return (
    <header>
      <FakeHeader />
      <Content>
        <ContentWrapper>

          <NavigationWrapper>
            <NavigationBar />
          </NavigationWrapper>

          <InputWrapper>
            <InputText placeholder="搜索twitter" />
          </InputWrapper>

          <UserNameWrapper>
            <UserNameBar />
          </UserNameWrapper>
        </ContentWrapper>
      </Content>
    </header>
  );
}
export default WideHeader;
