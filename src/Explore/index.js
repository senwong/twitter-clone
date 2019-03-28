import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RelateIcon } from '../BaseComponents/SVGIcons';
import InputText from '../BaseComponents/InputText';
import PullDownRefresh from '../middleComponents/PullDownRefresh';
import Layout from '../layout/Layout';
import ExplorePageBody from './ExplorePageBody';
import RelatedUsers from '../layout/RelatedUsers';
import HomePageNarrowHead from '../layout/HomePageNarrowHead';

const RightAside = styled.div`
  margin-bottom: 10px;
`;
export default function Explore({ showHistoryNRecPage }) {
  // todo refresh data
  function handleRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  return (
    <Layout
      narrowHead={() => (
        <HomePageNarrowHead
          middle={(
            <InputText
              placeholder="搜索 Twitter"
              onFocus={() => showHistoryNRecPage()}
            />
          )}
          right={(
            <Link to="/related">
              <RelateIcon small primary />
            </Link>
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
  showHistoryNRecPage: PropTypes.func.isRequired,
};
