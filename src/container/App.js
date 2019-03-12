import { connect } from 'react-redux';
import App from '../index';

const mapStateToProps = state => (
  {
    currentUser: state.currentUser,
    showTweetCardPop: state.tweetCardPopup.show,
    showProfilePage: state.profilePage.show,
    showHistoryNRecPage: state.recommendPage.show,
    showUserSettingPopupPage: state.userSettingPopup.show,
    showModal: state.modal.show,
  }
);
export default connect(
  mapStateToProps,
)(App);
