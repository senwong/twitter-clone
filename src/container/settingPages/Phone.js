import { connect } from 'react-redux';
import Phone from '../../Settings/Phone';
import { setPhone } from '../../actionCreators/currentUser';

const mapStateToProps = state => ({
  phone: state.currentUser && state.currentUser.phone,
});
const mapDispathToProps = dispatch => ({
  setPhone: phone => dispatch(setPhone(phone)),
});
export default connect(
  mapStateToProps,
  mapDispathToProps,
)(Phone);
