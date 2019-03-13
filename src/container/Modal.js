import { connect } from 'react-redux';
import Modal from '../middleComponents/Modal';
import { modal } from '../actionCreators';

const mapStateToProps = state => ({
  type: state.modal.type,
  title: state.modal.title,
  onConfirm: state.modal.onConfirm,
  onCancel: state.modal.onCancel,
});
const mapDispathcToProps = dispatch => ({
  hide: () => dispatch(modal.hide()),
});
export default connect(
  mapStateToProps,
  mapDispathcToProps,
)(Modal);
