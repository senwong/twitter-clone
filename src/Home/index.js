import React, { useState, useEffect } from "react";
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

function Home(props) {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getTweets().then(tweets => {
      setTweets(tweets);
    }).catch(err => {
      const { toggleModal, setModal, setModalOnConfirm, setModalOnCancel,} = props;
      console.log({err})
      setModal({
        title: "Network error",
        type: "warning",
        hasConfirm: false,
        hasCancel: false,
      });
      toggleModal();
    })
  }, []);

  // todo refresh data
  function handleRefresh() {
    return new Promise((resolve, reject) => {
      getTweets().then(tweets => {
        setTweets(tweets);
        resolve();
      });
    });
  }
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
        <PullDownRefresh onRefresh={handleRefresh}>
          {
            tweets.length > 0 
            ? tweets.map(tweet =>
                <TweetCard key={tweet.id} tweet={tweet} />
              )
           : <WattingIcon  large secondary/>
          }
        </PullDownRefresh>
      }
    />
  );
}
export default Home;
