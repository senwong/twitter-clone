import { profilePage } from '../actionTypes';
import makeActionCreator from './makeActionCreator';

export const show = makeActionCreator(profilePage.show);
export const hide = makeActionCreator(profilePage.hide);
