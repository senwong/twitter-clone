import { userSettingPopup } from '../actionTypes';

const initState = {
  show: false,
};
export default (state = initState, action) => {
  switch (action.type) {
    case userSettingPopup.show: {
      return { ...state, show: true };
    }
    case userSettingPopup.hide: {
      return { ...state, show: false };
    }
    default:
      return state;
  }
};
