import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 10px;
`;
const Item = styled(Link)`
  margin: 5px 0;
  padding-right: 15px;
  color: rgb(101, 119, 134);
  font-size: 13px;
  font-weight: 400;
`;
function PageFooter() {
  return (
    <Container>
      <Item to="#">条款</Item>
      <Item to="#">隐私政策</Item>
      <Item to="#">Cookie</Item>
      <Item to="#">广告信息</Item>
      <Item to="#">更多</Item>
      <Item to="#">
        &copy;&nbsp;
        {new Date().getFullYear()}
        &nbsp;Twitter, Inc.
      </Item>
    </Container>
  );
}
export default PageFooter;
