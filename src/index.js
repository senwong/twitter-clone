import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Explore from './container/Explore';
import Search from './container/Search';
import Home from './container/Home';
import Notifications from './Notifications';
import Message from './Message';
import reducer from './reducers';
import ProfilePage from './container/ProfilePage';
import TweetCardPopupPage from './container/TweetCardPopupPage';
import HistoryNRecommendPage from './container/HistoryNRecommendPage';
import AppC from './container/App';
import Related from './Related';
import Settings from './container/settingPages/Settings';
import Account from './container/settingPages/Account';
import Safety from './container/settingPages/Safety';
import NotificationsSetting from './container/settingPages/Notifications';
import ContentPreferences from './container/settingPages/ContentPerference';
import Data from './container/settingPages/Data';
import ScreenName from './container/settingPages/ScreenName';
import Phone from './container/settingPages/Phone';
import Email from './container/settingPages/Email';
import Trend from './Explore/Trend';

import Password from './Settings/Password';
import Language from './Settings/Language';
import Country from './Settings/Country';
import Security from './Settings/Security';
import YourData from './Settings/YourData';
import Deactivate from './Settings/Deactivate';
import Applications from './Settings/Applications';
import About from './Settings/About';
import LoginVerification from './Settings/LoginVerification';
import Accessibility from './Settings/Accessibility';

import User from './container/User';
import UserSettingPopupPage from './container/UserSettingPopupPage';

import Modal from './container/Modal';

// transition
import SlideUpTransition from './middleComponents/SlideUpTransition';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// host at github page
// const HOST = '';

export default function App({
  showTweetCardPop,
  showHistoryNRecPage,
  showUserSettingPopupPage,
  showModal,
}) {
  return (
    <React.Fragment>
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/messages" component={Message} />
            <Route path="/search" component={Search} />
            <Route path="/related" component={Related} />

            <Route path="/settings" exact component={Settings} />
            <Route path="/settings/account/login_verification" component={LoginVerification} />
            <Route path="/settings/account" component={Account} />
            <Route path="/settings/safety" component={Safety} />
            <Route path="/settings/notifications" component={NotificationsSetting} />
            <Route path="/settings/content_preferences" component={ContentPreferences} />

            <Route path="/settings/data" component={Data} />
            <Route path="/settings/accessibility" component={Accessibility} />
            <Route path="/settings/about" component={About} />
            <Route path="/settings/screen_name" component={ScreenName} />
            <Route path="/settings/phone" component={Phone} />
            <Route path="/settings/email" component={Email} />
            <Route path="/settings/password" component={Password} />
            <Route path="/settings/security" component={Security} />

            <Route path="/settings/language" component={Language} />
            <Route path="/settings/country" component={Country} />
            <Route path="/settings/your_data" component={YourData} />
            <Route path="/settings/applications" component={Applications} />

            <Route path="/settings/deactivate" component={Deactivate} />
            <Route path="/i/trends" component={Trend} />

            <Route path="/:userName" component={User} />

          </Switch>

          <ProfilePage />
          { showHistoryNRecPage && <HistoryNRecommendPage />}
          <SlideUpTransition inSlide={showTweetCardPop}>
            <TweetCardPopupPage />
          </SlideUpTransition>
          <SlideUpTransition inSlide={showUserSettingPopupPage}>
            <UserSettingPopupPage />
          </SlideUpTransition>

          { showModal && <Modal />}
        </React.Fragment>
      </Router>
    </React.Fragment>
  );
}
App.propTypes = {
  showTweetCardPop: PropTypes.bool.isRequired,
  showHistoryNRecPage: PropTypes.bool.isRequired,
  showUserSettingPopupPage: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
};
ReactDOM.render(
  <Provider store={store}>
    <AppC />
  </Provider>,
  document.querySelector('#root'),
);
