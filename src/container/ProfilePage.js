import { connect } from 'react-redux';
import ProfilePage from '../Home/ProfilePage';
import { profilePage } from '../actionCreators';

const mapStateToProps = state => ({
  user: state.currentUser,
  show: state.profilePage.show,
});
const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(profilePage.hide()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
