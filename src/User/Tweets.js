import React from "react"
import TitleItem from "../middleComponents/TitleItem"
import { getRecommendFollowings } from "../dataMock"
import { UserCard } from "../middleComponents/Cards"
export default class Tweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recommendFollowings: []
    }
  }
  componentDidMount() {
    this.setState({recommendFollowings: getRecommendFollowings()})
  }
  render( ) {
    return (
      <div>
        <TitleItem title="推荐关注"/>
        {this.state.recommendFollowings.map(u => 
          <UserCard user={u} key={u.id}/>
        )}
        <TitleItem title="显示更多" color="primary"/>
      </div>
    )
  }
}