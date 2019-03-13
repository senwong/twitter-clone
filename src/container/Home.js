import { connect } from 'react-redux';
import Home from '../Home';
import { modal } from '../actionCreators';

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(modal.toggleModal()),
  setModal: modalConfig => dispatch(modal.setModal(modalConfig)),
  setModalOnConfirm: onConfirm => dispatch(modal.setModalOnConfirm(onConfirm)),
  setModalOnCancel: onCancel => dispatch(modal.setModalOnCancel(onCancel)),
});
export default connect(
  null,
  mapDispatchToProps,
)(Home);
