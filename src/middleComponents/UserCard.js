import React from 'react';
import PropTypes from 'prop-types';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import Avatar from '../BaseComponents/Avatar';
import Text from '../BaseComponents/Text';
import MediaCard from './MediaCard';
import UserName from './UserName';

/**
 * -----—-----------------------------------------------------------------+
 *|          | name      |                                  follow button |
 *|          | username  |                                                |
 *|  avatar  |------------------------------------------------------------|
 *|          |                        user description                    |
 *|          |                                                            |
 * -------+---------------------------------------------------------------+
 */
function UserCard({ user }) {
  const left = user && user.avatarSrc && <Avatar src={user.avatarSrc} />;
  const headLeft = <UserName user={user} isTwoLine />;
  const headRight = <CustomizedButton small>关注</CustomizedButton>;
  const content = <Text>{user.desc}</Text>;
  const p = {
    left, headLeft, headRight, content,
  };
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
UserCard.propTypes = {
  user: UserType.isRequired,
};
export default UserCard;
