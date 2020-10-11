import { A } from "../../../components"
import React from "react"

export const basicTableProps = [
  {
    Name: "title",
    Type: "string",
    Default: "―",
    Description: "Table title"
  },

  {
    Name: "icon",
    Type: <A target="_blank" href="https://react-icons.github.io/react-icons/"> ReactIcons </A>,
    Default: "―",
    Description: "Insert an icon in left side of title"
  },

  {
    Name: "data",
    Type: "[{ \"key\": \"value\" }]",
    Default: "―",
    Description: "Table data"
  }
]

export const dynamicTableProps = [
  {
    Name: "title",
    Type: "string",
    Default: "―",
    Description: "Table title"
  },

  {
    Name: "icon",
    Type: <A target="_blank" href="https://react-icons.github.io/react-icons/"> ReactIcons </A>,
    Default: "―",
    Description: "Insert an icon in left side of title"
  },

  {
    Name: "data",
    Type: "[{ \"key\": \"value\" }]",
    Default: "―",
    Description: "Table data"
  },

  {
    Name: "onSelectItems",
    Type: "function",
    Default: "―",
    Description: "On select items handle"
  }
]
