import { connect } from 'react-redux';
import User from '../User';
import { show, setPosition } from '../actionCreators/userSettingPopup';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  showUserSettingPopupPage: () => dispatch(show()),
  setPopupPosition: position => dispatch(setPosition(position)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
