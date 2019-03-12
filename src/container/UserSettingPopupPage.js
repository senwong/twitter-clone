import { connect } from 'react-redux';
import UserSettingPopupPage from '../User/UserSettingPopupPage';
import actionCreators from 'actionCreators';
const { modal, userSettingPopup } = actionCreators;
const mapDispatchToProps = dispatch => ({
  toggle: show => dispatch(userSettingPopup.setUserSettingPopupPage(show)),
  toggleModal: () => dispatch(modal.toggleModal()),
  setModal: modalConfig => dispatch(modal.setModal(modalConfig)),
  setModalOnConfirm: onConfirm => dispatch(modal.setModalOnConfirm(onConfirm)),
  setModalOnCancel: onCancel => dispatch(modal.setModalOnCancel(onCancel)),
});
export default connect(
  null,
  mapDispatchToProps,
)(UserSettingPopupPage);
