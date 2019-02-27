import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RelateIcon } from '../BaseComponents/SVGIcons';
import NavList from '../middleComponents/NavList';
import {
  getEvent, getNewEvents, getRecommendUsers, getPopularArticles,
} from '../dataMock';
import Dot from '../BaseComponents/Dot';
import PrimaryGap from '../BaseComponents/PrimaryGap';
import DateTime from '../BaseComponents/DateTime';
import TweetCard from '../container/TweetCard';
import CustomHead from '../middleComponents/CustomHead';
import InputText from '../BaseComponents/InputText';
import CurrentUserAvatar from '../container/CurrentUserAvatar';
import PullDownRefresh from '../middleComponents/PullDownRefresh';
import ScrollToggleHead from '../middleComponents/ScrollToggleHead';
import { getGlobalTrends } from '../Api';
import Text from '../BaseComponents/Text';

export default function Explore(props) {
  // todo refresh data
  function handleRefresh() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  const { setHistoryNRecPage } = props;
  return (
    <ScrollToggleHead
      head={(
        <React.Fragment>
          <CustomHead
            left={<CurrentUserAvatar xsmall />}
            middle={(
              <InputText
                placeholder="搜索 Twitter"
                onFocus={() => setHistoryNRecPage(true)}
              />
            )}
            right={(
              <Link to="/related">
                <RelateIcon small primary />
              </Link>
            )}
          />
          <NavList />
        </React.Fragment>
      )}
      main={(
        <PullDownRefresh onRefresh={handleRefresh}>
          <ExplorePageBody />
        </PullDownRefresh>
      )}
    />
  );
}

Explore.propTypes = {
  setHistoryNRecPage: PropTypes.func.isRequired,
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
      <GlobalTrends />
      <PrimaryGap />
      <ListHead title="有什么新鲜事" />
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
        <ListHead
          title={recommendUsers && recommendUsers.subject}
          subtitle={recommendUsers && recommendUsers.reason}
        />
      }
      {
        recommendUsers
        && recommendUsers.tweets
        && recommendUsers.tweets.map(t => <TweetCard key={t.id} tweet={t} />)
      }
      <ShowMore />
      <PrimaryGap />
      <ListHead title="流行文章" />
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

function GlobalTrends() {
  const [globalTrends, setGlobalTrends] = useState();
  useEffect(() => {
    const getGlobalTrendsPromise = getGlobalTrends();
    getGlobalTrendsPromise
      .promise
      .then(
        (res) => {
          setGlobalTrends(res.data);
        },
        () => {},
      );
    return () => {
      getGlobalTrendsPromise.cancel();
    };
  }, []);
  return (
    <React.Fragment>
      <ListHead title="全球趋势" />
      {
        globalTrends && globalTrends.map((globalTrend, i) => (
          <ListCard
            key={globalTrend.id}
            head={(
              <div>
                {i + 1}
                <Dot />
                全球趋势
              </div>
            )}
            body={globalTrend.title}
            foot={`${globalTrend.tweetNum} 推文`}
          />
        ))
      }
      <ShowMore href="i/trends" />
    </React.Fragment>
  );
}

const ListHeadContaier = styled.div`
  padding: 9px;
  border-bottom: 1px solid rgb(230, 236, 240);
`;
// explore page head for trending and newEvent
function ListHead({ title, subTitle }) {
  return (
    <ListHeadContaier>
      <div><Text bold large>{title}</Text></div>
      <div><Text secondary small>{subTitle}</Text></div>
    </ListHeadContaier>
  );
}
ListHead.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};
ListHead.defaultProps = {
  subTitle: '',
};

const ShowMoreWrapper = styled(Link)`
  padding: 14px 9px;
  color: rgb(27, 149, 224);
  display: block;
`;
function ShowMore({ href }) {
  return <ShowMoreWrapper to={href}>显示更多</ShowMoreWrapper>;
}
ShowMore.propTypes = {
  href: PropTypes.string,
};
ShowMore.defaultProps = {
  href: '#',
};

const ListCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 9px;
  border-bottom: 1px solid rgb(230, 236, 240);
`;
const ListCardLeft = styled.div`
  flex: 1 1 0;
  margin-right: 9px;
`;
const ListCardHead = styled.div`
  font-size: 12px;
  line-height: 18.375px;
  color: rgb(101, 119, 134);
`;
const ListCardBody = styled.div`
  font-weight: bold;
  color: rgb(20, 23, 26);
  line-height: 1.3125;
  margin: 2px 0;
`;
const ListCardRight = styled.div`
  flex: 0 0 auto;
  width: 15%;
  min-width: 70px;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  position: relative;
`;
const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export function ListCard({
  head, body, foot, right,
}) {
  return (
    <ListCardContainer>
      <ListCardLeft>
        <ListCardHead>
          {head}
        </ListCardHead>
        <ListCardBody>
          {body}
        </ListCardBody>
        <ListCardHead>
          {foot}
        </ListCardHead>
      </ListCardLeft>
      {right
        && (
          <ListCardRight>
            <div style={{ width: '100%', paddingBottom: '100%' }} />
            <ImgWrapper>
              <img src={right} alt="" width="100%" />
            </ImgWrapper>
          </ListCardRight>
        )
      }
    </ListCardContainer>
  );
}
ListCard.propTypes = {
  head: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  foot: PropTypes.node.isRequired,
  right: PropTypes.node,
};
ListCard.defaultProps = {
  right: <></>,
};
