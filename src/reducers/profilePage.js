import { profilePage } from '../actionTypes';

const initState = {
  show: false,
};
export default (state = initState, action) => {
  switch (action.type) {
    case profilePage.show:
      return Object.assign({}, state, {
        show: true,
      });
    case profilePage.hide:
      return Object.assign({}, state, {
        show: false,
      });
    default:
      return state;
  }
};
