import { connect } from 'react-redux';
import { currentUser } from '../../actionCreators';
import Email from '../../Settings/Email';

const mapStateToProps = state => ({
  email: state.currentUser && state.currentUser.email,
});
const mapDispathToProps = dispatch => ({
  setEmail: email => dispatch(currentUser.setEmail(email)),
});
export default connect(
  mapStateToProps,
  mapDispathToProps,
)(Email);
