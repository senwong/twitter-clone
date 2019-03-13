import { modal } from '../actionTypes';
import makeActionCreator from './makeActionCreator';

export const show = makeActionCreator(modal.show);
export const hide = makeActionCreator(modal.hide);
export const setup = makeActionCreator(modal.setup, 'config');
