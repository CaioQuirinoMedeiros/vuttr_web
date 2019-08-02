import React from "react"
import { Route, Redirect } from "react-router-dom"
import PropTypes from "prop-types"

import { isAuthenticated } from "../services/auth"

const Guest = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated() ? <Component {...props} /> : <Redirect to="/app" />
    }
  />
)

Guest.propTypes = {
  component: PropTypes.elementType.isRequired
}

export default Guest
