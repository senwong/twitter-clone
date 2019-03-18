import { combineReducers } from 'redux';
import { createFilteredReducer } from './reducerUtilitys';
import displayReducer from './displayReducer';

const showReducer = createFilteredReducer(displayReducer, action => action.name === 'tweetCardPopup');

const initState = {
  name: '',
};
function userReducer(state = initState, action) {
  switch (action.type) {
    case 'TWEETCARD_POPUP_SET_USER':
      return action.user;
    default:
      return state;
  }
}

export default combineReducers({
  show: showReducer,
  user: userReducer,
});
