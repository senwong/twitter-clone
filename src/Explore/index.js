import React from "react"
import { Link, } from "react-router-dom"
import { RelateIcon, } from "../BaseComponents/SVGIcons"
import NavList from "../middleComponents/NavList"
import { getEvent, getGlobalTrends, getNewEvents, getRecommendUsers, getPopularArticles, } from "../dataMock"
import Dot from "../BaseComponents/Dot";
import PrimaryGap from "../BaseComponents/PrimaryGap";
import DateTime from "../BaseComponents/DateTime";
import { TweetCard } from "../middleComponents/Cards";
import CustomHead from "../middleComponents/CustomHead"
import InputText from "../BaseComponents/InputText"
import CurrentUserAvatar from "../container/CurrentUserAvatar"
import PullDownRefresh from "../middleComponents/PullDownRefresh";
import ScrollToggleHead from "../middleComponents/ScrollToggleHead";
import styled from 'styled-components'

export default class Explore extends React.Component {
  constructor(props) {
    super(props)
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleRefresh() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000)
    })
  }
  render() {
    return (
      <ScrollToggleHead 
        head={
          <React.Fragment>
            <CustomHead
              left={<CurrentUserAvatar xsmall /> }
              middle={
                <InputText 
                  placeholder="搜索 Twitter" 
                  onFocus={() => this.props.setHistoryNRecPage(true)}
                />
              }
              right={
                <Link to="/related">
                  <RelateIcon small primary />
                </Link>
              }
            />
            <NavList />
          </React.Fragment>
        }
        main={
          <PullDownRefresh onRefresh={this.handleRefresh}>
            <ExplorePage />
          </PullDownRefresh>
        }
      />
    )
  }
}

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

class ExplorePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: {},
      globalTrends: [],
      newEvents: [],
      recommendUsers: {},
      popularArticles: []
    }
  }
  componentDidMount() {
    this.setState({
      event: getEvent(),
      globalTrends: getGlobalTrends(),
      newEvents: getNewEvents(),
      recommendUsers: getRecommendUsers(),
      popularArticles: getPopularArticles(),
    })
  }
  render() {
    return (
      <React.Fragment>
        <EventContainer>
          <div style={{paddingBottom: "75%"}}></div>
          <EventImgWrapper>
            <EventImg src={this.state.event.coverSrc} alt={this.state.event.title}/>
          </EventImgWrapper>
          <EventContentContainer>
            <EventSubTitle>
              {this.state.event.subTitle}
            </EventSubTitle>
            <EventTitle>
              {this.state.event.title}
            </EventTitle>
            <EventSubTitle>
              19万人正在发推讨论此问题
            </EventSubTitle>
          </EventContentContainer>
        </EventContainer>
        <PrimaryGap />
        <ListHead title={"全球趋势"} />
        {this.state.globalTrends.map( (globalTrend, i) =>
          <ListCard 
            key={globalTrend.id}
            head={<div>{i + 1}<Dot />全球趋势</div>}
            body={globalTrend.title}
            foot={globalTrend.tweetNum + " 推文"}
          />          
        )}
        <ShowMore />
        <PrimaryGap />
        <ListHead title={"有什么新鲜事"} />
        {this.state.newEvents.map( (newEvent) =>
          <ListCard 
            key={newEvent.id}
            head={
              <div>
                {newEvent.subject}<Dot /> <DateTime dateTime={newEvent.time}/>
              </div>
            }
            body={newEvent.title}
            foot={newEvent.userNum + " 人正在发布推文讨论此话题"}
            right={newEvent.coverSrc}
          />
        )}
        <ShowMore />
        <PrimaryGap />
        <ListHead title={this.state.recommendUsers.subject} subtitle={this.state.recommendUsers.reason}/>
        {
          this.state.recommendUsers.tweets && this.state.recommendUsers.tweets.map(t =>  <TweetCard key={t.id} tweet={t}/> )
        }
        <ShowMore />
        <PrimaryGap />
        <ListHead title={"流行文章"} />
        {
          this.state.popularArticles.map(article =>
            <ListCard 
              key={article.id}
              head={article.website}
              body={article.title}
              foot={article.author + " 就此发推"}
              right={article.coverSrc}
            />
          )
        }
        <ShowMore />
        <PrimaryGap />
      </React.Fragment>
    )
  }
}

const ListHeadContaier = styled.div`
  padding: 9px;
  border-bottom: 1px solid rgb(230, 236, 240);
`;
const ListHeadTitle = styled.div`
  margin: 0;
`;
const ListHeadSubTitle = styled.div`
  font-size: 12px;
  line-height: 1.3125;
  color: rgb(101, 119, 134);
`;
function ListHead(props) {
  return (
    <ListHeadContaier>
      <ListHeadTitle>{props.title}</ListHeadTitle>
      <ListHeadSubTitle>{props.subtitle}</ListHeadSubTitle>
    </ListHeadContaier>
  )
}
function ShowMore(props) {
  return (
    <div style={{padding: "14px 9px", color: "rgb(27, 149, 224)"}}>
      显示更多
    </div>
  )
}

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
function ListCard(props) {
  return (
    <ListCardContainer>
      <ListCardLeft>
        <ListCardHead>
          {props.head}
        </ListCardHead>
        <ListCardBody >
          {props.body}
        </ListCardBody>
        <ListCardHead >
          {props.foot}
        </ListCardHead>
      </ListCardLeft>
      {props.right 
        && (
          <ListCardRight >
            <div style={{width: "100%", paddingBottom: "100%"}}></div>
            <ImgWrapper>
              <img src={props.right} alt="" width="100%"/>
            </ImgWrapper>
          </ListCardRight>
        )
      }
    </ListCardContainer>
  )
}
