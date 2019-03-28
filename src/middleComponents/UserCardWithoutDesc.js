import React from 'react';
import PropTypes from 'prop-types';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import Avatar from '../BaseComponents/Avatar';
import MediaCard from './MediaCard';
import UserName from './UserName';

/**
 * -----—----+----------+---------------------------------+-----------------+
 *|          |          |                                 |                 |
 *|  avatar  | name     |                                 |  follow button  |
 *|          | username |                                 |                 |
 * ----------+----------+---------------------------------+-----------------+
 */
function UserCardWithoutDesc({ user }) {
  const left = user && user.avatarSrc && <Avatar src={user.avatarSrc} />;
  const headLeft = <UserName user={user} isTwoLine />;
  const headRight = (
    <CustomizedButton small>关注</CustomizedButton>
  );
  const p = { left, headLeft, headRight };
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
UserCardWithoutDesc.propTypes = {
  user: UserType.isRequired,
};
export default UserCardWithoutDesc;
