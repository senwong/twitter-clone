import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BodyAside from './BodyAside';
import StretchableHeader from '../middleComponents/StretchableHeader';
import WideHeader from './WideHeader';
import PageFooter from './PageFooter';
import { useMediaQuery } from '../utilitys';
import { lightBlueBackground, whiteBackgroud } from '../themes';

const Container = styled.div`
  ${lightBlueBackground};
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
const BodyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (min-width: 1000px) {
    margin-top: 10px;
  }
`;
const Main = styled.main`
  width: 100%;
  max-width: ${props => (props.reverse ? '360px' : '600px')};
  ${whiteBackgroud}
`;
const RightAside = styled.aside`
  width: ${props => (props.reverse ? '600px' : '360px')};
  margin: 0 20px;
  align-self: flex-start;
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
        <Main reverse={reverse}>
          {main}
        </Main>
        {
          isWide
          && (
            <RightAside reverse={reverse}>
              {rightAside}
              <PageFooter />
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
  rightAside: <BodyAside />,
  reverse: false,
};
export default LayOut;
