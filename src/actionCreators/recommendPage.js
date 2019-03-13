import { recommendPage } from '../actionTypes';
import makeActionCreator from './makeActionCreator';

export const show = makeActionCreator(recommendPage.show);
export const hide = makeActionCreator(recommendPage.hide);
export const setRecommendQuery = makeActionCreator(recommendPage.setRecommendQuery, 'query');
export const setSearchQuery = makeActionCreator(recommendPage.setSearchQuery, 'query');
