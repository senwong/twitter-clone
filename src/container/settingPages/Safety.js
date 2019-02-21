import { connect } from "react-redux";
import Safety from "../../Settings/Safety"

const mapStateToProps = state => ({
  user: state.currentUser,
  personalization: state.personalization,
})
export default connect(
  mapStateToProps,
)(Safety);