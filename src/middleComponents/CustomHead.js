import React from "react"
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 49px;
  padding: 0 9px;
`;
const Left = styled.div`
  margin-right: 18px;
  display: flex;
`;
const Middle = styled.div`
  flex: 1 1 0;
`;
const Right = styled.div`
  margin-left: 18px;
  display: flex;
`;
const CustomHead = (props) => {
  return (
    <Container>
      <Left>
        {props.left}
      </Left>
      <Middle>
        {props.middle}
      </Middle>
      <Right>
        {props.right}
      </Right>
    </Container>
  )
}
export default CustomHead;