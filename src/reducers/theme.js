import TYPE from "../actionTypes";

const initialState = {
  mode: "light"
};
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.SET_LIGHT:
      return { ...state, mode: "light" };
    case TYPE.SET_DARK:
      return { ...state, mode: "dark" };
    default:
      return state;
  }
};
export default themeReducer;
