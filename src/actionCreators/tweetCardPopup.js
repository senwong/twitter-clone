import actionTypes from '../actionTypes';

export const show = () => ({ name: 'tweetCardPopup', type: 'SHOW' });
export const hide = () => ({ name: 'tweetCardPopup', type: 'HIDE' });
export const setUser = user => ({ user, type: actionTypes.TWEETCARD_POPUP_SET_USER });
