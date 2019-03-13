import { connect } from 'react-redux';
import { TweetCard } from '../middleComponents/Cards';
import { tweetCardPopup } from '../actionCreators';

const mapDispatchToProps = dispatch => ({
  showPopup: user => dispatch(tweetCardPopup.show(user)),
});
export default connect(
  null,
  mapDispatchToProps,
)(TweetCard);
