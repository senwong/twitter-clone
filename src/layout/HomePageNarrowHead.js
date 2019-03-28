import React from 'react';
import PropTypes from 'prop-types';
import StretchableHeader from '../middleComponents/StretchableHeader';
import HeadBarLayOut from '../middleComponents/HeadBarLayOut';
import NavigationBar from '../middleComponents/NavigationBar';
import CurrentUserAvatar from '../container/CurrentUserAvatar';

function HomePageNarrowHead({ left, middle, right }) {
  return (
    <StretchableHeader>
      <HeadBarLayOut
        left={left}
        middle={middle}
        right={right}
      />
      <NavigationBar />
    </StretchableHeader>
  );
}
HomePageNarrowHead.propTypes = {
  left: PropTypes.node,
  middle: PropTypes.node.isRequired,
  right: PropTypes.node,
};
HomePageNarrowHead.defaultProps = {
  left: <CurrentUserAvatar xsmall />,
  right: null,
};
export default HomePageNarrowHead;
