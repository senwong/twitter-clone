import React, { useState, useEffect } from 'react';
import { arrayOf, func } from 'prop-types';
import { getTweets } from '../Api';
import TweetCard from '../container/TweetCard';
import { WattingIcon } from '../BaseComponents/SVGIcons';
import PullDownRefresh from '../middleComponents/PullDownRefresh';
import Text from '../BaseComponents/Text';
import HomePageNarrowHead from '../layout/HomePageNarrowHead';
import Layout from '../layout/Layout';
import { tweetType } from '../propTypes';

function TweetList({ tweets }) {
  return (
    tweets && tweets.length > 0
      ? tweets.map(tweet => <TweetCard key={tweet.id} tweet={tweet} />)
      : <WattingIcon large secondary />
  );
}
TweetList.propTypes = {
  tweets: arrayOf(tweetType).isRequired,
};

// const Container = styled.div`
//   background-color: rgb(230, 236, 240);
// `;
// const Body = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   @media (min-width: 1000px) {
//     margin-top: 10px;
//   }
// `;
// const Main = styled.main`
//   max-width: 600px;
//   background-color: rgb(255, 255, 255);
// `;

// function useMediaQuery(query) {
//   const [isWide, setIsWide] = useState(window.matchMedia(query).matches);
//   function handleResize() {
//     setIsWide(window.matchMedia(query).matches);
//   }
//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   });
//   return isWide;
// }
function Home({ setModal, showModal }) {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const cancelablePromise = getTweets();
    cancelablePromise.promise
      .then(
        res => setTweets(res.data),
        () => {
          setModal({
            title: 'Network error',
            type: 'warning',
            onConfirm: null,
            onCancel: null,
          });
          showModal();
        },
      );
    return () => {
      cancelablePromise.cancel();
    };
  }, []);
  // const isWide = useMediaQuery('(min-width: 1000px)');
  // todo refresh data
  function handleRefresh() {
    return new Promise((resolve) => {
      getTweets().promise.then((newTweets) => {
        setTweets(newTweets.data);
        resolve();
      });
    });
  }
  return (
    <Layout
      narrowHead={() => (
        <HomePageNarrowHead middle={<Text large bold>主页</Text>} />
      )}
      main={(
        <PullDownRefresh onRefresh={handleRefresh}>
          <TweetList tweets={tweets} />
        </PullDownRefresh>
      )}
    />
  );
}
Home.propTypes = {
  setModal: func.isRequired,
  showModal: func.isRequired,
};
export default Home;
