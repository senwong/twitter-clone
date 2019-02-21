import React from "react";
import { getTweets } from "../Api";
import CustomHr from "../BaseComponents/CustomHr";
import CurrentUserAvatar from "../container/CurrentUserAvatar"
import TweetCard from "../container/TweetCard";
import NavList from "../middleComponents/NavList";
import CustomHead from "../middleComponents/CustomHead";
import { WattingIcon } from "../BaseComponents/SVGIcons";
import PullDownRefresh from "../middleComponents/PullDownRefresh";
import ScrollToggleHead from "../middleComponents/ScrollToggleHead";
import Text from "../BaseComponents/Text"

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  componentDidMount() {
    getTweets().then(tweets => {
      this.setState({ tweets: tweets });
    }).catch(err => {
      const { toggleModal, setModal, setModalOnConfirm, setModalOnCancel,} = this.props;
      console.log({err})
      setModal({
        title: "Network error",
        type: "warning",
        hasConfirm: false,
        hasCancel: false,
      })
      toggleModal();
    })
  }
  handleRefresh() {
    return new Promise((resolve, reject) => {
      getTweets().then(tweets => {
        this.setState({ tweets: tweets });
        resolve();
      });
    });
  }
  render() {
    return (
      <ScrollToggleHead
        head={
          <React.Fragment>
            <CustomHead
              left={<CurrentUserAvatar xsmall/>}
              middle={<Text large bold>主页</Text>} 
            />
            <NavList />
            <CustomHr />
          </React.Fragment>
        }
        main={
          <PullDownRefresh onRefresh={this.handleRefresh}>
            {this.state.tweets.length > 0 ? (
              this.state.tweets.map(tweet => (
                <TweetCard key={tweet.id} tweet={tweet} />
              ))
            ) : (
              <WattingIcon  large secondary/>
            )}
          </PullDownRefresh>
        }
      />
    );
  }
}
