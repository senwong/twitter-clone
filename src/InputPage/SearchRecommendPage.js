import React from "react"
import { getSearchRecommend } from "../dataMock"
import { UserBar, } from "../middleComponents/Cards"
import PrimaryGap from "./../BaseComponents/PrimaryGap"
import Text from '../BaseComponents/Text'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 49px;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  background-color: rgb(255, 255, 255);
  z-index: 2;
`;
const TopicItem  = styled.div`
  padding: 14px 9px;
  border-bottom: 1px solid  rgb(230, 236, 240);
`;
const UserLink = styled.div`
  padding: 14px 9px;
  border-bottom: 1px solid  rgb(230, 236, 240);
`;


export default function SearchRecommendPage(props) {
  const {topics, users, userLinked} = getSearchRecommend(props.query);
  return (
    <Container>
      {topics.length > 0
        ?topics.map(t => 
          <TopicItem key={t.id}>
            <Text bold>{t.title}</Text><br/>
            <Text secondary>{t.desc}</Text><br/>
          </TopicItem>
        )
        : <TopicItem>搜索"{props.query}"</TopicItem>
      }
      <PrimaryGap />
      {
        users.length > 0 && users.map(u => <UserBar key={u.id} user={u} />)
      }
      {
        userLinked && <UserLink>前往@{props.query}</UserLink>
      }
    </Container>
  )
}