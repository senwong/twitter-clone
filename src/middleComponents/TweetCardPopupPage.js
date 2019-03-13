import React from 'react';
import PropTypes from 'prop-types';
import PopupPage from './PopupPage';

export default function TweetCardPopupPage({
  user, hide, ...props
}) {
  const items = [
    { title: '嵌入推文' },
    { title: `取消关注@${user && user.name}` },
    { title: `隐藏@${user && user.name}` },
    { title: `屏蔽@${user && user.name}` },
    { title: '举报推文', warning: true },
  ];
  return <PopupPage items={items} hide={hide} {...props} />;
}
TweetCardPopupPage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  hide: PropTypes.func.isRequired,
};
TweetCardPopupPage.defaultProps = {
  user: null,
};
