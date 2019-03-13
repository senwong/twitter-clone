import { connect } from 'react-redux';
import Search from '../Search';
import { show, setSearchQuery } from '../actionCreators/recommendPage';

const mapStateToProps = state => ({
  searchQuery: state.recommendPage.searchQuery,
});
const mapDispatchToProps = dispatch => ({
  showHistoryNRecPage: () => dispatch(show()),
  setSearchQuery: query => dispatch(setSearchQuery(query)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
