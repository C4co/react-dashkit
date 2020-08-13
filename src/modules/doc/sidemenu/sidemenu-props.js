import { A } from "../../../components"
import React from "react"

export const sideMenuProps = [
  {
    "Name": "children",
    "Type": "any",
    "Default": "―",
    "Description": "component children"
  },
]

export const sideMenuSectionProps = [
  {
    "Name": "title",
    "Type": "string",
    "Default": "―",
    "Description": "section title"
  },

  {
    "Name": "children",
    "Type": "any",
    "Default": "―",
    "Description": "component children"
  },
]

export const sideMenuItemProps = [
  {
    "Name": "actived",
    "Type": "boolean",
    "Default": "false",
    "Description": "menu item on active mode"
  },

  {
    "Name": "children",
    "Type": "any",
    "Default": "―",
    "Description": "component children"
  },

  {
    "Name": "icon",
    "Type": <A target="_blank" href="https://react-icons.github.io/react-icons/"> ReactIcons </A>,
    "Default": "―",
    "Description": "menu icon"
  },
]
