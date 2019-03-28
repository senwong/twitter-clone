import React from 'react';
import Avatar from '../BaseComponents/Avatar';
import MediaCard from './MediaCard';
import UserName from './UserName';
import { userType } from '../propTypes';

/**
 * -----—------------------------------------------------------------------+
 *|          |      |          |                                           |
 *|  avatar  | name | username |                                           |
 *|          |      |          |                                           |
 * -------+----------------------------------------------------------------+
 */
function UserBar({ user }) {
  const left = user && user.avatarSrc && <Avatar user={user} hoverable />;
  const headLeft = <UserName user={user} />;
  const p = { left, headLeft };
  return (
    <MediaCard {...p} />
  );
}
UserBar.propTypes = {
  user: userType.isRequired,
};
export default UserBar;
