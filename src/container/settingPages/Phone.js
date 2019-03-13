import { connect } from 'react-redux';
import Phone from '../../Settings/Phone';
import { currentUser } from '../../actionCreators';

const mapStateToProps = state => ({
  phone: state.currentUser && state.currentUser.phone,
});
const mapDispathToProps = dispatch => ({
  setPhone: phone => dispatch(currentUser.setPhone(phone)),
});
export default connect(
  mapStateToProps,
  mapDispathToProps,
)(Phone);
