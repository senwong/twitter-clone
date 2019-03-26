import React from 'react';
import styled from 'styled-components';
import GlobalTrends from '../Explore/GlobalTrends';
import RelatedUsers from './RelatedUsers';

const ListWrapper = styled.div`
  margin-bottom: 10px;
`;
function BodyAside() {
  return (
    <>
      <ListWrapper>
        <RelatedUsers />
      </ListWrapper>
      <ListWrapper>
        <GlobalTrends />
      </ListWrapper>
    </>
  );
}
export default BodyAside;
