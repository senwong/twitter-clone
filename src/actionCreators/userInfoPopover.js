import TYPE from '../actionTypes';

export const show = () => ({ name: 'userInfoPopover', type: 'SHOW' });
export const hide = () => ({ name: 'userInfoPopover', type: 'HIDE' });
export const setPosition = position => ({ type: 'SET_POSITION', name: 'userInfoPopover', position });
export const setHideTimerId = id => ({ type: TYPE.USER_INFO_POPOVER_SET_HIDE_TIMER_ID, id });
export const setUser = user => ({ type: TYPE.USER_INFO_POPOVER_SET_USER, user });
