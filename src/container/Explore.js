import { connect } from 'react-redux';
import Explore from '../Explore';
import { recommendPage } from '../actionCreators';

const mapDispatchToProps = dispatch => ({
  setHistoryNRecPage: show => dispatch(recommendPage.setHistoryNRecPage(show)),
});
export default connect(
  null,
  mapDispatchToProps,
)(Explore);
