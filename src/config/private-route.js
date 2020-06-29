import React from "react"
import { Redirect, Route } from "react-router-dom"

export function PrivateRoute ({ component: Component, ...props }) {
  const token = localStorage.getItem("AUTH_TOKEN")

  function render ({ location }) {
    if (token) {
      return <Component {...props} />
    }
    return <Redirect to={{ pathname: "/login", state: { from: location } }} />
  }

  return (
    <Route {...props} render={render} />
  )
}
