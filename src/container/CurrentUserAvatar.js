import { connect } from 'react-redux';
import Avatar from '../BaseComponents/Avatar';
import { profilePage } from '../actionCreators';

const mapStateToProps = state => ({
  user: state.currentUser,
});
const mapDispatchToProps = dispatch => ({
  showProfilePage: () => dispatch(profilePage.show()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Avatar);
