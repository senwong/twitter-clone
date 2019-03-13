import { connect } from 'react-redux';
import ProfilePage from '../Home/ProfilePage';
import { hide } from '../actionCreators/profilePage';

const mapStateToProps = state => ({
  user: state.currentUser,
  show: state.profilePage.show,
});
const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hide()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
