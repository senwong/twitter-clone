import { connect } from 'react-redux';
import HistoryNRecommendPage from '../InputPage/HistoryNRecommendPage';
import { setRecommendQuery, setSearchQuery, setHistoryNRecPage } from '../actionCreators/recommendPage';

const mapStateToProps = state => ({
  recommendQuery: state.recommendPage.recommendQuery,
  searchQuery: state.recommendPage.searchQuery,
});
const mapDispatchToProps = dispatch => ({
  setRecommendQuery: query => dispatch(setRecommendQuery(query)),
  setSearchQuery: query => dispatch(setSearchQuery(query)),
  hide: () => dispatch(setHistoryNRecPage(false)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistoryNRecommendPage);
