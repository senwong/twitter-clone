import React from 'react';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import Avatar from '../BaseComponents/Avatar';
import Text from '../BaseComponents/Text';
import MediaCard from './MediaCard';
import UserName from './UserName';
import { userType } from '../propTypes';

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
  const left = user && user.avatarSrc && <Avatar user={user} hoverable />;
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
UserCard.propTypes = {
  user: userType.isRequired,
};
export default UserCard;
