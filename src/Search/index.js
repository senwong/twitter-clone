import React, { useEffect, useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import CustomHr from '../BaseComponents/CustomHr';
import {
  PrevIcon, NextIcon, RelateIcon, BackIcon,
} from '../BaseComponents/SVGIcons';
import { searchHot } from '../dataMock';
import { TweetCard, UserCard } from '../middleComponents/Cards';
import PrimaryGap from '../BaseComponents/PrimaryGap';
import CustomHead from '../middleComponents/CustomHead';
import InputText from '../BaseComponents/InputText';

export default function Search({
  history, setHistoryNRecPage, searchQuery, setSearchQuery,
}) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <CustomHead
        left={<BackIcon small primary onClick={() => history.goBack()} />}
        middle={(
          <InputText
            placeholder="搜索 Twitter"
            onFocus={() => setHistoryNRecPage(true)}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
)}
        right={<RelateIcon small primary />}
      />
      <SearchTypesHead query={searchQuery} />
      <SearchResutlPage query={searchQuery} />
    </div>
  );
}
Search.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  setHistoryNRecPage: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

const NavContainer = styled.div`
  display: flex;
`;
const NavArrow = styled.div`
  flex: 0 0 0;
  display: flex;
  align-items: center;
  padding: 0 9px;
  @media (min-width: 400px){
    display: none;
  }
`;
const NavListWrapper = styled.div`
  flex: 1 1 0;
  overflow-y: hidden;
`;

/**
 * search result page, result types navigators
 */
function SearchTypesHead({ query }) {
  const [moveLeftCount, setMoveLeftCount] = useState(0);
  const [moveRightCount, setMoveRightCount] = useState(0);

  let headMiddle = null;
  let linkEl = null;
  let linksContainer = null;

  function moveLeft() {
    if (moveLeftCount < 1) {
      return;
    }
    const width = Math.floor(headMiddle.clientWidth / linkEl.clientWidth) * linkEl.clientWidth;
    linksContainer.style.transform = `translateX(-${width * (moveLeftCount - 1)}px)`;
    setMoveLeftCount(moveLeftCount - 1);
    setMoveRightCount(moveRightCount + 1);
  }
  function moveRight() {
    if (moveRightCount < 1) {
      return;
    }
    const width = Math.floor(headMiddle.clientWidth / linkEl.clientWidth) * linkEl.clientWidth;
    linksContainer.style.transform = `translateX(-${width * (moveLeftCount + 1)}px)`;
    setMoveLeftCount(moveLeftCount + 1);
    setMoveRightCount(moveRightCount - 1);
  }
  function calculateCountMoveRight() {
    if (window.innerWidth >= 400) {
      setMoveRightCount(0);
      setMoveLeftCount(0);
      if (linksContainer) {
        linksContainer.style.transform = 'none';
      }
    }
    if (linksContainer && headMiddle) {
      // const x = getComputedStyle(linksContainer);
      let count = Math.floor(linksContainer.clientWidth / headMiddle.clientWidth);
      if (linksContainer.clientWidth % headMiddle.clientWidth === 0) {
        count -= 1;
      }
      setMoveRightCount(count);
    }
  }
  useEffect(() => {
    window.addEventListener('resize', calculateCountMoveRight);
    return () => {
      window.removeEventListener('resize', calculateCountMoveRight);
    };
  });
  return (
    <div>
      <NavContainer>
        <NavArrow onClick={moveLeft}>
          <PrevIcon xsmall primary={moveLeftCount > 0} secondary={moveLeftCount <= 0} />
        </NavArrow>
        <NavListWrapper ref={(el) => { headMiddle = el; }}>
          <SearchTypeList
            query={query}
            linkContainer={(el) => { linksContainer = el; }}
            linkRef={(el) => { linkEl = el; }}
          />
        </NavListWrapper>
        <NavArrow onClick={moveRight}>
          <NextIcon xsmall primary={moveRightCount > 0} secondary={moveRightCount <= 0} />
        </NavArrow>
      </NavContainer>
    </div>
  );
}
SearchTypesHead.propTypes = {
  query: PropTypes.string.isRequired,
};

const TypeListContainer = styled.div`
  display: flex;
  transition: transform 0.2s;
  width: fit-content;
  @media (min-width: 400px){
    width: 100%;
  }
`;
const TypeItem = styled(NavLink)`
  flex: 1 1 0;
  color: rgb(101, 119, 134);
  text-align: center;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  font-weight: bold;
  padding: 14px;
  word-break: keep-all;
  &.active {
    color: rgb(29, 161, 242);
    border-bottom-color: rgb(29, 161, 242);
  }
`;

function SearchTypeList({ linkContainer, linkRef, query }) {
  return (
    <TypeListContainer ref={linkContainer}>
      <TypeItem
        innerRef={linkRef}
        to={`/search?q=${encodeURI(query)}`}
        isActive={(_, location) => location.search.indexOf('type=') < 0}
      >
热门
      </TypeItem>
      <TypeItem
        to={`/search?q=${query}&type=live`}
        isActive={(_, location) => location.search.indexOf('type=live') > -1}
      >
最新
      </TypeItem>
      <TypeItem
        to={`/search?q=${query}&type=user`}
        isActive={(_, location) => location.search.indexOf('type=user') > -1}
      >
用户
      </TypeItem>
      <TypeItem
        to={`/search?q=${query}&type=image`}
        isActive={(_, location) => location.search.indexOf('type=image') > -1}
      >
照片
      </TypeItem>
      <TypeItem
        to={`/search?q=${query}&type=video`}
        isActive={(_, location) => location.search.indexOf('type=video') > -1}
      >
视频
      </TypeItem>
      <TypeItem
        to={`/search?q=${query}&type=news`}
        isActive={(_, location) => location.search.indexOf('type=news') > -1}
      >
新闻
      </TypeItem>
      <TypeItem
        to={`/search?q=${query}&type=periscope`}
        isActive={(_, location) => location.search.indexOf('type=periscope') > -1}
      >
博客
      </TypeItem>
    </TypeListContainer>
  );
}
SearchTypeList.propTypes = {
  linkContainer: PropTypes.element.isRequired,
  linkRef: PropTypes.element.isRequired,
  query: PropTypes.string.isRequired,
};

function SearchResutlPage({ query }) {
  return (
    <div>
      <CustomHr />
      <Route
        path="/search"
        render={({ location }) => {
          if (location.search.indexOf('type=') < 0) {
            return <HotPage query={query} />;
          }
          if (location.search.indexOf('type=live') > -1) {
            return <LivePage query={query} />;
          }
          if (location.search.indexOf('type=user') > -1) {
            return <UserPage query={query} />;
          }
          if (location.search.indexOf('type=image') > -1) {
            return <ImagePage query={query} />;
          }
          if (location.search.indexOf('type=video') > -1) {
            return <VideoPage query={query} />;
          }
          if (location.search.indexOf('type=news') > -1) {
            return <NewsPage query={query} />;
          }
          if (location.search.indexOf('type=periscope') > -1) {
            return <PeriscopePage query={query} />;
          }
          return <div>search route error</div>;
        }}
      />
    </div>
  );
}
SearchResutlPage.propTypes = {
  query: PropTypes.string.isRequired,
};

const Container = styled.div`
  border-top: 1px solid rgb(230, 236, 240);
  border-bottom: 1px solid rgb(230, 236, 240);
`;
const Title = styled.div`
  padding: 9px;
  font-weight: 700;
  border-bottom: 1px solid rgb(230, 236, 240);
`;
const Check = styled.div`
  padding: 14px 9px;
  color: rgb(29, 161, 242);
  font-weight: 700;
`;

function HotPage({ query }) {
  const [users, setUsers] = useState();
  const [tweets, setTweets] = useState();

  useEffect(() => {
    const { newUsers, tweetsPromise } = searchHot(query);
    setUsers(newUsers);
    tweetsPromise.then((searchResult) => {
      setTweets(searchResult);
    });
  }, []);
  return (
    <div>
      {
        users && users.length > 0
          ? (
            <div>
              <Container>
                <Title>用户</Title>
                {users.map(u => <UserCard key={u.id} user={u} />)}
                <Check>查看全部</Check>
              </Container>
              <PrimaryGap />
            </div>
          )
          : <div />
      }
      <div>
        {tweets && tweets.map(t => <TweetCard key={t.id} tweet={t} />)}
      </div>
    </div>
  );
}
HotPage.propTypes = {
  query: PropTypes.string.isRequired,
};

function LivePage() {
  return (
    <div>
      <h1>Live</h1>
    </div>
  );
}
function UserPage() {
  return (
    <div>
      <h1>User</h1>
    </div>
  );
}
function ImagePage() {
  return (
    <div>
      <h1>Image</h1>
    </div>
  );
}
function VideoPage() {
  return (
    <div>
      <h1>Video</h1>
    </div>
  );
}
function NewsPage() {
  return (
    <div>
      <h1>News</h1>
    </div>
  );
}
function PeriscopePage() {
  return (
    <div>
      <h1>Periscope</h1>
    </div>
  );
}
