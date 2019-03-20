import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BodyAside from '../Home/BodyAside';
import StretchableHeader from '../middleComponents/StretchableHeader';
import WideHeader from './WideHeader';

function useMediaQuery(query) {
  const [isWide, setIsWide] = useState(window.matchMedia(query).matches);
  function handleResize() {
    setIsWide(window.matchMedia(query).matches);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return isWide;
}

const Container = styled.div`
  background-color: rgb(230, 236, 240);
`;
const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (min-width: 1000px) {
    margin-top: 10px;
  }
`;
const Main = styled.main`
  max-width: 600px;
  background-color: rgb(255, 255, 255);
`;
const RightAside = styled.aside`
  width: 360px;
  margin: 0 20px;
  align-self: flex-start;
`;
function LayOut({ head, main, rightAside }) {
  const isWide = useMediaQuery('(min-width: 1000px)');
  return (
    <Container>
      {
        isWide
          ? (
            <WideHeader />
          )
          : (
            <StretchableHeader>
              {head}
            </StretchableHeader>
          )
      }
      <BodyContainer>
        <Main>
          {main}
        </Main>
        {
          isWide
          && (
            <RightAside>
              {rightAside}
            </RightAside>
          )
        }
      </BodyContainer>
    </Container>
  );
}
LayOut.propTypes = {
  head: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
  rightAside: PropTypes.node,
};
LayOut.defaultProps = {
  rightAside: <BodyAside />,
};
export default LayOut;
