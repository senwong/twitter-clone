import { connect } from 'react-redux';
import HistoryNRecommendPage from '../InputPage/HistoryNRecommendPage';
import actionCreators from 'actionCreators';

const mapStateToProps = state => ({
  recommendQuery: state.recommendPage.recommendQuery,
  searchQuery: state.recommendPage.searchQuery,
});
const mapDispatchToProps = dispatch => ({
  setRecommendQuery: query => dispatch(actionCreators.recommendPage.setRecommendQuery(query)),
  setSearchQuery: query => dispatch(actionCreators.recommendPage.setSearchQuery(query)),
  hide: () => dispatch(actionCreators.recommendPage.setHistoryNRecPage(false)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistoryNRecommendPage);
