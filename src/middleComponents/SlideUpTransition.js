import React from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

// transition
const duration = 200;
const defaultStyle = {
  transition: `all ${duration}ms`,
  transform: 'translateY(0)',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 2,
};
const transitionStyles = {
  entering: {
    opacity: 0,
    transform: 'translateY(100px)',
  },
  entered: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  exiting: {
    opacity: 0,
    transform: 'translateY(100px)',
  },
  exited: {
    opacity: 0,
    transform: 'translateY(0px)',
  },
};
export default function SlideUpTransition({ inSlide, children }) {
  return (
    <Transition
      in={inSlide}
      timeout={duration}
      unmountOnExit
    >
      {
        state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          >
            {children}
          </div>
        )
      }
    </Transition>
  );
}
SlideUpTransition.propTypes = {
  inSlide: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
