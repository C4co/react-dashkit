import React from "react"

import {
  Spinner,
  Syntax,
  Block,
  BasicTable
} from "../../../components"

import { DocTemplate } from "../../../templates"

import {
  import1,
  example1,
  example2,
  example3,
  example4
} from "./spinner-example"

import { FaCog } from "react-icons/fa"

import { syntaxProps } from "./spinner-props"

export function DocSpinner() {
  return (
    <DocTemplate actived="spinner" title="Spinner">
      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCog} title="<Spinner> - properties" data={syntaxProps} />
      </Block>

      <Block>
        <Spinner color="black" />
        <Syntax code={example1} />
      </Block>

      <Block>
        <Spinner size={30} color="black" />
        <Syntax code={example2} />
      </Block>

      <Block>
        <Spinner size={50} color="rgba(243, 63, 252)" />
        <Syntax code={example3} />
      </Block>

      <Block>
        <Spinner size={70} color="#FC3F3F" />
        <Syntax code={example4} />
      </Block>
    </DocTemplate>
  )
}
