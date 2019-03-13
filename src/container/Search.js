import { connect } from 'react-redux';
import Search from '../Search';
import { recommendPage } from '../actionCreators';

const mapStateToProps = state => ({
  searchQuery: state.recommendPage.searchQuery,
});
const mapDispatchToProps = dispatch => ({
  setHistoryNRecPage: show => dispatch(recommendPage.setHistoryNRecPage(show)),
  setSearchQuery: query => dispatch(recommendPage.setSearchQuery(query)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
