import { recommendPage } from '../actionTypes';
import makeActionCreator from './makeActionCreator';

export const setHistoryNRecPage = makeActionCreator(recommendPage.setHistoryNRecPage, 'show');
export const setRecommendQuery = makeActionCreator(recommendPage.setRecommendQuery, 'query');
export const setSearchQuery = makeActionCreator(recommendPage.setSearchQuery, 'query');
