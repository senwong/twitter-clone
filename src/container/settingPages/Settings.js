import { connect } from 'react-redux';
import Settings from '../../Settings';

const mapStateToProps = state => ({
  user: state.currentUser,
});
export default connect(
  mapStateToProps,
)(Settings);
