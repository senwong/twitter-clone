import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import reducer from './reducers';
import ProfilePage from './Home/ProfilePage';
import TweetCardPopupPage from './container/TweetCardPopupPage';
import HistoryNRecommendPage from './container/HistoryNRecommendPage';
import UserSettingPopupPage from './container/UserSettingPopupPage';
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
  showUserSettingPopupPage,
  showModal,
  showProfilePage,
}) => {
  useEffect(() => {
    const bodyScrollStyle = showTweetCardPop ? 'hidden' : 'scroll';
    document.body.style.overflowY = bodyScrollStyle;
  });
  return (
    <React.Fragment>
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
            <TweetCardPopupPage />
          </SlideUpTransition>
          <SlideUpTransition inSlide={showUserSettingPopupPage}>
            <UserSettingPopupPage />
          </SlideUpTransition>

          { showModal && <Modal />}
        </>
      </Router>
    </React.Fragment>
  );
};
App.propTypes = {
  showTweetCardPop: PropTypes.bool.isRequired,
  showHistoryNRecPage: PropTypes.bool.isRequired,
  showUserSettingPopupPage: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  showProfilePage: PropTypes.bool.isRequired,
};

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
App = connect(
  mapStateToProps,
)(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
