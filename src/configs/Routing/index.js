import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import App from "pages/App";
import Projects from "pages/Projects";
import ProjectDetail from "pages/ProjectDetail";
import Login from "pages/Login";
import Register from "pages/Register";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/projects" component={Projects} />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
