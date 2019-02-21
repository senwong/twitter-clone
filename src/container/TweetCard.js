import { connect } from "react-redux";
import { TweetCard } from "../middleComponents/Cards"
import { toggleTweetCardPop } from "../actions";

const mapDispatchToProps = dispatch => ({
  togglePop: user => dispatch(toggleTweetCardPop(user))
})
export default connect(
  null,
  mapDispatchToProps
)(TweetCard);
