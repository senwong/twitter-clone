import { connect } from 'react-redux';
import { setEmail } from '../../actionCreators/currentUser';
import Email from '../../Settings/Email';

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
