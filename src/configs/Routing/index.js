import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

// Components
import App from "pages/App";
import Projects from "pages/Projects";
import ProjectDetail from "pages/ProjectDetail";
import Login from "pages/Login";
import Register from "pages/Register";

// Custom Route
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const Routing = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!!token) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" auth={isLoggedIn} component={App} />
        <ProtectedRoute
          path="/projects"
          auth={isLoggedIn}
          component={Projects}
        />
        <ProtectedRoute
          path="/project/:id"
          auth={isLoggedIn}
          component={ProjectDetail}
        />
        <PublicRoute auth={isLoggedIn} path="/login" component={Login} />
        <PublicRoute auth={isLoggedIn} path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
