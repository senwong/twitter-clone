import React, { useState, useEffect } from "react"
import Avatar from "../BaseComponents/Avatar"
import Text from "../BaseComponents/Text"
import { LinkList } from "../middleComponents/NavList"
import { Route} from "react-router-dom"
import CustomizedButton from "../BaseComponents/CustomizedButton"
import { LocationIcon, BirthdayIcon, CalendarIcon, SettingIcon } from "../BaseComponents/SVGIcons"
import BackHeadWithRouter from "../middleComponents/BackHead"
import Tweets from "./Tweets"
import PullDownRefresh from "../middleComponents/PullDownRefresh"
import { getUserByName } from '../Api'
import styled from 'styled-components'

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
export default function User(props) {
  const [user, setUser] = useState({});
  function handleRefresh() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 100)
    })
  }
  useEffect(() => {
    const userName = props.match.params.userName;
    getUserByName(userName)
      .then(user => setUser(user))
      .catch(err => console.log(err))
  }, []);

  const {currentUser, match, toggleUserSettingPopupPage} = props
  const userName = match.params.userName;
  // console.log({ userName });
  return (
    <div>
      <BackHeadWithRouter title={user.name} />
      <PullDownRefresh onRefresh={handleRefresh}>
        <Container>
          <UserAvaterBG />
          <div style={{padding: "9px 9px 0",marginBottom: "14px"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start"}}>
              <UserAvaterWrapper>
                <Avatar large user={user}/>
              </UserAvaterWrapper>
              {
                currentUser.name === userName
                ? <CustomizedButton>编辑个人资料</CustomizedButton>
                : <div style={{display: 'flex'}}>
                    <div style={{border: '1px solid rgb(27, 149, 224)', borderRadius: '9999px', minHeight: "37px", minWidth: "37px", display: "flex", alignItems: 'center', justifyContent: 'center', marginRight: '9px'}}
                      onClick={() => toggleUserSettingPopupPage(true)}
                    >
                      <SettingIcon middle primary />
                    </div>
                    <CustomizedButton>关注</CustomizedButton>
                  </div>
              }
            </div>
            <div style={{margin: "5px 0 9px"}}>
              <Text bold large >{user.name}</Text><br/>
              <Text secondary >@{user.nickName}</Text>
            </div>
            <div style={{marginBottom: "9px"}}>
              <InlineSvgWrapper>
                <LocationIcon xsmall secondary/>
                <Text secondary >{user.location}</Text>
              </InlineSvgWrapper>
              <InlineSvgWrapper>
                <BirthdayIcon xsmall secondary/>
                <Text secondary >出生于 {user.birthday}</Text>
              </InlineSvgWrapper>
              <InlineSvgWrapper>
                <CalendarIcon xsmall secondary/>
                <Text secondary >{user.registerTime} 加入</Text>
              </InlineSvgWrapper>
            </div>
            <div style={{display: "flex"}}>
              <div style={{marginRight: "18px"}}>
                <Text bold >{user.following}</Text>
                <Text secondary >正在关注</Text>
              </div>
              <Text bold >{user.followers}</Text>
              <Text secondary >关注者</Text>
            </div>
    
          </div>
    
          <LinkList links={[
            {to: match.url, title: "推文", exact: true},
            {to: match.url + "/with_replies", title: "推文与回复"},
            {to: match.url + "/media", title: "媒体"},
            {to: match.url + "/likes", title: "喜欢"},
          ]}/>
          <Route path={match.url} exact component={Tweets}/>
          <Route path={match.url + "/with_replies"} component={WithReplies}/>
          <Route path={match.url + "/media"} component={Media}/>
          <Route path={match.url + "/likes"} component={Likes}/>
        </Container>
      </PullDownRefresh>
    </div>
  );
}
function WithReplies() {
  return (
    <Tweets />
  )
}
function Media() {
  return (
    <div style={{margin: "37px 18px", textAlign: "center"}}>
      <div>
        <Text xlarge bold >你还没有发过任何带照片或视频的推文</Text>
      </div>
      <div style={{marginTop: "9px"}}>
        <Text large secondary >当你发送带照片或视频的推文时，它就会出现在这里。</Text>
      </div>
      <CustomizedButton large>发照片或视频推文</CustomizedButton>
    </div>
  )
}
function Likes() {
  return (
    <h1>喜欢</h1>
  )
}