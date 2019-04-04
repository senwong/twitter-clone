import React, { useState, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ReactRouterPropTypes from 'react-router-prop-types';
import { RelateIcon, BackIcon } from '../BaseComponents/SVGIcons';
import PullDownRefresh from '../middleComponents/PullDownRefresh';
import Layout from '../layout/Layout';
import ExplorePageBody from './ExplorePageBody';
import RelatedUsers from '../layout/RelatedUsers';
import HomePageNarrowHead from '../layout/HomePageNarrowHead';
import SearchBar from '../Search/SearchBar';

const RightAside = styled.div`
  margin-bottom: 10px;
`;
const BackIconWrapper = styled.div`
  height: 39px;
  width: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  transition-property: backgournd-color;
  transition-duration: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

function Explore({ history }) {
  const [showBackArrow, setShowBackArrow] = useState(false);
  const backIconRef = useRef();
  // todo refresh data
  function handleRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  const [stretchable, setStretchable] = useState(true);
  function handleSearchBarShow() {
    setShowBackArrow(true);
    setStretchable(false);
  }
  function handleSearchBarHide() {
    setShowBackArrow(false);
    setStretchable(true);
  }
  return (
    <Layout
      narrowHead={(
        <HomePageNarrowHead
          stretchable={stretchable}
          left={
            showBackArrow
              ? (
                <BackIconWrapper onClick={() => history.goBack()} ref={backIconRef}>
                  <BackIcon small primary />
                </BackIconWrapper>
              )
              : undefined
          }
          middle={(
            <SearchBar
              onShow={handleSearchBarShow}
              onHide={handleSearchBarHide}
              backIconRef={backIconRef}
            />
          )}
          right={(
            <BackIconWrapper as={Link} to="/twitter-clone/related">
              <RelateIcon small primary />
            </BackIconWrapper>
          )}
        />
      )}
      main={(
        <PullDownRefresh onRefresh={handleRefresh}>
          <ExplorePageBody />
        </PullDownRefresh>
      )}
      rightAside={(
        <RightAside>
          <RelatedUsers />
        </RightAside>
      )}
    />
  );
}
Explore.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
export default withRouter(Explore);
