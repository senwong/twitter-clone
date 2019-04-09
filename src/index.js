import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import reducer from './reducers';
import ProfilePage from './Home/ProfilePage';
import TweetCardPopupMenu from './container/TweetCardPopupMenu';
import UserSettingPopupMenu from './container/UserSettingPopupMenu';
import Modal from './container/Modal';
import UserInfoPopover from './middleComponents/UserInfoPopover';
import routes from './routes';
import ProtectedRoute from './middleComponents/ProtectedRoute';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// host at github page
// const HOST = '';

let App = ({
  showTweetCardPop,
  showUserSettingPopupMenu,
  showModal,
  showProfilePage,
  themeMode,
  showUserInofPopover,
}) => {
  useEffect(() => {
    const bodyScrollStyle = showTweetCardPop ? 'hidden' : 'scroll';
    document.body.style.overflowY = bodyScrollStyle;
  });
  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <Router basename={process.env.PUBLIC_URL}>
        <>
          <Switch>
            {
              routes.common.map(route => (
                <Route key={route.path} {...route} />
              ))
            }
            {
              routes.protected.map(route => (
                <ProtectedRoute key={route.path} {...route} />
              ))
            }
          </Switch>
          { showProfilePage && <ProfilePage /> }
          { showTweetCardPop && <TweetCardPopupMenu />}
          { showUserSettingPopupMenu && <UserSettingPopupMenu />}
          { showModal && <Modal /> }
          { showUserInofPopover && <UserInfoPopover /> }
        </>
      </Router>
    </ThemeProvider>
  );
};
App.propTypes = {
  showTweetCardPop: PropTypes.bool.isRequired,
  showUserSettingPopupMenu: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  showProfilePage: PropTypes.bool.isRequired,
  themeMode: PropTypes.oneOf(['light', 'dark']).isRequired,
  showUserInofPopover: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  showTweetCardPop: state.tweetCardPopup.show,
  showProfilePage: state.profilePage.show,
  showUserSettingPopupMenu: state.userSettingPopup.show,
  showModal: state.modal.show,
  themeMode: state.theme.mode,
  showUserInofPopover: state.userInfoPopover.show,
});
App = connect(
  mapStateToProps,
)(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
