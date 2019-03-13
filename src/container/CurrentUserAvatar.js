import { connect } from 'react-redux';
import Avatar from '../BaseComponents/Avatar';
import { show } from '../actionCreators/profilePage';

const mapStateToProps = state => ({
  src: state.currentUser && state.currentUser.avatarSrc,
});
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(show()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Avatar);
