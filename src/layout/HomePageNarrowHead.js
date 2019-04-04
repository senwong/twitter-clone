import React from 'react';
import { node, bool } from 'prop-types';
import StretchableHeader from '../middleComponents/StretchableHeader';
import HeadBarLayOut from '../middleComponents/HeadBarLayOut';
import NavigationBar from '../middleComponents/NavigationBar';
import CurrentUserAvatar from '../container/CurrentUserAvatar';

function HomePageNarrowHead({
  left, middle, right, stretchable,
}) {
  return (
    <StretchableHeader stretchable={stretchable}>
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
  left: node,
  middle: node.isRequired,
  right: node,
  stretchable: bool,
};
HomePageNarrowHead.defaultProps = {
  left: <CurrentUserAvatar middle />,
  right: null,
  stretchable: true,
};
export default HomePageNarrowHead;
