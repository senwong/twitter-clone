import React, { useState, useEffect } from"react"
import { Link } from "react-router-dom"
import DateTime from "../BaseComponents/DateTime"
import Dot from "../BaseComponents/Dot"
import CustomizedButton from "../BaseComponents/CustomizedButton"
import { ReplyIcon, ForewardIcon, LikeIcon, ShareIcon, BigVIcon, PurpleStar, ArrowDown } from "../BaseComponents/SVGIcons"
import Avatar from "../BaseComponents/Avatar"
import Text from "../BaseComponents/Text";
import styled from 'styled-components'
import { getUserById } from "../Api"

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
function TweetCardActions(props) {
  return (
    <ActionsContainer>
      <ActionsItem>
        <ReplyIcon xxsmall secondary value={props.actions.replayAmount}/>
      </ActionsItem>
      <ActionsItem>
        <ForewardIcon xxsmall secondary value={props.actions.forewardAmount}/>
      </ActionsItem>
      <ActionsItem>
        <LikeIcon xxsmall secondary value={props.actions.likeAmount}/>
      </ActionsItem>
      <ActionsItemShare>
        <ShareIcon xxsmall secondary />
      </ActionsItemShare>
    </ActionsContainer>
  )
}


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
export function MediaCard(props) {
  const [isTouching, setIsTouching] = useState(false);

  function handleTouchStart(e) {
    setIsTouching(true);
  }
  function handleTouchMove(e) {
    setIsTouching(false);
  }
  function handleEnd(e) {
    setIsTouching(false);
  }
  const {left, headLeft, headRight, content} = props;
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
  )
}

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
export function TweetCard(props) {
  const [user, setUser] = useState({});
  const {togglePop, tweet} = props;
  useEffect(() => {
    const userId = tweet.userId;
    userId && getUserById(userId).then(user => setUser(user));
  }, []);
  
  const left = <Link to={{pathname: '/' + user.name}}><Avatar user={user}/></Link>;
  const headLeft = (
    <div>
      <Link to={'/' + user.name}>
        <Text bold>{user.nickName}</Text>
      </Link>
      {user.isV ? <BigVIcon xsmall primary/> : null}
      <Link to={'/'+user.name}>
        <Text secondary>@{user.name}</Text>
      </Link>
      <Dot />
      <DateTime dateTime={tweet.createdTime}/>
    </div>
  );
  const headRight = (
    <SvgBtnContainer>
      <FakeSvgBtn onClick={() => togglePop(user)} />
      <ArrowDown xsmall secondary/>
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
      <TweetCardActions actions={actions}/>
    </div>
  );
  const p = {left, headLeft, headRight, content, }
  return (
    <React.Fragment>
      <MediaCard {...p}/>
    </React.Fragment>
  );
}


const UserNickName = styled.div`
  display: flex;
  align-items: center;
`;
function UserName(props) {
  return (
    <React.Fragment>
      <UserNickName>
        <Text bold >{props.user.nickName}</Text>
        {props.user.isV ? <BigVIcon xsmall primary/> : null}
      </UserNickName>
      <div>
        <Text secondary>@{props.user.name}</Text>
      </div>
    </React.Fragment>
  )
}
export function UserCard(props) {
  const left = <Avatar user={props.user} />;
  const headLeft = (
    <React.Fragment>
      <Text bold>{props.user.nickName}</Text>
      {props.user.isV ? <BigVIcon xsmall primary/> : null}
      <br/>
      <Text secondary>@{props.user.name}</Text>
    </React.Fragment>
  );
  const headRight = (
      <CustomizedButton small>关注</CustomizedButton>
  );
  const content = (
    <div>
      <div>{props.user.desc}</div>
    </div>
  );
  const p = {left, headLeft, headRight, content, }
  return (
    <MediaCard {...p}/>
  )
}
export function UserBar(props) {
  const left = <Avatar user={props.user} />;
  const headLeft = <UserName user={props.user}/>;
  const p = {left, headLeft }
  return (
    <MediaCard {...p}/>
  )
}

const NotifyCardLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
`;
const NotifyCardContent = styled.div`
  margin-top: 9px;
`;
export function NotifyCard(props) {
  const left = 
    <NotifyCardLeft>
      <PurpleStar large/>
    </NotifyCardLeft> ;
  const headLeft = <Avatar user={props.notification.user} small />;
  const content = 
    <div>
      <div>
        <Text>来自 </Text>
        <Text bold>{props.notification.user.name}</Text>
        <Text> 的推文</Text>
      </div>
      <NotifyCardContent>
        <Text secondary>{props.notification.desc}</Text>
      </NotifyCardContent>
    </div>;
  const p = {left, headLeft, content, }
  return <MediaCard {...p} />;
}
