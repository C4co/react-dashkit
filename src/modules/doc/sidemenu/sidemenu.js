import React from "react"
import {
  Block,
  BlockField,
  Syntax
} from "../../../components"

import { DocTemplate } from "../../../templates"

import { FaCog } from "react-icons/fa"

import {
  import1,
  example1
} from "./sidemenu-examples"

export function DocSideMenu() {
  return (
    <DocTemplate actived="sidemenu" title="Side menu">
      <Block bigMargin>
        <Syntax arrow={false} code={import1} />
      </Block>

      <Block Icon={FaCog} bigMargin solid title="<SideMenu /> - Properties">
        <BlockField title="children">
          any - component children
        </BlockField>
      </Block>

      <Block Icon={FaCog} bigMargin solid title="<SideMenuDivision /> - Properties">
        <BlockField title="title">
          string - section title
        </BlockField>
      </Block>

      <Block Icon={FaCog} bigMargin solid title="<SideMenuItem /> - Properties">
        <BlockField title="actived">
          boolean - component actived mode
        </BlockField>

        <BlockField title="to">
          string - string representation of the link location (extends Link component by react-router-dom)
         </BlockField>

         <BlockField title="to">
          reactIcon - show a icon
         </BlockField>
      </Block>

      <Block bigMargin>
        <h1> {`<--- See the example here!`} </h1>
        <Syntax code={example1} />
      </Block>
    </DocTemplate>
  )
}
