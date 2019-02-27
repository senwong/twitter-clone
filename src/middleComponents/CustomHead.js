import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
const CustomHead = ({ left, middle, right }) => (
  <Container>
    <Left>
      {left}
    </Left>
    <Middle>
      {middle}
    </Middle>
    <Right>
      {right}
    </Right>
  </Container>
);
CustomHead.propTypes = {
  left: PropTypes.node.isRequired,
  middle: PropTypes.node.isRequired,
  right: PropTypes.node,
};
CustomHead.defaultProps = {
  right: <></>,
};
export default CustomHead;
