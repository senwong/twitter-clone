import { connect } from 'react-redux';
import TweetCardPopupPage from '../middleComponents/TweetCardPopupPage';
import actionCreators from '../actionCreators';

const mapStateToProps = state => ({
  user: state.tweetCardUser,
});
const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(actionCreators.tweetCardPopup.toggleTweetCardPop()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetCardPopupPage);
