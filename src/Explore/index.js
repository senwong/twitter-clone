import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RelateIcon } from '../BaseComponents/SVGIcons';
import NavigationBar from '../middleComponents/NavigationBar';
import HeadBarLayOut from '../middleComponents/HeadBarLayOut';
import InputText from '../BaseComponents/InputText';
import CurrentUserAvatar from '../container/CurrentUserAvatar';
import PullDownRefresh from '../middleComponents/PullDownRefresh';
import LayOut from '../layout/LayOut';
import ExplorePageBody from './ExplorePageBody';
import RelatedUsers from '../layout/RelatedUsers';

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
    <LayOut
      head={(
        <>
          <HeadBarLayOut
            left={<CurrentUserAvatar xsmall />}
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
          <NavigationBar />
        </>
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
