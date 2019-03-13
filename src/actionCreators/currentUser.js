import { currentUser } from '../actionTypes';
import makeActionCreator from './makeActionCreator';

export const setScreenName = makeActionCreator(currentUser.setScreenName, 'name');
export const setPhone = makeActionCreator(currentUser.setPhone, 'phone');
export const setEmail = makeActionCreator(currentUser.setEmail, 'email');
