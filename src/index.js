import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import reducer from "./reducers";
import ProfilePage from "./Home/ProfilePage";
import TweetCardPopupMenu from "./middleComponents/TweetCardPopupMenu";
import UserSettingPopupMenu from "./User/UserSettingPopupMenu";
import Modal from "./container/Modal";
import UserInfoPopover from "./middleComponents/UserInfoPopover";
import routes from "./routes";
import ProtectedRoute from "./middleComponents/ProtectedRoute";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// host at github page
// const HOST = '';

let App = ({ themeMode }) => (
  <ThemeProvider theme={{ mode: themeMode }}>
    <Router basename={process.env.PUBLIC_URL}>
      <>
        <Switch>
          {routes.common.map(route => (
            <Route key={route.path} {...route} />
          ))}
          {routes.protected.map(route => (
            <ProtectedRoute key={route.path} {...route} />
          ))}
        </Switch>
        <ProfilePage />
        <TweetCardPopupMenu />
        <UserSettingPopupMenu />
        <UserInfoPopover />
        <Modal />
      </>
    </Router>
  </ThemeProvider>
);
App.propTypes = {
  themeMode: PropTypes.oneOf(["light", "dark"]).isRequired
};

const mapStateToProps = state => ({
  themeMode: state.theme.mode
});
App = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
