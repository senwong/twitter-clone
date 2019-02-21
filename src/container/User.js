import { connect } from "react-redux"
import User from "../User";
import { setUserSettingPopupPage } from "../actions"

const mapStateToProps = state => ({
  currentUser: state.currentUser,
})

const mapDispatchToProps = dispatch => ({
  toggleUserSettingPopupPage: show => dispatch(setUserSettingPopupPage(show)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)