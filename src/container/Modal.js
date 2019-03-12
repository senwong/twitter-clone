import { connect } from 'react-redux';
import Modal from '../middleComponents/Modal';
import actionCreators from 'actionCreators';

const mapStateToProps = state => ({
  onConfirm: state.modal.onConfirm,
  onCancel: state.modal.onCancel,
  config: state.modal.config,
});
const mapDispathcToProps = dispatch => ({
  toggle: () => dispatch(actionCreators.modal.toggleModal()),
});
export default connect(
  mapStateToProps,
  mapDispathcToProps,
)(Modal);
