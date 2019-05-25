import React from "react";
import styled from "styled-components";
import { node } from "prop-types";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 53px;
  padding: 0 9px;
`;
const Left = styled.div`
  margin-right: 18px;
  display: flex;
`;
const Middle = styled.div`
  flex: 1 1 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;
const Right = styled.div`
  margin-left: 18px;
  display: flex;
`;
const HeadBarLayOut = ({ left, middle, right }) => (
  <Container>
    <Left>{left}</Left>
    <Middle>{middle}</Middle>
    <Right>{right}</Right>
  </Container>
);
HeadBarLayOut.propTypes = {
  left: node.isRequired,
  middle: node.isRequired,
  right: node
};
HeadBarLayOut.defaultProps = {
  right: <></>
};
export default HeadBarLayOut;
