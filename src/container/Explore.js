import { connect } from 'react-redux';
import Explore from '../Explore';
import {
  setHistoryNRecPage,
} from '../actions';

const mapDispatchToProps = dispatch => ({
  setHistoryNRecPage: show => dispatch(setHistoryNRecPage(show)),
});
export default connect(
  null,
  mapDispatchToProps,
)(Explore);
