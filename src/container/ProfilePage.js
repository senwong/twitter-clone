import { connect } from 'react-redux';
import ProfilePage from '../Home/ProfilePage';
import actionCreators from 'actionCreators';

const mapStateToProps = state => ({
  user: state.currentUser,
  show: state.profilePage.show,
});
const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(actionCreators.profilePage.toggleProfilePage()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
