import React from "react";
import { Switch, BrowserRouter, Redirect, Route } from "react-router-dom";

import Home from "./pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
