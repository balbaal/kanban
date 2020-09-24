import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import App from "App";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
