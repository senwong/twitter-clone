import React, { useState, useEffect } from "react";
import { func } from "prop-types";
import { connect } from "react-redux";
import { getTweets } from "../Api";
import TweetCard from "../container/TweetCard";
import { WattingIcon } from "../BaseComponents/SVGIcons";
import PullDownRefresh from "../middleComponents/PullDownRefresh";
import { setup, show } from "../actionCreators/modal";

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

function TweetListRefreshable({ setModal, showModal }) {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const cancelablePromise = getTweets();
    cancelablePromise.promise.then(
      res => setTweets(res.data),
      () => {
        setModal({
          title: "Network error",
          type: "warning",
          onConfirm: null,
          onCancel: null
        });
        showModal();
      }
    );
    return () => {
      cancelablePromise.cancel();
    };
  }, []);
  // const isWide = useMediaQuery('(min-width: 1000px)');
  // todo refresh data
  function handleRefresh() {
    return new Promise(resolve => {
      getTweets().promise.then(
        newTweets => {
          setTweets(newTweets.data);
          resolve();
        },
        () => {}
      );
    });
  }
  return (
    <PullDownRefresh onRefresh={handleRefresh}>
      {tweets && tweets.length > 0 ? (
        tweets.map(tweet => <TweetCard key={tweet.id} tweet={tweet} />)
      ) : (
        <WattingIcon large secondary />
      )}
    </PullDownRefresh>
  );
}
TweetListRefreshable.propTypes = {
  setModal: func.isRequired,
  showModal: func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setModal: modalConfig => dispatch(setup(modalConfig)),
  showModal: () => dispatch(show())
});
export default connect(
  null,
  mapDispatchToProps
)(TweetListRefreshable);
