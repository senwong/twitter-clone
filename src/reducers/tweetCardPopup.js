import { tweetCardPopup } from '../actionTypes';

const initState = {
  show: false,
  user: null,
};
export default (state = initState, action) => {
  switch (action.type) {
    case tweetCardPopup.show:
      return {
        ...state,
        show: true,
        user: action.user,
      };
    case tweetCardPopup.hide:
      return {
        ...state,
        show: false,
        user: action.user,
      };
    default:
      return state;
  }
};
