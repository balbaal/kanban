import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import App from "pages/App";
import Projects from "pages/Projects";
import ProjectDetail from "pages/ProjectDetail";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/projects" component={Projects} />
        <Route path="/project/:id" component={ProjectDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
