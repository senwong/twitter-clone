import { connect } from 'react-redux';
import Explore from '../Explore';
import actionCreators from 'actionCreators';

const mapDispatchToProps = dispatch => ({
  setHistoryNRecPage: show => dispatch(actionCreators.recommendPage.setHistoryNRecPage(show)),
});
export default connect(
  null,
  mapDispatchToProps,
)(Explore);
