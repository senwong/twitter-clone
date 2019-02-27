import { connect } from 'react-redux';
import Modal from '../middleComponents/Modal';
import { toggleModal } from '../actions';

const mapStateToProps = state => ({
  title: state.modalTitle,
  onConfirm: state.modalOnConfirm,
  onCancel: state.modalOnCancel,
  config: state.modalConfig,
});
const mapDispathcToProps = dispatch => ({
  toggle: () => dispatch(toggleModal()),
});
export default connect(
  mapStateToProps,
  mapDispathcToProps,
)(Modal);
