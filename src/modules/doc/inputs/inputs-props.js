import React from "react"
import { A } from "../../../components"

export const tableProps = [
  {
    Name: "label",
    Type: "string",
    Default: "―",
    Description: "input label"
  },

  {
    Name: "placeholder",
    Type: "string",
    Default: "―",
    Description: "input placeholder"
  },

  {
    Name: "icon",
    Type: <A target="_blank" href="https://react-icons.github.io/react-icons/"> ReactIcon </A>,
    Default: "―",
    Description: "icon inside input left side"
  },

  {
    Name: "error",
    Type: "boolean",
    Default: "false",
    Description: "input on error mode"
  },

  {
    Name: "errorMessage",
    Type: "string",
    Default: "―",
    Description: "show input error message"
  },

  {
    Name: "success",
    Type: "boolean",
    Default: "false",
    Description: "input on success mode"
  },

  {
    Name: "InputComponent",
    Type: "ReactComponent",
    Default: "―",
    Description: "set default input component"
  }
]
