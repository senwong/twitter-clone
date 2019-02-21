import React from "react"
import { NavLink, } from 'react-router-dom'
import CustomHr from "../BaseComponents/CustomHr.js"
import { PrevIcon, NextIcon, RelateIcon, BackIcon } from "../BaseComponents/SVGIcons"
import { searchHot, } from "../dataMock"
import { TweetCard, UserCard, } from "../middleComponents/Cards"
import { Route, } from "react-router-dom"
import PrimaryGap from "../BaseComponents/PrimaryGap"
import CustomHead from "../middleComponents/CustomHead"
import InputText from "../BaseComponents/InputText"
import styled, { css } from 'styled-components'

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
  )
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
class SearchTypesHead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      moveLeftCount: 0, // how many page in left side can scroll
      moveRightCount: 0, // how many page in right side can scroll
    }
    this.moveLeft = this.moveLeft.bind(this)
    this.moveRight = this.moveRight.bind(this)
    this.headContainerRef = React.createRef();
    this.leftBtnRef = React.createRef();
    this.rightBtnRef = React.createRef();
    this.typeItemRef = React.createRef();
  }
  moveLeft() {
    if (this.state.moveLeftCount < 1) {
      return;
    }
    const width = Math.floor(this.headMiddle.clientWidth / this.linkEl.clientWidth) * this.linkEl.clientWidth;
    this.linksContainer.style.transform=`translateX(-${width*(this.state.moveLeftCount - 1)}px)`;
    console.log({ width })
    this.setState({
      moveLeftCount: this.state.moveLeftCount - 1,
      moveRightCount: this.state.moveRightCount + 1,
    })
  }
  moveRight() {
    if (this.state.moveRightCount < 1) {
      return;
    }
    const width = Math.floor(this.headMiddle.clientWidth / this.linkEl.clientWidth) * this.linkEl.clientWidth;
    this.linksContainer.style.transform=`translateX(-${width*(this.state.moveLeftCount + 1)}px)`;
    console.log({ width })
    this.setState({
      moveLeftCount: this.state.moveLeftCount + 1,
      moveRightCount: this.state.moveRightCount - 1,
    })
  }
  componentDidMount() {
    let count = Math.floor(this.linksContainer.clientWidth / this.headMiddle.clientWidth);
    this.linksContainer.clientWidth % this.headMiddle.clientWidth === 0 && count--;
    this.setState({moveRightCount: count});
    console.log({ count })
  }
  render() {
    return (
      <div>
        <NavContainer>
          <NavArrow onClick={this.moveLeft} ref={el => this.leftBtn = el}>
            <PrevIcon xsmall primary={this.state.moveLeftCount > 0} secondary={this.state.moveLeftCount <= 0} />
          </NavArrow>
          <NavListWrapper ref={el => this.headMiddle = el}>
            <SearchTypeList query={this.props.query} 
              linkContainer={el => this.linksContainer = el} 
              linkRef={el => this.linkEl = el} 
            />
          </NavListWrapper>
          <NavArrow onClick={this.moveRight} ref={el => this.rightBtn = el}>
            <NextIcon xsmall primary={this.state.moveRightCount > 0} secondary={this.state.moveRightCount <= 0} />
          </NavArrow>
        </NavContainer>
        {/* <SearchTypeList query={this.props.query}/> */}
      </div>
    )
  }
}

const TypeListContainer = styled.div`
  display: flex;
  transition: transform 0.2s;
  width: 100%;
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
  ${props => props.isActive && css`
    color: rgb(29, 161, 242);
    border-bottom-color: rgb(29, 161, 242);
  `}
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
class HotPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      tweets: []
    }
  }
  componentDidMount() {
    const {users, tweets } = searchHot(this.props.query);
    this.setState({users: users});
    tweets.then(searchResult => {
      this.setState({searchResult: searchResult})
    })
  }
  render() {
    const  {users, tweets} = this.state;
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
    )

  }
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