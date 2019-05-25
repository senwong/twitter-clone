import actionTypes from "../actionTypes";
import makeActionCreator from "./makeActionCreator";

export const setup = makeActionCreator(actionTypes.SET_UP_MODAL, "config");
export const show = () => ({ name: "modal", type: "SHOW" });
export const hide = () => ({ name: "modal", type: "HIDE" });
