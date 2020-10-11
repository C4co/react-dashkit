import React from "react"
import {
  Block,
  Syntax,
  BasicTable
} from "../../../components"

import { DocTemplate } from "../../../templates"

import { FaCog } from "react-icons/fa"

import {
  import1,
  example1
} from "./sidemenu-examples"

import { sideMenuItemProps, sideMenuSectionProps, sideMenuProps } from "./sidemenu-props"

export function DocSideMenu () {
  return (
    <DocTemplate actived="sidemenu" title="Side menu">
      <Block bigMargin>
        <Syntax arrow={false} code={import1} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCog} title="<SideMenu> - properties" data={sideMenuProps} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCog} title="<SideMenuSection> - properties" data={sideMenuSectionProps} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCog} title="<SideMenuItem> - properties" data={sideMenuItemProps} />
      </Block>

      <Block bigMargin>
        <h1> {"<--- See the example there!"} </h1>
        <Syntax code={example1} />
      </Block>
    </DocTemplate>
  )
}
