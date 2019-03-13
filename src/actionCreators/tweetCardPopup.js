import { tweetCardPopup } from '../actionTypes';
import makeActionCreator from './makeActionCreator';

export const show = makeActionCreator(tweetCardPopup.show, 'user');
export const hide = makeActionCreator(tweetCardPopup.hide, 'user');
