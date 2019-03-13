import { connect } from 'react-redux';
import Home from '../Home';
import { setup } from '../actionCreators/modal';

const mapDispatchToProps = dispatch => ({
  setModal: modalConfig => dispatch(setup(modalConfig)),
});
export default connect(
  null,
  mapDispatchToProps,
)(Home);
