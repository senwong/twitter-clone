import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { func } from 'prop-types';
import auth from '../auth';

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (auth.isAuth() ? <Component {...props} /> : <Redirect to="/twitter-clone/login" />)}
    />
  );
}
ProtectedRoute.propTypes = {
  component: func.isRequired,
};
export default ProtectedRoute;
