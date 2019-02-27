import { connect } from 'react-redux';
import Search from '../Search';
import {
  setHistoryNRecPage,
  setSearchQuery,
} from '../actions';

const mapStateToProps = state => ({
  searchQuery: state.searchQuery,
});
const mapDispatchToProps = dispatch => ({
  setHistoryNRecPage: show => dispatch(setHistoryNRecPage(show)),
  setSearchQuery: query => dispatch(setSearchQuery(query)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
