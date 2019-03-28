import React from 'react';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import Avatar from '../BaseComponents/Avatar';
import MediaCard from './MediaCard';
import UserName from './UserName';
import { userType } from '../propTypes';

/**
 * -----—----+----------+---------------------------------+-----------------+
 *|          |          |                                 |                 |
 *|  avatar  | name     |                                 |  follow button  |
 *|          | username |                                 |                 |
 * ----------+----------+---------------------------------+-----------------+
 */
function UserCardWithoutDesc({ user }) {
  const left = user && user.avatarSrc && <Avatar user={user} hoverable />;
  const headLeft = <UserName user={user} isTwoLine />;
  const headRight = (
    <CustomizedButton small>关注</CustomizedButton>
  );
  const p = { left, headLeft, headRight };
  return (
    <MediaCard {...p} />
  );
}
UserCardWithoutDesc.propTypes = {
  user: userType.isRequired,
};
export default UserCardWithoutDesc;
