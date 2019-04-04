import { combineReducers } from 'redux';
import modal from './modal';
import profilePage from './profilePage';
import tweetCardPopup from './tweetCardPopup';
import currentUser from './currentUser';
import userSettingPopup from './userSettingPopup';
import theme from './theme';
import userInfoPopover from './userInfoPopover';

export default combineReducers({
  modal,
  profilePage,
  tweetCardPopup,
  currentUser,
  userSettingPopup,
  theme,
  userInfoPopover,
});
