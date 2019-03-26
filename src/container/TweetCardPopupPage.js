import { connect } from 'react-redux';
import TweetCardPopupPage from '../middleComponents/TweetCardPopupPage';
import { hide } from '../actionCreators/tweetCardPopup';

const mapStateToProps = state => ({
  user: state.tweetCardPopup.user,
  position: state.tweetCardPopup.position,
});
const mapDispatchToProps = dispatch => ({
  hide: user => dispatch(hide(user)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetCardPopupPage);
