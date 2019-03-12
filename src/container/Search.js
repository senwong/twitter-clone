import { connect } from 'react-redux';
import Search from '../Search';
import actionCreators from '../actionCreators';

const mapStateToProps = state => ({
  searchQuery: state.recommendPage.searchQuery,
});
const mapDispatchToProps = dispatch => ({
  setHistoryNRecPage: show => dispatch(actionCreators.recommendPage.setHistoryNRecPage(show)),
  setSearchQuery: query => dispatch(actionCreators.recommendPage.setSearchQuery(query)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
