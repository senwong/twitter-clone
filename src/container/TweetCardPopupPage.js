import { connect } from 'react-redux';
import TweetCardPopupPage from '../middleComponents/TweetCardPopupPage';
import { toggleTweetCardPop } from '../actions';

const mapStateToProps = state => ({
  user: state.tweetCardUser,
});
const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleTweetCardPop()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetCardPopupPage);
