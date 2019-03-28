import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DateTime from '../BaseComponents/DateTime';
import Dot from '../BaseComponents/Dot';
import Avatar from '../BaseComponents/Avatar';
import Text from '../BaseComponents/Text';
import { getUserById } from '../Api';
import MediaCard from './MediaCard';
import {
  ReplyIcon, ForewardIcon, LikeIcon, ShareIcon, ArrowDown,
} from '../BaseComponents/SVGIcons';
import UserName from './UserName';

/**
 * -----—-----------------------------------------------------------------+
 *|          | name | username | datetime               popup menu button |
 *|          |------------------------------------------------------------|
 *|  avatar  |                        content                             |
 *|          |------------------------------------------------------------|
 *|          |  reply   |     forward     |       like      |    share    |
 * -------+---------------------------------------------------------------+
 */

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

// component TweetCard, a card to show tweet content and user info
const HeadLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
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
  cursor: pointer;
  border-radius: 9999px;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;
const StyledArrowDown = styled(ArrowDown)`
  ${FakeSvgBtn}:hover ~ & {
    color: rgb(29, 161, 242);
  }
`;
function TweetCard({
  showPopup, setPopupUser, setPopupPosition, tweet,
}) {
  const [user, setUser] = useState(null);

  function handleHeadRightClick({ target }) {
    setPopupUser(user);
    showPopup();
    if (window.matchMedia('(min-width: 1000px)').matches) {
      const { left, top } = target.getBoundingClientRect();
      setPopupPosition({
        left, top, right: null, bottom: null,
      });
    }
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
              && <Avatar user={user} hoverable />
            }
          </Link>
        )
      }
    </React.Fragment>
  );
  const headLeft = (
    <HeadLeftWrapper>
      <UserName user={user} />
      <Dot />
      <Text secondary><DateTime dateTimeStr={tweet.createdTime} /></Text>
    </HeadLeftWrapper>
  );
  const headRight = (
    <SvgBtnContainer>
      <FakeSvgBtn onClick={e => handleHeadRightClick(e)} />
      <StyledArrowDown xsmall secondary />
    </SvgBtnContainer>
  );
  const actions = {
    replayAmount: tweet.replayAmount,
    forewardAmount: tweet.forewardAmount,
    likeAmount: tweet.likeAmount,
  };
  const content = (
    <div>
      <Text>{tweet.content}</Text>
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
  setPopupPosition: PropTypes.func.isRequired,
  tweet: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    createdTime: PropTypes.string.isRequired,
    replayAmount: PropTypes.number.isRequired,
    forewardAmount: PropTypes.number.isRequired,
    likeAmount: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
export default TweetCard;
