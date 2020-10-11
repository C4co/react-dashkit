import { A } from "../../../components"
import React from "react"

export const blockProps = [
  {
    Name: "title",
    Type: "string",
    Default: "―",
    Description: "block title"
  },

  {
    Name: "icon",
    Type: <A target="_blank" href="https://react-icons.github.io/react-icons/"> ReactIcons </A>,
    Default: "―",
    Description: "header icon"
  },

  {
    Name: "solid",
    Type: "boolean",
    Default: "false",
    Description: "block on solid mode"
  },

  {
    Name: "bigMargin",
    Type: "boolean",
    Default: "false (20px)",
    Description: "Bottom margin with 50px"
  },

  {
    Name: "noMargin",
    Type: "boolean",
    Default: "false",
    Description: "Remove bottom margin"
  },

  {
    Name: "col2",
    Type: "boolean",
    Default: "false",
    Description: "divide block in 2 columns"
  },

  {
    Name: "col2",
    Type: "boolean",
    Default: "false",
    Description: "divide block in 2 columns"
  },

  {
    Name: "footer",
    Type: "any",
    Default: "―",
    Description: "footer section"
  }
]
