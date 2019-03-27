import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StretchableHeader from '../middleComponents/StretchableHeader';
import WideHeader from '../layout/WideHeader';
import { useMediaQuery } from '../utilitys';
import { lightBlueBackground, whiteBackgroud } from '../themes';

const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 100%;
  flex-direction: column;
  ${lightBlueBackground}
`;
const BodyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  @media (min-width: 1000px) {
    margin: 10px 0;
  }
`;
const Main = styled.main`
  width: 100%;
  max-width: ${props => (props.reverse && props.isWide ? '360px' : '600px')};
  ${whiteBackgroud}
`;
const RightAside = styled.aside`
  width: ${props => (props.reverse ? '600px' : '360px')};
  margin: 0 20px;
  align-self: stretch;
`;
function LayOut({
  head, main, rightAside, reverse,
}) {
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
        <Main reverse={reverse} isWide={isWide}>
          {main}
        </Main>
        {
          isWide
          && (
            <RightAside reverse={reverse}>
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
  reverse: PropTypes.bool,
};
LayOut.defaultProps = {
  rightAside: <></>,
  reverse: false,
};
export default LayOut;
