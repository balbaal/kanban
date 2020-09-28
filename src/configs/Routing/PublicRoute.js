import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) =>
      auth ? <Redirect to="/projects" /> : <Component {...props} />
    }
  />
);

export default PublicRoute;
