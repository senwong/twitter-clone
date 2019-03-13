import { connect } from 'react-redux';
import TweetCardPopupPage from '../middleComponents/TweetCardPopupPage';
import { tweetCardPopup } from '../actionCreators';

const mapStateToProps = state => ({
  user: state.tweetCardUser,
});
const mapDispatchToProps = dispatch => ({
  hide: user => dispatch(tweetCardPopup.hide(user)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TweetCardPopupPage);
