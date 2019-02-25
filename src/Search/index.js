import React, { useEffect, useState, } from "react";
import { NavLink, } from 'react-router-dom'
import CustomHr from "../BaseComponents/CustomHr.js"
import { PrevIcon, NextIcon, RelateIcon, BackIcon } from "../BaseComponents/SVGIcons"
import { searchHot, } from "../dataMock"
import { TweetCard, UserCard, } from "../middleComponents/Cards"
import { Route } from "react-router-dom"
import PrimaryGap from "../BaseComponents/PrimaryGap"
import CustomHead from "../middleComponents/CustomHead"
import InputText from "../BaseComponents/InputText"
import styled from 'styled-components'

export default function Search(props) {
  return (
    <div style={{width: "100%", height: "100%"}}>
      <CustomHead
          left={<BackIcon small primary onClick={() => props.history.goBack()}/>}
          middle={
            <InputText 
              placeholder="搜索 Twitter" 
              onFocus={() => props.setHistoryNRecPage(true)}
              value={props.searchQuery}
              onChange={e => props.setSearchQuery(e.target.value)}
            />
          }
          right={<RelateIcon small primary />}
        />
        <SearchTypesHead query={props.searchQuery} />
        <SearchResutlPage query={props.searchQuery} />
    </div>
  );
}

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
function SearchTypesHead(props) {
  const [moveLeftCount, setMoveLeftCount] = useState(0);
  const [moveRightCount, setMoveRightCount] = useState(0);

  const { query } = props;

  let headMiddle = null;
  let linkEl = null;
  let linksContainer = null;

  function moveLeft() {
    if (moveLeftCount < 1) {
      return;
    }
    const width = Math.floor(headMiddle.clientWidth / linkEl.clientWidth) * linkEl.clientWidth;
    linksContainer.style.transform=`translateX(-${width*(moveLeftCount - 1)}px)`;
    console.log({ width })
    setMoveLeftCount(moveLeftCount - 1);
    setMoveRightCount(moveRightCount + 1);
  }
  function moveRight() {
    if (moveRightCount < 1) {
      return;
    }
    const width = Math.floor(headMiddle.clientWidth / linkEl.clientWidth) * linkEl.clientWidth;
    linksContainer.style.transform=`translateX(-${width*(moveLeftCount + 1)}px)`;
    console.log({ width })
    setMoveLeftCount(moveLeftCount + 1);
    setMoveRightCount(moveRightCount - 1);
  }
  useEffect(() => {
    window.addEventListener('resize', calculateCountMoveRight);
    return () => {
      window.removeEventListener('resize', calculateCountMoveRight);
    }
  });
  function calculateCountMoveRight() {
    console.log('resize', linksContainer);
    console.log('resize', headMiddle);
    if (window.innerWidth >= 400) {
      setMoveRightCount(0);
      setMoveLeftCount(0);
    }
    if (linksContainer && headMiddle ) {
      const x = getComputedStyle(linksContainer);
      console.log({x});
      let count = Math.floor(linksContainer.clientWidth / headMiddle.clientWidth);
      linksContainer.clientWidth % headMiddle.clientWidth === 0 && count--;
      setMoveRightCount(count);
    }
  }
  return (
    <div>
      <NavContainer>
        <NavArrow onClick={moveLeft}>
          <PrevIcon xsmall primary={moveLeftCount > 0} secondary={moveLeftCount <= 0} />
        </NavArrow>
        <NavListWrapper ref={el => headMiddle = el}>
          <SearchTypeList query={query} 
            linkContainer={el => linksContainer = el} 
            linkRef={el => linkEl = el} 
          />
        </NavListWrapper>
        <NavArrow onClick={moveRight}>
          <NextIcon xsmall primary={moveRightCount > 0} secondary={moveRightCount <= 0} />
        </NavArrow>
      </NavContainer>
      {/* <SearchTypeList query={this.props.query}/> */}
    </div>
  );
}

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

function SearchTypeList(props) {
  return (
    <TypeListContainer ref={props.linkContainer}>
      <TypeItem 
        innerRef={props.linkRef}
        to={"/search?q=" + encodeURI(props.query)}
        isActive={(match, location) => location.search.indexOf("type=") < 0}
      >热门</TypeItem>
      <TypeItem 
        to={`/search?q=${props.query}&type=live`}
        isActive={(match, location) => location.search.indexOf("type=live") > -1}
      >最新</TypeItem>
      <TypeItem
        to={`/search?q=${props.query}&type=user`} 
        isActive={(match, location) => location.search.indexOf("type=user") > -1}
      >用户</TypeItem>
      <TypeItem 
        to={`/search?q=${props.query}&type=image`} 
        isActive={(match, location) => location.search.indexOf("type=image") > -1}
      >照片</TypeItem>
      <TypeItem 
        to={`/search?q=${props.query}&type=video`} 
        isActive={(match, location) => location.search.indexOf("type=video") > -1}
      >视频</TypeItem>
      <TypeItem 
        to={`/search?q=${props.query}&type=news`} 
        isActive={(match, location) => location.search.indexOf("type=news") > -1}
      >新闻</TypeItem>
      <TypeItem 
        to={`/search?q=${props.query}&type=periscope`} 
        isActive={(match, location) => location.search.indexOf("type=periscope") > -1}
      >博客</TypeItem>
    </TypeListContainer>
  )
};

function SearchResutlPage(props) {
  return (
    <div>
      <CustomHr />
      <Route path="/search" render={({ location }) => {
        if (location.search.indexOf("type=") < 0) {
          return <HotPage query={props.query}/>
        }
        if (location.search.indexOf("type=live") > -1) {
          return <LivePage query={props.query}/>
        }
        if (location.search.indexOf("type=user") > -1) {
          return <UserPage query={props.query}/>
        }
        if (location.search.indexOf("type=image") > -1) {
          return <ImagePage query={props.query}/>
        }
        if (location.search.indexOf("type=video") > -1) {
          return <VideoPage query={props.query}/>
        }
        if (location.search.indexOf("type=news") > -1) {
          return <NewsPage query={props.query}/>
        }
        if (location.search.indexOf("type=periscope") > -1) {
          return <PeriscopePage query={props.query}/>
        }
        return <div>search route error</div>
      }}/>
    </div>
  )
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

function HotPage(props) {
  const [users, setUsers] = useState([]);
  const [tweets, setTweets] = useState([]);

  const { query } = props;

  useEffect(() => {
    const {users, tweets } = searchHot(query);
    setUsers(users);
    tweets.then(searchResult => {
      setTweets(searchResult);
    });
  }, []);
  return (
    <div>
      {users.length > 0
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
        {tweets.map(t => <TweetCard key={t.id} tweet={t} />)}
      </div>
    </div>
  );
}

function LivePage() {
  return (
    <div>
      <h1>Live</h1>
    </div>
  )
}
function UserPage() {
  return (
    <div>
      <h1>User</h1>
    </div>
  )
}
function ImagePage() {
  return (
    <div>
      <h1>Image</h1>
    </div>
  )
}
function VideoPage() {
  return (
    <div>
      <h1>Video</h1>
    </div>
  )
}
function NewsPage() {
  return (
    <div>
      <h1>News</h1>
    </div>
  )
}
function PeriscopePage() {
  return (
    <div>
      <h1>Periscope</h1>
    </div>
  )
}