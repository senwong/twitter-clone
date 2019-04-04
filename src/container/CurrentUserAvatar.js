import { connect } from 'react-redux';
import Avatar from '../BaseComponents/Avatar';
import { show } from '../actionCreators/profilePage';

const mapStateToProps = state => ({
  user: state.currentUser,
});
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(show()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Avatar);
