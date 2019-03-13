import { connect } from 'react-redux';
import HistoryNRecommendPage from '../InputPage/HistoryNRecommendPage';
import { recommendPage } from '../actionCreators';

const mapStateToProps = state => ({
  recommendQuery: state.recommendPage.recommendQuery,
  searchQuery: state.recommendPage.searchQuery,
});
const mapDispatchToProps = dispatch => ({
  setRecommendQuery: query => dispatch(recommendPage.setRecommendQuery(query)),
  setSearchQuery: query => dispatch(recommendPage.setSearchQuery(query)),
  hide: () => dispatch(recommendPage.setHistoryNRecPage(false)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistoryNRecommendPage);
