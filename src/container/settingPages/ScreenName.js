import { connect } from 'react-redux';
import ScreenName from '../../Settings/ScreenName';
import { currentUser } from '../../actionCreators';

const mapStateToProps = state => ({
  globalStateName: state.currentUser && state.currentUser.name,
});
const mapDispathToProps = dispatch => ({
  setGlobalStateName: name => dispatch(currentUser.setScreenName(name)),
});
export default connect(
  mapStateToProps,
  mapDispathToProps,
)(ScreenName);
