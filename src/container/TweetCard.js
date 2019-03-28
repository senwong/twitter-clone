import { connect } from 'react-redux';
import TweetCard from '../middleComponents/TweetCard';
import { show, setUser, setPosition } from '../actionCreators/tweetCardPopup';

const mapDispatchToProps = dispatch => ({
  showPopup: () => dispatch(show()),
  setPopupUser: user => dispatch(setUser(user)),
  setPopupPosition: position => dispatch(setPosition(position)),
});
export default connect(
  null,
  mapDispatchToProps,
)(TweetCard);
