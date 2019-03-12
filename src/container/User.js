import { connect } from 'react-redux';
import User from '../User';
import actionCreators from 'actionCreators';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  toggleUserSettingPopupPage: show => dispatch(actionCreators.userSettingPopup.setUserSettingPopupPage(show)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
