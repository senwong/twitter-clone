import { connect } from 'react-redux';
import { TweetCard } from '../middleComponents/Cards';
import { show } from '../actionCreators/tweetCardPopup';

const mapDispatchToProps = dispatch => ({
  showPopup: user => dispatch(show(user)),
});
export default connect(
  null,
  mapDispatchToProps,
)(TweetCard);
