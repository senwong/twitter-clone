import { connect } from 'react-redux';
import ContentPreferences from '../../Settings/ContentPreferences';

const mapStateToProps = state => ({
  personalization: state.currentUser && state.currentUser.personalization,
});
export default connect(
  mapStateToProps,
)(ContentPreferences);
