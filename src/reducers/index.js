import { combineReducers } from 'redux';
import modal from './modal';
import profilePage from './profilePage';
import tweetCardPopup from './tweetCardPopup';
import recommendPage from './recommendPage';
import currentUser from './currentUser';
import userSettingPopup from './userSettingPopup';

export default combineReducers({
  modal,
  profilePage,
  tweetCardPopup,
  recommendPage,
  currentUser,
  userSettingPopup,
});
/*

需要暴露给外界的 ：
1. combined reducer
2. 每个组件的actionCreators

const initState = {
  show: false,
  title: '',
  type: 'primary',
  onConfirm: null, // confirm callback
  onCancel: null, // cancel callback
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case modal.show: {
      return Object.assign({}, state, {
        show: true,
      });
    }
    case modal.hide: {
      return Object.assign({}, state, {
        show: false,
      });
    }
    case modal.setup: {
      return Object.assign({}, state, {
        type: action.type,
        title: action.title,
        onConfirm: action.onConfirm,
        onCancel: action.onCancel,
      });
    }
    default:
      return state;
  }
};
const show = () => ({ type: modal.show });
const hide = () => ({ type: modal.hide });
const setup = config => ({
  type: 'SET_UP',
  config,
});
const actionCreator = {
  show,
  hide,
  setup,
};
const modal = {
  reducer,
}
*/
