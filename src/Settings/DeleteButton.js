import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  padding: 14px 9px;
  color: rgb(224, 36, 94);
  transition-property: background-color;
  transition-duration: 0.2s;
  cursor: pointer;
  text-align: center;
  background-color: rgb(255, 255, 255);
  &:hover {
    background-color: rgba(224, 36, 94, 0.1);
  }
`;
function DeleteButton({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
DeleteButton.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DeleteButton;
