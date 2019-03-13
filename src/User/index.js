import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import Avatar from '../BaseComponents/Avatar';
import Text from '../BaseComponents/Text';
import { LinkList } from '../middleComponents/NavList';
import CustomizedButton from '../BaseComponents/CustomizedButton';
import {
  LocationIcon, BirthdayIcon, CalendarIcon, SettingIcon,
} from '../BaseComponents/SVGIcons';
import BackHeadWithRouter from '../middleComponents/BackHead';
import Tweets from './Tweets';
import PullDownRefresh from '../middleComponents/PullDownRefresh';
import { getUserByName } from '../Api';

function WithReplies() {
  return (
    <Tweets />
  );
}
function Media() {
  return (
    <div style={{ margin: '37px 18px', textAlign: 'center' }}>
      <div>
        <Text xlarge bold>你还没有发过任何带照片或视频的推文</Text>
      </div>
      <div style={{ marginTop: '9px' }}>
        <Text large secondary>当你发送带照片或视频的推文时，它就会出现在这里。</Text>
      </div>
      <CustomizedButton large>发照片或视频推文</CustomizedButton>
    </div>
  );
}
function Likes() {
  return (
    <h1>喜欢</h1>
  );
}

const Container = styled.div`
  position: relative;
`;
const UserAvaterBG = styled.div`
  padding-bottom: 33.33%;
  background-color: rgb(204, 214, 221);
`;
const UserAvaterWrapper = styled.div`
  padding: 2px;
  background-color: rgb(255, 255, 255);
  border-radius: 9999px;
  margin-top: -47.5px;
  display: inline-block;
  margin-bottom: 9px;
`;
const InlineSvgWrapper = styled.div`
  margin-right: 9px;
  display: inline-block;
`;
const SettingButton = styled.button`
  border: 1px solid rgb(27, 149, 224);
  border-radius: 9999px;
  min-height: 37px;
  min-width: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 9px;
  background-color: white;
`;
export default function User({ match, currentUser, showUserSettingPopupPage }) {
  const [user, setUser] = useState();
  function handleRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 100);
    });
  }
  useEffect(() => {
    const { userName } = match.params;
    getUserByName(userName)
      .then(userData => setUser(userData))
      .catch(() => {});
  }, []);
  const { userName } = match.params;
  // console.log({ userName });
  return (
    <div>
      <BackHeadWithRouter title={user && user.name} />
      <PullDownRefresh onRefresh={handleRefresh}>
        <Container>
          <UserAvaterBG />
          <div style={{ padding: '9px 9px 0', marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <UserAvaterWrapper>
                {
                  user
                  && user.avatarSrc
                  && <Avatar large src={user.avatarSrc} />
                }
              </UserAvaterWrapper>
              {
                currentUser && currentUser.name === userName
                  ? <CustomizedButton>编辑个人资料</CustomizedButton>
                  : (
                    <div style={{ display: 'flex' }}>
                      <SettingButton
                        type="button"
                        onClick={() => showUserSettingPopupPage()}
                      >
                        <SettingIcon middle primary />
                      </SettingButton>
                      <CustomizedButton>关注</CustomizedButton>
                    </div>
                  )
              }
            </div>
            <div style={{ margin: '5px 0 9px' }}>
              <Text bold large>{user && user.name}</Text>
              <br />
              <Text secondary>
                @
                {user && user.nickName}
              </Text>
            </div>
            <div style={{ marginBottom: '9px' }}>
              <InlineSvgWrapper>
                <LocationIcon xsmall secondary />
                <Text secondary>{user && user.location}</Text>
              </InlineSvgWrapper>
              <InlineSvgWrapper>
                <BirthdayIcon xsmall secondary />
                <Text secondary>
                  出生于
                  {user && user.birthday}
                </Text>
              </InlineSvgWrapper>
              <InlineSvgWrapper>
                <CalendarIcon xsmall secondary />
                <Text secondary>
                  {user && user.registerTime}
                   加入
                </Text>
              </InlineSvgWrapper>
            </div>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '18px' }}>
                <Text bold>{user && user.following}</Text>
                <Text secondary>正在关注</Text>
              </div>
              <Text bold>{user && user.followers}</Text>
              <Text secondary>关注者</Text>
            </div>
          </div>

          <LinkList links={[
            { to: match.url, title: '推文', exact: true },
            { to: `${match.url}/with_replies`, title: '推文与回复' },
            { to: `${match.url}/media`, title: '媒体' },
            { to: `${match.url}/likes`, title: '喜欢' },
          ]}
          />
          <Route path={match.url} exact component={Tweets} />
          <Route path={`${match.url}/with_replies`} component={WithReplies} />
          <Route path={`${match.url}/media`} component={Media} />
          <Route path={`${match.url}/likes`} component={Likes} />
        </Container>
      </PullDownRefresh>
    </div>
  );
}
User.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  showUserSettingPopupPage: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
