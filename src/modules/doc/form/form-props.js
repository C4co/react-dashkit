import React from "react"
import { A } from "../../../components"

export const formProps = [
  {
    "Name": "title",
    "Type": "string",
    "Default": "―",
    "Description": "form title"
  },

  {
    "Name": "icon",
    "Type": <A target="_blank" href="https://react-icons.github.io/react-icons/"> ReactIcons </A>,
    "Default": "―",
    "Description": "header icon"
  },

  {
    "Name": "error",
    "Type": "boolean",
    "Default": "false",
    "Description": "alert error at from bottom"
  },

  {
    "Name": "errorTitle",
    "Type": "string",
    "Default": "―",
    "Description": "error title"
  },

  {
    "Name": "errorMessage",
    "Type": "string",
    "Default": "―",
    "Description": "error message"
  },

  {
    "Name": "isLoading",
    "Type": "boolean",
    "Default": "false",
    "Description": "component on loading mode"
  },
]

export const formDividerProps = [
  {
    "Name": "Title",
    "Type": "string",
    "Default": "―",
    "Description": "Form divider title"
  }
]
