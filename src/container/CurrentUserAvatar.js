import { connect } from 'react-redux';
import Avatar from '../BaseComponents/Avatar';
import actionCreators from 'actionCreators';

const mapStateToProps = state => ({
  user: state.currentUser,
});
const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(actionCreators.profilePage.toggleProfilePage()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Avatar);
