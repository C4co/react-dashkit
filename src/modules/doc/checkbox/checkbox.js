import React from "react"

import {
  Block,
  Syntax,
  Checkbox,
  BasicTable
} from "../../../components"

import { DocTemplate } from "../../../templates"

import { FaCog } from "react-icons/fa"

import {
  import1,
  example1,
  example2,
  example3,
  example4
} from "./checkbox-examples"

import { checkboxProps } from "./checkbox-props"

export function DocCheckbox() {
  return (
    <DocTemplate actived="check" title="checkbox">

      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block>
        <BasicTable icon={FaCog} title="<Checkbox> - properties" data={checkboxProps} />
      </Block>

      <Block bigMargin>
        <Checkbox label="Checkbox" />
        <Syntax code={example1} />
      </Block>

      <Block bigMargin>
        <Checkbox defaultChecked={true} label="Checkbox checked" />
        <Syntax code={example2} />
      </Block>

      <Block bigMargin>
        <Checkbox disabled label="Checkbox disabled" />
        <Syntax code={example3} />
      </Block>

      <Block bigMargin>
        <>
          <Checkbox label="Red" description="red color" />
          <Checkbox label="Blue" description="blue color" />
          <Checkbox label="Green" description="green color" />
          <Checkbox label="White" description="white color" />
          <Checkbox label="Black" description="black color" />
        </>
        <Syntax code={example4} />
      </Block>

    </DocTemplate>
  )
}
