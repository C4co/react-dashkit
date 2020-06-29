import React from "react"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { PrivateRoute } from "./private-route"

import {
  // modules
  AuthLogin,
  AuthRecover,
  AuthRegister,
  NotFound,

  // dashboard
  DashboardHome,

  // hotsite
  HotsiteHome,

  // doc
  DocHome,
  DocButtons,
  DocInputs,
  DocCheckbox,
  DocTypography,
  DocSelect,
  DocRadio,
  DocBlock,
  DocSideMenu,
  DocDatepicker,
  DocSyntax
} from "../modules"

export function Routing () {
  return (
    <Router>
      <Switch>
        {/* Hotsite */}
        <Route exact path="/" component={HotsiteHome} />

        {/* Dashboard */}
        <PrivateRoute path="/dashboard" component={DashboardHome} />

        {/* Doc */}
        <Route path="/doc/home" component={DocHome} />
        <Route path="/doc/buttons" component={DocButtons} />
        <Route path="/doc/typography" component={DocTypography} />
        <Route path="/doc/inputs" component={DocInputs} />
        <Route path="/doc/checkbox" component={DocCheckbox} />
        <Route path="/doc/select" component={DocSelect} />
        <Route path="/doc/radio" component={DocRadio} />
        <Route path="/doc/block" component={DocBlock} />
        <Route path="/doc/sidemenu" component={DocSideMenu} />
        <Route path="/doc/datepicker" component={DocDatepicker} />
        <Route path="/doc/syntax" component={DocSyntax} />

        {/* Public */}
        <Route path="/login" component={AuthLogin} />
        <Route path="/recover" component={AuthRecover} />
        <Route path="/register" component={AuthRegister} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}
