import { connect } from 'react-redux';
import Home from '../Home';
import actionCreators from 'actionCreators';

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(actionCreators.modal.toggleModal()),
  setModal: modalConfig => dispatch(actionCreators.modal.setModal(modalConfig)),
  setModalOnConfirm: onConfirm => dispatch(actionCreators.modal.setModalOnConfirm(onConfirm)),
  setModalOnCancel: onCancel => dispatch(actionCreators.modal.setModalOnCancel(onCancel)),
});
export default connect(
  null,
  mapDispatchToProps,
)(Home);
