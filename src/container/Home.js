import { connect } from 'react-redux';
import Home from '../Home';
import { setup, show } from '../actionCreators/modal';

const mapDispatchToProps = dispatch => ({
  setModal: modalConfig => dispatch(setup(modalConfig)),
  showModal: () => dispatch(show()),
});
export default connect(
  null,
  mapDispatchToProps,
)(Home);
