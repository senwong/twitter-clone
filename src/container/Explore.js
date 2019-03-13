import { connect } from 'react-redux';
import Explore from '../Explore';
import { show } from '../actionCreators/recommendPage';

const mapDispatchToProps = dispatch => ({
  showHistoryNRecPage: () => dispatch(show()),
});
export default connect(
  null,
  mapDispatchToProps,
)(Explore);
