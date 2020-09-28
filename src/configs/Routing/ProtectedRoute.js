import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      auth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default ProtectedRoute;
