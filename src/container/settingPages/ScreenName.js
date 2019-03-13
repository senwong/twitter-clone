import { connect } from 'react-redux';
import ScreenName from '../../Settings/ScreenName';
import { setScreenName } from '../../actionCreators/currentUser';

const mapStateToProps = state => ({
  globalStateName: state.currentUser && state.currentUser.name,
});
const mapDispathToProps = dispatch => ({
  setGlobalStateName: name => dispatch(setScreenName(name)),
});
export default connect(
  mapStateToProps,
  mapDispathToProps,
)(ScreenName);
