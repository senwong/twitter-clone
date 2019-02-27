import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: 20px;
  width: 40px;
  position: relative;
  display: flex;
  align-items: stretch;
`;

const Background = styled.div`
  height: 70%;
  border-radius: 10px;
  background-color: ${props => (props.checked
    ? 'rgb(113, 201, 248)'
    : 'rgb(147, 147, 147)')
};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  margin: auto;
  transition-duration: 0.1s;
`;

const Circle = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255); 
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px;
  z-index: 0;
  transition-duration: 0.1s;
  left: 0%;
  ${props => props.checked && css`
    background-color: rgb(29, 161, 242);
    left: 100%;
    margin-left: -20px;
  `}
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0;
  margin: 0;
`;

export default function ToggleButton({ checked, onClick }) {
  return (
    <Container>
      <Background checked={checked} />
      <Circle checked={checked} />
      <Input type="checkbox" onClick={onClick} />
    </Container>
  );
}
ToggleButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
