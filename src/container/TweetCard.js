import { connect } from 'react-redux';
import { TweetCard } from '../middleComponents/Cards';
import actionCreators from 'actionCreators';

const mapDispatchToProps = dispatch => ({
  togglePop: user => dispatch(actionCreators.tweetCardPopup.toggleTweetCardPop(user)),
});
export default connect(
  null,
  mapDispatchToProps,
)(TweetCard);
