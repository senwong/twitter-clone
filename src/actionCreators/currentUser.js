import actionTypes from "../actionTypes";
import makeActionCreator from "./makeActionCreator";

export const setScreenName = makeActionCreator(
  actionTypes.SET_CURRENTUSER_SCREEN_NAME,
  "name"
);
export const setPhone = makeActionCreator(
  actionTypes.SET_CURRENTUSER_PHONE,
  "phone"
);
export const setEmail = makeActionCreator(
  actionTypes.SET_CURRENTUSER_EMAIL,
  "email"
);
