import React from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { hide } from '../actionCreators/tweetCardPopup';
import PopupMenu from './PopupMenu';
import { userType, positionType, defaultPosition } from '../propTypes';

function TweetCardPopupMenu({
  user, show, hide: hideSelf, position, ...props
}) {
  const items = [
    { title: '嵌入推文' },
    { title: `取消关注@${user && user.name}` },
    { title: `隐藏@${user && user.name}` },
    { title: `屏蔽@${user && user.name}` },
    { title: '举报推文', warning: true },
  ];
  return <PopupMenu items={items} show={show} hide={hideSelf} position={position} {...props} />;
}
TweetCardPopupMenu.propTypes = {
  user: userType,
  hide: func.isRequired,
  show: bool.isRequired,
  position: positionType,
};
TweetCardPopupMenu.defaultProps = {
  user: null,
  position: defaultPosition,
};

const mapStateToProps = state => ({
  user: state.tweetCardPopup.user,
  show: state.tweetCardPopup.show,
  position: state.tweetCardPopup.position,
});
const mapDispatchToProps = dispatch => ({
  hide: user => dispatch(hide(user)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetCardPopupMenu);
