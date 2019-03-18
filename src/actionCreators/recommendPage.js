import actionTypes from '../actionTypes';
import makeActionCreator from './makeActionCreator';

export const show = () => ({ name: 'recommendPage', type: 'SHOW' });
export const hide = () => ({ name: 'recommendPage', type: 'HIDE' });

export const setRecommendQuery = makeActionCreator(actionTypes.SET_RECOMMENDPAGE_RECOMMEND_QUERY, 'query');
export const setSearchQuery = makeActionCreator(actionTypes.SET_RECOMMENDPAGE_SEARCH_QUERY, 'query');
