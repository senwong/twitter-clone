import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FakeHeader = styled.div`
  height: 98px;
`;
const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  transition-property: transform;
  transition-duration: 0.2s;
  z-index: 2;
  transform: ${props => props.isShort && 'translateY(-49px)'};
`;
export default function ScrollToggleHead({ head, main }) {
  const [lastWindowScrollTop, setLastWindowScrollTop] = useState(null);
  const [isHeadShort, setIsHeadShort] = useState(false);

  function handleWindowScroll(e) {
    if (lastWindowScrollTop) {
      setIsHeadShort(e.target.scrollingElement.scrollTop > lastWindowScrollTop);
    }
    setLastWindowScrollTop(e.target.scrollingElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  });
  return (
    <div>
      <FakeHeader />
      <Header isShort={isHeadShort}>
        {head}
      </Header>
      <div>
        {main}
      </div>
    </div>
  );
}
ScrollToggleHead.propTypes = {
  head: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
};
