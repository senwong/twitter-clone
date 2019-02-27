import { connect } from 'react-redux';
import Email from '../../Settings/Email';
import { setEmail } from '../../actions';

const mapStateToProps = state => ({
  email: state.currentUser && state.currentUser.email,
});
const mapDispathToProps = dispatch => ({
  setEmail: email => dispatch(setEmail(email)),
});
export default connect(
  mapStateToProps,
  mapDispathToProps,
)(Email);
