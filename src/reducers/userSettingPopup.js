import { combineReducers } from 'redux';
import { createFilteredReducer } from './reducerUtilitys';
import displayReducer from './displayReducer';

const reducer = createFilteredReducer(displayReducer, action => action.name === 'userSettingPopup');
export default combineReducers({
  show: reducer,
});
