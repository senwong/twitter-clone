import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BodyAside from './BodyAside';
import WideHeader from './WideHeader';
import PageFooter from './PageFooter';
import { useMediaQuery } from '../utilitys';
import { lightBlueBackground, whiteBackground } from '../themes';

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
    margin: ${props => (props.reverse ? '10px' : '10px 0 0')};
  }
`;
const Main = styled.main`
  width: 100%;
  @media (min-width: 1000px) {
    max-width: ${props => (props.reverse ? '360px' : '600px')};
  }
  max-width: 600px;
  ${whiteBackground}
`;
const RightAside = styled.aside`
  width: ${props => (props.reverse ? '600px' : '360px')};
  margin: 0 20px;
  align-self: ${props => (props.reverse ? 'stretch' : 'flex-start')};
`;
function Layout({
  narrowHead, main, rightAside, reverse,
}) {
  const isWide = useMediaQuery('(min-width: 1000px)');
  return (
    <Container>
      {
        isWide ? <WideHeader /> : narrowHead
      }
      <BodyContainer reverse={reverse}>
        <Main reverse={reverse}>
          {main}
        </Main>
        {
          isWide
          && (
            <RightAside reverse={reverse}>
              {rightAside}
              {!reverse && <PageFooter />}
            </RightAside>
          )
        }
      </BodyContainer>
    </Container>
  );
}
Layout.propTypes = {
  narrowHead: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired,
  rightAside: PropTypes.node,
  reverse: PropTypes.bool,
};
Layout.defaultProps = {
  rightAside: <BodyAside />,
  reverse: false,
};
export default Layout;
