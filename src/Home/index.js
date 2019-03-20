import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { getTweets } from '../Api';
// import CustomHr from '../BaseComponents/CustomHr';
import CurrentUserAvatar from '../container/CurrentUserAvatar';
import TweetCard from '../container/TweetCard';
import NavigationBar from '../middleComponents/NavigationBar';
import HeadBarLayOut from '../middleComponents/HeadBarLayOut';
import { WattingIcon } from '../BaseComponents/SVGIcons';
import PullDownRefresh from '../middleComponents/PullDownRefresh';
import Text from '../BaseComponents/Text';
// import BodyAside from './BodyAside';

import LayOut from '../layout/LayOut';

function TweetList({ tweets }) {
  return (
    tweets && tweets.length > 0
      ? tweets.map(tweet => <TweetCard key={tweet.id} tweet={tweet} />)
      : <WattingIcon large secondary />
  );
}
TweetList.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    createdTime: PropTypes.string.isRequired,
    replayAmount: PropTypes.number.isRequired,
    forewardAmount: PropTypes.number.isRequired,
    likeAmount: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
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
    <LayOut
      head={(
        <>
          <HeadBarLayOut
            left={<CurrentUserAvatar xsmall />}
            middle={<Text large bold>主页</Text>}
          />
          <NavigationBar />
        </>
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
  setModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};
export default Home;
