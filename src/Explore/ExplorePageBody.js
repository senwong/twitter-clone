import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  getEvent,
  getNewEvents,
  getRecommendUsers,
  getPopularArticles
} from "../Api";
import Dot from "../BaseComponents/Dot";
import PrimaryGap from "../BaseComponents/PrimaryGap";
import DateTime from "../BaseComponents/DateTime";
import TweetCard from "../container/TweetCard";
import ShowMore from "../BaseComponents/ShowMore";
import GlobalTrends from "./GlobalTrends";
import TitleBar from "../middleComponents/TitleBar";
import ListCard from "./ListCard";
import Text from "../BaseComponents/Text";

// Explore page body styles
const EventContainer = styled.div`
  position: relative;
`;
const EventImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  display: flex;
  align-items: flex-start;
`;
const EventImg = styled.img`
  width: 100%;
`;
const EventContentContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  box-sizing: border-box;
  padding: 9px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;
const EventTitle = styled.div`
  font-size: 21px;
  color: white;
  line-height: 1.3125;
  margin: 2px 0;
`;
const EventSubTitle = styled.div`
  font-size: 12px;
  color: white;
  line-height: 18.375px;
`;
// Explore page body
function ExplorePageBody() {
  const [event, setEvent] = useState();
  const [newEvents, setNewEvents] = useState([]);
  const [recommendUsers, setRecommenders] = useState();
  const [popularArticles, setPopularArticles] = useState();
  useEffect(() => {
    const getEventPromise = getEvent();
    getEventPromise.promise.then(res => setEvent(res.data));
    return () => {
      getEventPromise.cancel();
    };
  }, []);
  useEffect(() => {
    const getNewEventsPromise = getNewEvents();
    getNewEventsPromise.promise.then(res => setNewEvents(res.data));
    return () => {
      getNewEventsPromise.cancel();
    };
  }, []);
  useEffect(() => {
    const getRecommendUsersPromise = getRecommendUsers();
    getRecommendUsersPromise.promise.then(res => setRecommenders(res.data));
    return () => {
      getRecommendUsersPromise.cancel();
    };
  }, []);
  useEffect(() => {
    const getPopularArticlesPromise = getPopularArticles();
    getPopularArticlesPromise.promise.then(res => setPopularArticles(res.data));
    return () => {
      getPopularArticlesPromise.cancel();
    };
  }, []);
  return (
    <React.Fragment>
      <EventContainer>
        <div style={{ paddingBottom: "75%" }} />
        <EventImgWrapper>
          <EventImg src={event && event.coverSrc} alt={event && event.title} />
        </EventImgWrapper>
        <EventContentContainer>
          <EventSubTitle>{event && event.subTitle}</EventSubTitle>
          <EventTitle>{event && event.title}</EventTitle>
          <EventSubTitle>19万人正在发推讨论此问题</EventSubTitle>
        </EventContentContainer>
      </EventContainer>
      <PrimaryGap />
      {
        // 全球趋势 global trends
      }
      <GlobalTrends />

      <PrimaryGap />
      <TitleBar title="有什么新鲜事" />
      {newEvents &&
        newEvents.map(newEvent => (
          <ListCard
            key={newEvent.id}
            head={
              <Text secondary small>
                {newEvent.subject}
                <Dot /> <DateTime dateTimeStr={newEvent.time} />
              </Text>
            }
            body={<Text>{newEvent.title}</Text>}
            foot={
              <Text secondary small>
  {`${newEvent.userNum} 人正在发布推文讨论此话题`}
</Text>
            }
            right={newEvent.coverSrc}
          />
        ))}
      <ShowMore />
      <PrimaryGap />
      {recommendUsers && recommendUsers.subject && (
        <TitleBar
          title={recommendUsers.subject}
          subtitle={recommendUsers.reason}
        />
      )}
      {recommendUsers &&
        recommendUsers.tweets &&
        recommendUsers.tweets.map(t => <TweetCard key={t.id} tweet={t} />)}
      <ShowMore />
      <PrimaryGap />
      <TitleBar title="流行文章" />
      {popularArticles &&
        popularArticles.map(article => (
          <ListCard
            key={article.id}
            head={<Text secondary>{article.website}</Text>}
            body={<Text>{article.title}</Text>}
            foot={<Text secondary>{`${article.author} 就此发推`}</Text>}
            right={article.coverSrc}
          />
        ))}
      <ShowMore />
      <PrimaryGap />
    </React.Fragment>
  );
}
export default ExplorePageBody;
