import { connect } from 'react-redux';
import HistoryNRecommendPage from '../InputPage/HistoryNRecommendPage';
import { setRecommendQuery, setSearchQuery, hide } from '../actionCreators/recommendPage';

const mapStateToProps = state => ({
  recommendQuery: state.recommendPage.recommendQuery,
  searchQuery: state.recommendPage.searchQuery,
});
const mapDispatchToProps = dispatch => ({
  setRecommendQuery: query => dispatch(setRecommendQuery(query)),
  setSearchQuery: query => dispatch(setSearchQuery(query)),
  hide: () => dispatch(hide()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistoryNRecommendPage);
