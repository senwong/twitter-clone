import { combineReducers } from 'redux';
import { createFilteredReducer } from './reducerUtilitys';
import displayReducer from './displayReducer';
import actionTypes from '../actionTypes';

const showReducer = createFilteredReducer(displayReducer, action => action.name === 'tweetCardPopup');

function userReducer(state = null, action) {
  switch (action.type) {
    case actionTypes.TWEETCARD_POPUP_SET_USER:
      return action.user;
    default:
      return state;
  }
}
const positionInitialState = {
  left: null,
  right: null,
  top: null,
  bottom: null,
};
function positionReducer(state = positionInitialState, action) {
  switch (action.type) {
    case actionTypes.TWEETCARD_POPUP_SET_POSITION:
      return action.position;
    default:
      return state;
  }
}
export default combineReducers({
  show: showReducer,
  user: userReducer,
  position: positionReducer,
});
