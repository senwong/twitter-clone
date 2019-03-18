import { connect } from 'react-redux';
import { TweetCard } from '../middleComponents/Cards';
import { show, setUser } from '../actionCreators/tweetCardPopup';

const mapDispatchToProps = dispatch => ({
  showPopup: () => dispatch(show()),
  setPopupUser: user => dispatch(setUser(user)),
});
export default connect(
  null,
  mapDispatchToProps,
)(TweetCard);
