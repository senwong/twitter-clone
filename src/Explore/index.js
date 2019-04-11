import React from 'react';
import styled from 'styled-components';
import PullDownRefresh from '../middleComponents/PullDownRefresh';
import Layout from '../layout/Layout';
import ExplorePageBody from './ExplorePageBody';
import RelatedUsers from '../layout/RelatedUsers';
import NarrowHead from './NarrowHead';

const RightAside = styled.div`
  margin-bottom: 10px;
`;

function Explore() {
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
      narrowHead={<NarrowHead />}
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
export default Explore;
