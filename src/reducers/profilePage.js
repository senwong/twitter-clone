import { combineReducers } from "redux";
import { createFilteredReducer } from "./reducerUtilitys";
import displayReducer from "./displayReducer";

const showReducer = createFilteredReducer(
  displayReducer,
  action => action.name === "profilePage"
);
export default combineReducers({
  show: showReducer
});
