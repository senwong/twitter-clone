import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RelateIcon } from '../BaseComponents/SVGIcons';
import NavigationBar from '../middleComponents/NavigationBar';
import {
  getEvent, getNewEvents, getRecommendUsers, getPopularArticles,
} from '../dataMock';
import Dot from '../BaseComponents/Dot';
import PrimaryGap from '../BaseComponents/PrimaryGap';
import DateTime from '../BaseComponents/DateTime';
import TweetCard from '../container/TweetCard';
import HeadBarLayOut from '../middleComponents/HeadBarLayOut';
import InputText from '../BaseComponents/InputText';
import CurrentUserAvatar from '../container/CurrentUserAvatar';
import PullDownRefresh from '../middleComponents/PullDownRefresh';
import StretchableHeader from '../middleComponents/StretchableHeader';
import ShowMore from '../BaseComponents/ShowMore';
import GlobalTrends from './GlobalTrends';
import TitleBar from '../middleComponents/TitleBar';
import ListCard from './ListCard';

export default function Explore({ showHistoryNRecPage }) {
  // todo refresh data
  function handleRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  return (
    <>
      <StretchableHeader>
        <HeadBarLayOut
          left={<CurrentUserAvatar xsmall />}
          middle={(
            <InputText
              placeholder="搜索 Twitter"
              onFocus={() => showHistoryNRecPage()}
            />
          )}
          right={(
            <Link to="/related">
              <RelateIcon small primary />
            </Link>
          )}
        />
        <NavigationBar />
      </StretchableHeader>
      <PullDownRefresh onRefresh={handleRefresh}>
        <ExplorePageBody />
      </PullDownRefresh>
    </>
  );
}

Explore.propTypes = {
  showHistoryNRecPage: PropTypes.func.isRequired,
};

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
  const [newEvents, setNewEvents] = useState();
  const [recommendUsers, setRecommenders] = useState();
  const [popularArticles, setPopularArticles] = useState();
  useEffect(() => {
    setEvent(getEvent());
    return function cleanup() {};
  }, []);
  useEffect(() => {
    setNewEvents(getNewEvents());
    return function cleanup() {};
  }, []);
  useEffect(() => {
    setRecommenders(getRecommendUsers());
    return function cleanup() {};
  }, []);
  useEffect(() => {
    setPopularArticles(getPopularArticles());
    return function cleanup() {};
  }, []);
  return (
    <React.Fragment>
      <EventContainer>
        <div style={{ paddingBottom: '75%' }} />
        <EventImgWrapper>
          <EventImg src={event && event.coverSrc} alt={event && event.title} />
        </EventImgWrapper>
        <EventContentContainer>
          <EventSubTitle>
            {event && event.subTitle}
          </EventSubTitle>
          <EventTitle>
            {event && event.title}
          </EventTitle>
          <EventSubTitle>
            19万人正在发推讨论此问题
          </EventSubTitle>
        </EventContentContainer>
      </EventContainer>
      <PrimaryGap />
      {
        // 全球趋势 global trends
      }
      <GlobalTrends />

      <PrimaryGap />
      <TitleBar title="有什么新鲜事" />
      {newEvents && newEvents.map(newEvent => (
        <ListCard
          key={newEvent.id}
          head={(
            <div>
              {newEvent.subject}
              <Dot />
              {' '}
              <DateTime dateTimeStr={newEvent.time} />
            </div>
          )}
          body={newEvent.title}
          foot={`${newEvent.userNum} 人正在发布推文讨论此话题`}
          right={newEvent.coverSrc}
        />
      ))}
      <ShowMore />
      <PrimaryGap />
      {
        recommendUsers
        && recommendUsers.subject
        && (
          <TitleBar
            title={recommendUsers.subject}
            subtitle={recommendUsers.reason}
          />
        )
      }
      {
        recommendUsers
        && recommendUsers.tweets
        && recommendUsers.tweets.map(t => <TweetCard key={t.id} tweet={t} />)
      }
      <ShowMore />
      <PrimaryGap />
      <TitleBar title="流行文章" />
      { popularArticles
        && popularArticles.map(article => (
          <ListCard
            key={article.id}
            head={article.website}
            body={article.title}
            foot={`${article.author} 就此发推`}
            right={article.coverSrc}
          />
        ))
      }
      <ShowMore />
      <PrimaryGap />
    </React.Fragment>
  );
}
