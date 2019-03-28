import { combineReducers } from 'redux';
import { createFilteredReducer } from './reducerUtilitys';
import displayReducer from './displayReducer';
import positionReducer from './positionReducer';
import TYPE from '../actionTypes';

const showReducer = createFilteredReducer(displayReducer, action => action.name === 'userInfoPopover');
const position = createFilteredReducer(positionReducer, action => action.name === 'userInfoPopover');
const user = (state = null, action) => {
  switch (action.type) {
    case TYPE.USER_INFO_POPOVER_SET_USER:
      return action.user;
    default:
      return state;
  }
};
const hideTimerId = (state = null, action) => {
  switch (action.type) {
    case TYPE.USER_INFO_POPOVER_SET_HIDE_TIMER_ID:
      return action.id;
    default:
      return state;
  }
};
export default combineReducers({
  show: showReducer,
  position,
  user,
  hideTimerId,
});
