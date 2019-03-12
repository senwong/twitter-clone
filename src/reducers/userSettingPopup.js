const initState = {
  show: false,
};
const userSettingPopup = (state = initState, action) => {
  switch (action.type) {
    case 'SET_USER_SETTING_POPUP_PAGE': {
      return Object.assign({}, state, {
        show: action.show,
      });
    }
    default:
      return state;
  }
};
export default userSettingPopup;