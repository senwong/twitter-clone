import { connect } from 'react-redux';
import App from '../index';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  showTweetCardPop: state.showTweetCardPop,
  showProfilePage: state.showProfilePage,
  showHistoryNRecPage: state.showHistoryNRecPage,
  showUserSettingPopupPage: state.showUserSettingPopupPage,
  // modal
  showModal: state.showModal,
});
export default connect(
  mapStateToProps,
)(App);
