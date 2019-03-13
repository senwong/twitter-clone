import { connect } from 'react-redux';
import UserSettingPopupPage from '../User/UserSettingPopupPage';
import { modal, userSettingPopup } from '../actionCreators';

const mapDispatchToProps = dispatch => ({
  hidePopup: () => dispatch(userSettingPopup.hide()),
  setModal: config => dispatch(modal.setup(config)),
  showModal: () => dispatch(modal.show()),
});
export default connect(
  null,
  mapDispatchToProps,
)(UserSettingPopupPage);
