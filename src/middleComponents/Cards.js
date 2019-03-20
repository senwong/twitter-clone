import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DateTime from '../BaseComponents/DateTime';
import Dot from '../BaseComponents/Dot';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import {
  ReplyIcon, ForewardIcon, LikeIcon, ShareIcon, BigVIcon, PurpleStar, ArrowDown,
} from '../BaseComponents/SVGIcons';
import Avatar from '../BaseComponents/Avatar';
import Text from '../BaseComponents/Text';
import { getUserById } from '../Api';

/*
* actions at tweet card bottom
*/
const ActionsContainer = styled.div`
  margin-top: 9px;
  display: flex;
  color: rgb(101, 119, 134);
`;
const ActionsItem = styled.div`
  flex: 1 1 0;
`;
const ActionsItemShare = styled(ActionsItem)`
  flex: 0 0 0;
`;
function TweetCardActions({ actions }) {
  return (
    <ActionsContainer>
      <ActionsItem>
        <ReplyIcon xxsmall secondary value={actions.replayAmount} />
      </ActionsItem>
      <ActionsItem>
        <ForewardIcon xxsmall secondary value={actions.forewardAmount} />
      </ActionsItem>
      <ActionsItem>
        <LikeIcon xxsmall secondary value={actions.likeAmount} />
      </ActionsItem>
      <ActionsItemShare>
        <ShareIcon xxsmall secondary />
      </ActionsItemShare>
    </ActionsContainer>
  );
}
TweetCardActions.propTypes = {
  actions: PropTypes.shape({
    replayAmount: PropTypes.number.isRequired,
    forewardAmount: PropTypes.number.isRequired,
    likeAmount: PropTypes.number.isRequired,
  }).isRequired,
};


const MediaCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px 9px;
  border-bottom: 1px solid rgb(230, 236, 240);
  background-color: ${props => props.isTouching && 'rgba(230, 236, 240, 0.7)'};
`;
const MediaCardLeft = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
  flex: 1 1 0;
  align-self: flex-start;
`;
const MediaCardRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7 7 0;
  margin: 0 5px;
  align-self: center;
`;
const MediaCardHead = styled.div`
  display: flex;
  flex-direction: row;
`;
const MediaCardHeadLeft = styled.div`
  flex: 1 1 0;
`;
const MediaCardContent = styled.div`
  padding-top: 5px;
`;
export function MediaCard({
  left, headLeft, headRight, content,
}) {
  const [isTouching, setIsTouching] = useState(false);

  function handleTouchStart() {
    setIsTouching(true);
  }
  function handleTouchMove() {
    setIsTouching(false);
  }
  function handleEnd() {
    setIsTouching(false);
  }
  return (
    <MediaCardContainer
      isTouching={isTouching}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      <MediaCardLeft>
        {left}
      </MediaCardLeft>
      <MediaCardRight>
        <MediaCardHead>
          <MediaCardHeadLeft>{headLeft}</MediaCardHeadLeft>
          <div>{headRight}</div>
        </MediaCardHead>
        {
          content && <MediaCardContent>{content}</MediaCardContent>
        }
      </MediaCardRight>
    </MediaCardContainer>
  );
}
MediaCard.propTypes = {
  left: PropTypes.node.isRequired,
  headLeft: PropTypes.node.isRequired,
  headRight: PropTypes.element,
  content: PropTypes.node,
};
MediaCard.defaultProps = {
  headRight: <></>,
  content: <></>,
};

const SvgBtnContainer = styled.div`
  position: relative;
  display: flex;
`;
const FakeSvgBtn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: -6px;
`;
// component TweetCard, a card to show tweet content and user info
export function TweetCard({ showPopup, setPopupUser, tweet }) {
  const [user, setUser] = useState();

  function handleHeadRightClick() {
    setPopupUser(user);
    showPopup();
  }

  useEffect(() => {
    const { userId } = tweet;
    const p = getUserById(userId);
    p.promise.then(res => setUser(res.data), () => {});
    return () => {
      p.cancel();
    };
  }, [tweet.userId]);
  const left = (
    <React.Fragment>
      {
        user
        && user.name
        && (
          <Link to={{ pathname: `/${user.name}` }}>
            {
              user
              && user.avatarSrc
              && <Avatar src={user.avatarSrc} />
            }
          </Link>
        )
      }
    </React.Fragment>
  );
  const headLeft = (
    <div>
      {
        user
        && user.name
        && user.nickName
        && (
          <Link to={`/${user.name}`}>
            <Text bold>{user.nickName}</Text>
          </Link>
        )
      }
      {
        user
        && typeof user.isV !== 'undefined'
        && <BigVIcon xsmall primary />
      }
      {
        user
        && user.name
        && (
          <Link to={`/${user.name}`}>
            <Text secondary>
              @
              {user.name}
            </Text>
          </Link>
        )
      }
      <Dot />
      <DateTime dateTimeStr={tweet.createdTime} />
    </div>
  );
  const headRight = (
    <SvgBtnContainer>
      <FakeSvgBtn onClick={() => handleHeadRightClick()} />
      <ArrowDown xsmall secondary />
    </SvgBtnContainer>
  );
  const actions = {
    replayAmount: tweet.replayAmount,
    forewardAmount: tweet.forewardAmount,
    likeAmount: tweet.likeAmount,
  };
  const content = (
    <div>
      <div>{tweet.content}</div>
      <TweetCardActions actions={actions} />
    </div>
  );
  const p = {
    left, headLeft, headRight, content,
  };
  return (
    <React.Fragment>
      <MediaCard {...p} />
    </React.Fragment>
  );
}
TweetCard.propTypes = {
  showPopup: PropTypes.func.isRequired,
  setPopupUser: PropTypes.func.isRequired,
  tweet: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    createdTime: PropTypes.string.isRequired,
    replayAmount: PropTypes.number.isRequired,
    forewardAmount: PropTypes.number.isRequired,
    likeAmount: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

const UserNickName = styled.div`
  display: flex;
  align-items: center;
`;
function UserName({ user }) {
  return (
    <React.Fragment>
      <UserNickName>
        <Text bold>{user.nickName}</Text>
        {user.isV ? <BigVIcon xsmall primary /> : null}
      </UserNickName>
      <div>
        <Text secondary>
@
          {user.name}
        </Text>
      </div>
    </React.Fragment>
  );
}
const UserType = PropTypes.shape({
  nickName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isV: PropTypes.bool.isRequired,
  desc: PropTypes.string.isRequired,
});
UserName.propTypes = {
  user: UserType.isRequired,
};

export function UserCard({ user }) {
  const left = user && user.avatarSrc && <Avatar src={user.avatarSrc} />;
  const headLeft = (
    <React.Fragment>
      <Text bold>{user.nickName}</Text>
      {user.isV ? <BigVIcon xsmall primary /> : null}
      <br />
      <Text secondary>
@
        {user.name}
      </Text>
    </React.Fragment>
  );
  const headRight = (
    <CustomizedButton small>关注</CustomizedButton>
  );
  const content = (
    <div>
      <div>{user.desc}</div>
    </div>
  );
  const p = {
    left, headLeft, headRight, content,
  };
  return (
    <MediaCard {...p} />
  );
}
UserCard.propTypes = {
  user: UserType.isRequired,
};

export function UserBar({ user }) {
  const left = user && user.avatarSrc && <Avatar src={user.avatarSrc} />;
  const headLeft = <UserName user={user} />;
  const p = { left, headLeft };
  return (
    <MediaCard {...p} />
  );
}
UserBar.propTypes = {
  user: UserType.isRequired,
};

export function UserCardWithoutDesc({ user }) {
  const left = user && user.avatarSrc && <Avatar src={user.avatarSrc} />;
  const headLeft = <UserName user={user} />;
  const headRight = (
    <CustomizedButton small>关注</CustomizedButton>
  );
  const p = { left, headLeft, headRight };
  return (
    <MediaCard {...p} />
  );
}
UserCardWithoutDesc.propTypes = {
  user: UserType.isRequired,
};

const NotifyCardLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
`;
const NotifyCardContent = styled.div`
  margin-top: 9px;
`;
export function NotifyCard({ notification }) {
  const left = (
    <NotifyCardLeft>
      <PurpleStar large />
    </NotifyCardLeft>
  );
  const headLeft = notification.user
    && notification.user.avatarSrc
    && <Avatar src={notification.user.avatarSrc} small />;
  const content = (
    <div>
      <div>
        <Text>来自 </Text>
        <Text bold>{notification.user.name}</Text>
        <Text> 的推文</Text>
      </div>
      <NotifyCardContent>
        <Text secondary>{notification.desc}</Text>
      </NotifyCardContent>
    </div>
  );
  const p = { left, headLeft, content };
  return <MediaCard {...p} />;
}
NotifyCard.propTypes = {
  notification: PropTypes.shape({
    user: UserType.isRequired,
  }).isRequired,
};
