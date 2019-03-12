import { connect } from 'react-redux';
import User from '../User';
import actionCreators from '../actionCreators';

const { userSettingPopup } = actionCreators;
const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  toggleUserSettingPopupPage: show => dispatch(userSettingPopup.setUserSettingPopupPage(show)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
