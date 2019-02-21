import { connect } from "react-redux"
import HistoryNRecommendPage from "../InputPage/HistoryNRecommendPage"
import { setRecommendQuery, setHistoryNRecPage, setSearchQuery } from "../actions"; 

const mapStateToProps = state => ({
  recommendQuery: state.recommendQuery,
  searchQuery: state.searchQuery,
})
const mapDispatchToProps = dispatch => ({
  setRecommendQuery:  query => dispatch(setRecommendQuery(query)),
  setSearchQuery: query => dispatch(setSearchQuery(query)),
  hide: () => dispatch(setHistoryNRecPage(false)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HistoryNRecommendPage);