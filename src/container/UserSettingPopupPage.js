import { connect } from "react-redux";
import UserSettingPopupPage from "../User/UserSettingPopupPage";
import { 
  setUserSettingPopupPage, 
  toggleModal, 
  setModal, 
  setModalOnConfirm,
  setModalOnCancel,
} from "../actions"
const mapDispatchToProps = dispatch => ({
  toggle: show => dispatch(setUserSettingPopupPage(show)),
  toggleModal: () => dispatch(toggleModal()),
  setModal: modalConfig => dispatch(setModal(modalConfig)),
  setModalOnConfirm: onConfirm => dispatch(setModalOnConfirm(onConfirm)),
  setModalOnCancel: onCancel => dispatch(setModalOnCancel(onCancel)),
})
export default connect(
  null,
  mapDispatchToProps,
)(UserSettingPopupPage);