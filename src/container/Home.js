import { connect } from "react-redux";
import Home from "../Home";
import { 
  toggleModal,
  setModal,
  setModalOnConfirm,
  setModalOnCancel,
} from "../actions"

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal()),
  setModal: modalConfig => dispatch(setModal(modalConfig)),
  setModalOnConfirm: onConfirm => dispatch(setModalOnConfirm(onConfirm)),
  setModalOnCancel: onCancel => dispatch(setModalOnCancel(onCancel)),
});
export default connect(
  null,
  mapDispatchToProps
)(Home)