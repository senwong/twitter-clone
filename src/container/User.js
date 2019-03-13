import { connect } from 'react-redux';
import User from '../User';
import { userSettingPopup } from '../actionCreators';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  showUserSettingPopupPage: () => dispatch(userSettingPopup.show()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
