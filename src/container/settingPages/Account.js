import { connect } from "react-redux";
import Account from "../../Settings/Account"

const mapStateToProps = state => ({
  user: state.currentUser,
  language: state.language,
  country: state.country,
})
export default connect(
  mapStateToProps,
)(Account);