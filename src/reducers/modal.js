import { combineReducers } from 'redux';
import actionTypes from '../actionTypes';
import { createFilteredReducer } from './reducerUtilitys';
import displayReducer from './displayReducer';

const showReducer = createFilteredReducer(displayReducer, action => action.name === 'modal');

const initState = {
  title: '',
  type: 'primary',
  onConfirm: null, // confirm callback
  onCancel: null, // cancel callback
};
const configReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_UP_MODAL: {
      return {
        ...state,
        type: action.config && action.config.type,
        title: action.config && action.config.title,
        onConfirm: action.config && action.config.onConfirm,
        onCancel: action.config && action.config.onCancel,
      };
    }
    default:
      return state;
  }
};
export default combineReducers({
  show: showReducer,
  config: configReducer,
});
