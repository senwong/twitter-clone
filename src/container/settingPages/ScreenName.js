import { connect } from "react-redux";
import ScreenName from "../../Settings/ScreenName"
import { setScreenName } from "../../actions"

const mapStateToProps = state => ({
  name: state.currentUser && state.currentUser.name,
})
const mapDispathToProps = dispatch => ({
  setName: name => dispatch(setScreenName(name))
})
export default connect(
  mapStateToProps,
  mapDispathToProps,
)(ScreenName);