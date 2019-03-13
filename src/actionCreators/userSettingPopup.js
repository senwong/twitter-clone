import { userSettingPopup } from '../actionTypes';
import makeActionCreator from './makeActionCreator';

export const show = makeActionCreator(userSettingPopup.show, 'user');
export const hide = makeActionCreator(userSettingPopup.hide, 'user');
