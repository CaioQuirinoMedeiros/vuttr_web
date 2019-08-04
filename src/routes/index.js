import React from "react"
import { Switch, BrowserRouter, Redirect } from "react-router-dom"

import Private from "./private"
import Guest from "./guest"

import SignIn from "../pages/Auth/SignIn"
import SignUp from "../pages/Auth/SignUp"
import Home from "../pages/Home"

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Guest exact path="/signin" component={SignIn} />
      <Guest exact path="/signup" component={SignUp} />
      <Private exact path="/app" component={Home} />
      <Redirect to="/signin" />
    </Switch>
  </BrowserRouter>
)

export default Routes
