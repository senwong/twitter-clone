import { connect } from "react-redux";
import Modal from "../middleComponents/Modal";
import { hide } from "../actionCreators/modal";

const mapStateToProps = state => ({
  show: state.modal.show,
  type: state.modal.config.type,
  title: state.modal.config.title,
  onConfirm: state.modal.config.onConfirm,
  onCancel: state.modal.config.onCancel
});
const mapDispathcToProps = dispatch => ({
  hide: () => dispatch(hide())
});
export default connect(
  mapStateToProps,
  mapDispathcToProps
)(Modal);
