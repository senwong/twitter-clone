import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import styled from "styled-components";
import auth from "../auth";
// import { useMediaQuery } from '../utilitys';
// import Text from '../BaseComponents/Text';
import {
  ExploreIcon,
  Person,
  MessageIcon,
  TwitterIcon
} from "../BaseComponents/SVGIcons";
import CustomizedButton from "../BaseComponents/CustomizedButton";
import Footer from "./Footer";

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
`;
const SlogansContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1da1f2;
  @media (max-width: 800px) {
    display: none;
  }
`;
const SlogansContent = styled.div`
  color: #fff;
`;
const SloganWrappr = styled.div`
  margin: 48px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Slogan = styled.div`
  font-size: 18px;
`;
const IconWrapper = styled.span`
  margin-right: 16px;
`;

// login in page right
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const LoginContent = styled.div`
  max-width: 350px;
`;
const LoginHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LoginHeadButton = styled(CustomizedButton)`
  @media (min-width: 1000px) {
    display: none;
  }
`;
const LoginTitle = styled.h1``;
const LoginSubtitle = styled.h2`
  margin-top: 48px;
`;
const LoginButton = styled(CustomizedButton)`
  margin-bottom: 16px;
`;
const LoginFormWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  @media (min-width: 1700px) {
    left: calc(50% - 350px / 2 - 20px);
    width: auto;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const LoginForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const InputWrapper = styled.div`
  margin-right: 12px;
  width: 210px;
`;
const StyledInput = styled.input`
  border: 1px solid #e6ecf0;
  border-radius: 3px;
  padding: 12px;
  transition: background 0.2s linear;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: 0;
    color: #14171a;
    border-color: rgba(0, 132, 180, 0.5);
  }
`;
function Login({ history }) {
  function handleClick() {
    auth.login(() => {
      history.push("/");
    });
  }
  return (
    <Container>
      <Main>
        <SlogansContainer>
          <SlogansContent>
            <SloganWrappr>
              <IconWrapper>
                <ExploreIcon large white />
              </IconWrapper>
              <Slogan>关注你的兴趣所在</Slogan>
            </SloganWrappr>
            <SloganWrappr>
              <IconWrapper>
                <Person large white />
              </IconWrapper>
              <Slogan>听听大家在谈论什么</Slogan>
            </SloganWrappr>
            <SloganWrappr>
              <IconWrapper>
                <MessageIcon large white />
              </IconWrapper>
              <Slogan>加入对话</Slogan>
            </SloganWrappr>
          </SlogansContent>
        </SlogansContainer>
        <LoginContainer>
          <LoginFormWrapper>
            <LoginForm>
              <InputWrapper>
                <StyledInput type="text" placeholder="手机、邮件地址或用户名" />
              </InputWrapper>
              <InputWrapper>
                <StyledInput type="password" placeholder="密码" />
              </InputWrapper>
              <CustomizedButton onClick={() => handleClick()}>
                登录
              </CustomizedButton>
            </LoginForm>
          </LoginFormWrapper>
          <LoginContent>
            <LoginHead>
              <TwitterIcon large />
              <LoginHeadButton onClick={() => handleClick()}>
                登录
              </LoginHeadButton>
            </LoginHead>
            <LoginTitle>看看世界上的新鲜事</LoginTitle>
            <LoginSubtitle>现在就加入Twitter</LoginSubtitle>
            <LoginButton filled>注册</LoginButton>
            <CustomizedButton onClick={() => handleClick()}>
              登录
            </CustomizedButton>
          </LoginContent>
        </LoginContainer>
      </Main>
      <Footer />
    </Container>
  );
}

Login.propTypes = {
  history: ReactRouterPropTypes.history.isRequired
};
export default Login;
