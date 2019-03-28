import React from 'react';
import PropTypes from 'prop-types';
import PopupMenu from './PopupMenu';
import { userType, positionType, defaultPosition } from '../propTypes';

export default function TweetCardPopupMenu({
  user, hide, position, ...props
}) {
  const items = [
    { title: '嵌入推文' },
    { title: `取消关注@${user && user.name}` },
    { title: `隐藏@${user && user.name}` },
    { title: `屏蔽@${user && user.name}` },
    { title: '举报推文', warning: true },
  ];
  return <PopupMenu items={items} hide={hide} position={position} {...props} />;
}
TweetCardPopupMenu.propTypes = {
  user: userType,
  hide: PropTypes.func.isRequired,
  position: positionType,
};
TweetCardPopupMenu.defaultProps = {
  user: null,
  position: defaultPosition,
};
