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
const HOST = '';

export default function App({
  showTweetCardPop,
  showProfilePage,
  showHistoryNRecPage,
  showUserSettingPopupPage,
  showModal,
}) {
  return (
    <React.Fragment>
      <Router>
        <React.Fragment>
          <Switch>
            <Route path={HOST + "/"} exact render={() => <Redirect to={HOST + "/home"} />} />
            <Route path={HOST + "/home"} component={Home} />
            <Route path={HOST + "/explore"} component={Explore} />
            <Route path={HOST + "/notifications"} component={Notifications} />
            <Route path={HOST + "/messages"} component={Message} />
            <Route path={HOST + "/search"} component={Search} />
            <Route path={HOST + "/related"} component={Related} />

            <Route path={HOST + "/settings"} exact component={Settings} />
            <Route path={HOST + "/settings/account/login_verification"} component={LoginVerification} />
            <Route path={HOST + "/settings/account"} component={Account} />
            <Route path={HOST + "/settings/safety"} component={Safety} />
            <Route path={HOST + "/settings/notifications"} component={NotificationsSetting} />
            <Route path={HOST + "/settings/content_preferences"} component={ContentPreferences} />

            <Route path={HOST + "/settings/data"} component={Data} />
            <Route path={HOST + "/settings/accessibility"} component={Accessibility} />
            <Route path={HOST + "/settings/about"} component={About} />
            <Route path={HOST + "/settings/screen_name"} component={ScreenName} />
            <Route path={HOST + "/settings/phone"} component={Phone} />
            <Route path={HOST + "/settings/email"} component={Email} />
            <Route path={HOST + "/settings/password"} component={Password} />
            <Route path={HOST + "/settings/security"} component={Security} />

            <Route path={HOST + "/settings/language"} component={Language} />
            <Route path={HOST + "/settings/country"} component={Country} />
            <Route path={HOST + "/settings/your_data"} component={YourData} />
            <Route path={HOST + "/settings/applications"} component={Applications} />

            <Route path={HOST + "/settings/deactivate"} component={Deactivate} />
            <Route path={HOST + "/i/trends"} component={Trend} />

            <Route path={HOST + "/:userName"} component={User} />

          </Switch>
          {/* { showProfilePage && <ProfilePage /> } */}
          <ProfilePage />
          { showTweetCardPop && <TweetCardPopupPage /> }
          { showHistoryNRecPage && <HistoryNRecommendPage />}
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
  showProfilePage: PropTypes.bool.isRequired,
  showHistoryNRecPage: PropTypes.bool.isRequired,
  showUserSettingPopupPage: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
};
App.defaultProps = {
  
}
ReactDOM.render(
  <Provider store={store}>
    <AppC />
  </Provider>,
  document.querySelector('#root'),
);
