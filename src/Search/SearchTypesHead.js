import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { PrevIcon, NextIcon } from '../BaseComponents/SVGIcons';
import SearchTypeList from './SearchTypeList';

const NavContainer = styled.div`
  display: flex;
`;
const NavArrow = styled.div`
  flex: 0 0 0;
  display: flex;
  align-items: center;
  padding: 0 9px;
  @media (min-width: 400px){
    display: none;
  }
`;
const NavigationBarWrapper = styled.div`
  flex: 1 1 0;
  overflow-y: hidden;
`;

function SearchTypesHead({ query }) {
  const [moveLeftCount, setMoveLeftCount] = useState(0);
  const [moveRightCount, setMoveRightCount] = useState(0);

  let headMiddle = null;
  let linkEl = null;
  let linksContainer = null;

  function moveLeft() {
    if (moveLeftCount < 1) {
      return;
    }
    const width = Math.floor(headMiddle.clientWidth / linkEl.clientWidth) * linkEl.clientWidth;
    linksContainer.style.transform = `translateX(-${width * (moveLeftCount - 1)}px)`;
    setMoveLeftCount(moveLeftCount - 1);
    setMoveRightCount(moveRightCount + 1);
  }
  function moveRight() {
    if (moveRightCount < 1) {
      return;
    }
    const width = Math.floor(headMiddle.clientWidth / linkEl.clientWidth) * linkEl.clientWidth;
    linksContainer.style.transform = `translateX(-${width * (moveLeftCount + 1)}px)`;
    setMoveLeftCount(moveLeftCount + 1);
    setMoveRightCount(moveRightCount - 1);
  }
  function calculateCountMoveRight() {
    if (window.innerWidth >= 400) {
      setMoveRightCount(0);
      setMoveLeftCount(0);
      if (linksContainer) {
        linksContainer.style.transform = 'none';
      }
    }
    if (linksContainer && headMiddle) {
      // const x = getComputedStyle(linksContainer);
      let count = Math.floor(linksContainer.clientWidth / headMiddle.clientWidth);
      if (linksContainer.clientWidth % headMiddle.clientWidth === 0) {
        count -= 1;
      }
      setMoveRightCount(count);
    }
  }
  useEffect(() => {
    window.addEventListener('resize', calculateCountMoveRight);
    return () => {
      window.removeEventListener('resize', calculateCountMoveRight);
    };
  });
  return (
    <NavContainer>
      <NavArrow onClick={moveLeft}>
        <PrevIcon xsmall primary={moveLeftCount > 0} secondary={moveLeftCount <= 0} />
      </NavArrow>
      <NavigationBarWrapper ref={(el) => { headMiddle = el; }}>
        <SearchTypeList
          query={query}
          linkContainer={(el) => { linksContainer = el; }}
          linkRef={(el) => { linkEl = el; }}
        />
      </NavigationBarWrapper>
      <NavArrow onClick={moveRight}>
        <NextIcon xsmall primary={moveRightCount > 0} secondary={moveRightCount <= 0} />
      </NavArrow>
    </NavContainer>
  );
}
SearchTypesHead.propTypes = {
  query: PropTypes.string.isRequired,
};
export default SearchTypesHead;
