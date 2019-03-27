import { combineReducers } from 'redux';
import { createFilteredReducer } from './reducerUtilitys';
import displayReducer from './displayReducer';
import positionReducer from './positionReducer';

const showreducer = createFilteredReducer(displayReducer, action => action.name === 'userSettingPopup');
const position = createFilteredReducer(positionReducer, action => action.name === 'userSettingPopup');
export default combineReducers({
  show: showreducer,
  position,
});
