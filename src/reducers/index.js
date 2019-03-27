import { combineReducers } from 'redux';
import modal from './modal';
import profilePage from './profilePage';
import tweetCardPopup from './tweetCardPopup';
import recommendPage from './recommendPage';
import currentUser from './currentUser';
import userSettingPopup from './userSettingPopup';
import theme from './theme';

export default combineReducers({
  modal,
  profilePage,
  tweetCardPopup,
  recommendPage,
  currentUser,
  userSettingPopup,
  theme,
});
