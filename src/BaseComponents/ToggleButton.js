import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
  height: 20px;
  width: 40px;
  position: relative;
  display: flex;
  align-items: stretch;
`;

const Background = styled(animated.div)`
  height: 70%;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  margin: auto;
`;

const Circle = styled(animated.div)`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px;
  z-index: 0;
`;

// const Input = styled.input`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   display: block;
//   width: 100%;
//   height: 100%;
//   opacity: 0;
//   margin: 0;
// `;

export default function ToggleButton({ checked, onClick }) {
  const bgProps = useSpring({
    background: checked ? 'rgb(113, 201, 248)' : 'rgb(147, 147, 147)',
  });
  const circleProps = useSpring({
    background: checked ? 'rgb(29, 161, 242)' : 'rgb(255, 255, 255)',
    transform: `translate3d(${checked ? 20 : 0}px, 0, 0)`,
  });
  return (
    <Container onClick={onClick}>
      <Background style={bgProps} />
      <Circle style={circleProps} />
    </Container>
  );
}
ToggleButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
