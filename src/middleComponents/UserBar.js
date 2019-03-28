import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../BaseComponents/Avatar';
import MediaCard from './MediaCard';
import UserName from './UserName';

/**
 * -----—------------------------------------------------------------------+
 *|          |      |          |                                           |
 *|  avatar  | name | username |                                           |
 *|          |      |          |                                           |
 * -------+----------------------------------------------------------------+
 */
function UserBar({ user }) {
  const left = user && user.avatarSrc && <Avatar src={user.avatarSrc} />;
  const headLeft = <UserName user={user} />;
  const p = { left, headLeft };
  return (
    <MediaCard {...p} />
  );
}
const UserType = PropTypes.shape({
  nickName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isV: PropTypes.bool.isRequired,
  desc: PropTypes.string.isRequired,
});
UserBar.propTypes = {
  user: UserType.isRequired,
};
export default UserBar;
