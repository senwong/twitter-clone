import { combineReducers } from 'redux';
import actionTypes from '../actionTypes';
import { createFilteredReducer } from './reducerUtilitys';
import displayReducer from './displayReducer';

const showReducer = createFilteredReducer(displayReducer, action => action.name === 'recommendPage');

const recommendQueryReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.SET_RECOMMENDPAGE_RECOMMEND_QUERY: {
      return action.query;
    }
    default:
      return state;
  }
};

const searchQueryReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.SET_RECOMMENDPAGE_SEARCH_QUERY: {
      return action.query;
    }
    default:
      return state;
  }
};

export default combineReducers({
  show: showReducer,
  recommendQuery: recommendQueryReducer,
  searchQuery: searchQueryReducer,
});
