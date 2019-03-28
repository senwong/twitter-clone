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
import HistoryNRecommendPage from './container/HistoryNRecommendPage';
import UserSettingPopupMenu from './container/UserSettingPopupMenu';
import Modal from './container/Modal';

import routes from './routes';
// transition
import SlideUpTransition from './middleComponents/SlideUpTransition';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// host at github page
// const HOST = '';

let App = ({
  showTweetCardPop,
  showHistoryNRecPage,
  showUserSettingPopupMenu,
  showModal,
  showProfilePage,
  themeMode,
}) => {
  useEffect(() => {
    const bodyScrollStyle = showTweetCardPop ? 'hidden' : 'scroll';
    document.body.style.overflowY = bodyScrollStyle;
  });
  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <Router>
        <>
          <Switch>
            {
              routes.map(route => (
                <Route key={route.path} {...route} />
              ))
            }
          </Switch>
          { showProfilePage && <ProfilePage /> }
          { showHistoryNRecPage && <HistoryNRecommendPage />}
          <SlideUpTransition inSlide={showTweetCardPop}>
            <TweetCardPopupMenu />
          </SlideUpTransition>
          <SlideUpTransition inSlide={showUserSettingPopupMenu}>
            <UserSettingPopupMenu />
          </SlideUpTransition>

          { showModal && <Modal />}
        </>
      </Router>
    </ThemeProvider>
  );
};
App.propTypes = {
  showTweetCardPop: PropTypes.bool.isRequired,
  showHistoryNRecPage: PropTypes.bool.isRequired,
  showUserSettingPopupMenu: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  showProfilePage: PropTypes.bool.isRequired,
  themeMode: PropTypes.oneOf(['light', 'dark']).isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  showTweetCardPop: state.tweetCardPopup.show,
  showProfilePage: state.profilePage.show,
  showHistoryNRecPage: state.recommendPage.show,
  showUserSettingPopupMenu: state.userSettingPopup.show,
  showModal: state.modal.show,
  themeMode: state.theme.mode,
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
