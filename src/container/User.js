import { connect } from 'react-redux';
import User from '../User';
import { show } from '../actionCreators/userSettingPopup';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  showUserSettingPopupPage: () => dispatch(show()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
