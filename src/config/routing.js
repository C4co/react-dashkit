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
  DocSyntax,
  DocGrid,
  DocForm,
  DocSpinner,
  DocTable,
  DocBadge,
  DocAlert,
  DocAvatar,
  DocClasses
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
        <Route path="/doc/grid" component={DocGrid} />
        <Route path="/doc/form" component={DocForm} />
        <Route path="/doc/spinner" component={DocSpinner} />
        <Route path="/doc/table" component={DocTable} />
        <Route path="/doc/badge" component={DocBadge} />
        <Route path="/doc/alert" component={DocAlert} />
        <Route path="/doc/avatar" component={DocAvatar} />
        <Route path="/doc/classes" component={DocClasses} />

        {/* Public */}
        <Route path="/login" component={AuthLogin} />
        <Route path="/recover" component={AuthRecover} />
        <Route path="/register" component={AuthRegister} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}
