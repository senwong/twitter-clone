import { connect } from "react-redux";
import Avatar from "../BaseComponents/Avatar"
import { toggleProfilePage } from "../actions";

const mapStateToProps = state => ({
  user: state.currentUser,
})
const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(toggleProfilePage())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
