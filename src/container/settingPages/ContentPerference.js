import { connect } from "react-redux";
import ContentPreferences from "../../Settings/ContentPreferences"

const mapStateToProps = state => ({
  personalization: state.personalization,
})
export default connect(
  mapStateToProps,
)(ContentPreferences);