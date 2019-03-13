import { connect } from 'react-redux';
import Search from '../Search';
import { setHistoryNRecPage, setSearchQuery } from '../actionCreators/recommendPage';

const mapStateToProps = state => ({
  searchQuery: state.recommendPage.searchQuery,
});
const mapDispatchToProps = dispatch => ({
  setHistoryNRecPage: show => dispatch(setHistoryNRecPage(show)),
  setSearchQuery: query => dispatch(setSearchQuery(query)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
