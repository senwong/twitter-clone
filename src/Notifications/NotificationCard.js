import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MediaCard from '../middleComponents/MediaCard';
import Avatar from '../BaseComponents/Avatar';
import { PurpleStar } from '../BaseComponents/SVGIcons';
import Text from '../BaseComponents/Text';

const NotifyCardLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
`;
const NotifyCardContent = styled.div`
  margin-top: 9px;
`;
function NotificationCard({ notification }) {
  const left = (
    <NotifyCardLeft>
      <PurpleStar large />
    </NotifyCardLeft>
  );
  const headLeft = notification.user
    && notification.user.avatarSrc
    && <Avatar user={notification.user} hoverable small />;
  const content = (
    <>
      <div>
        <Text>来自 </Text>
        <Text bold>{notification.user.name}</Text>
        <Text> 的推文</Text>
      </div>
      <NotifyCardContent>
        <Text secondary>{notification.desc}</Text>
      </NotifyCardContent>
    </>
  );
  const p = { left, headLeft, content };
  return <MediaCard {...p} />;
}
const UserType = PropTypes.shape({
  nickName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isV: PropTypes.bool.isRequired,
  desc: PropTypes.string.isRequired,
});
NotificationCard.propTypes = {
  notification: PropTypes.shape({
    user: UserType.isRequired,
  }).isRequired,
};
export default NotificationCard;
