import React from "react";
import styled from "styled-components";
import NavigationBar from "../middleComponents/NavigationBar";
import UserNameBar from "./UserNameBar";
import { whiteBackground } from "../themes";
import SearchBar from "../Search/SearchBar";

const FakeHeader = styled.div`
  height: 54px;
`;
const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  ${whiteBackground}
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
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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
            <SearchBar />
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
