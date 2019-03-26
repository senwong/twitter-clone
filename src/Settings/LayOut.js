import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import WideHeader from '../layout/WideHeader';
import { useMediaQuery } from '../utilitys';
import SettingPanel from './SettingPanel';

const Container = styled.div`
  background-color: rgb(230, 236, 240);
  min-height: 100%;
  padding-bottom: 59px;
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
  width: 360px;
`;
const RightAside = styled.aside`
  width: 100%;
  max-width: 600px;
  margin: 0 20px;
  align-self: flex-start;
  @media(max-width: 1000px) {
    margin: 0;
  }
`;
const NarrowHead = styled.div`
`;
function LayOut({
  narrowHead, main, rightAside,
}) {
  const isWide = useMediaQuery('(min-width: 1000px)');
  return (
    <Container>
      {
        isWide ? <WideHeader /> : <NarrowHead>{ narrowHead }</NarrowHead>
      }
      <BodyContainer>
        {
          isWide
          && (
            <Main>
              {main}
            </Main>
          )
        }
        <RightAside>
          {rightAside}
        </RightAside>
      </BodyContainer>
    </Container>
  );
}
LayOut.propTypes = {
  narrowHead: PropTypes.node.isRequired,
  main: PropTypes.node,
  rightAside: PropTypes.node.isRequired,
};
LayOut.defaultProps = {
  main: <SettingPanel />,
};
export default LayOut;
