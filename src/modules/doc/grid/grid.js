import React from "react"

import { DocTemplate } from "../../../templates"

import {
  Block,
  Syntax,
  Column,
  BasicTable
} from "../../../components"

import { import1, example1, example2 } from "./grid-example"

import { FaCog } from "react-icons/fa"

import { gridProps } from "./grid-props"

export function DocGrid () {
  return (
    <DocTemplate actived="grid" title="grid">

      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block>
        <BasicTable icon={FaCog} title="<Column> - properties" data={gridProps} />
      </Block>

      <Block bigMargin>
        <Block>
          <Column>
            <Block solid noMargin> 1 </Block>
          </Column>
        </Block>

        <Block>
          <Column col={2}>
            <Block solid noMargin> 1 </Block>
            <Block solid noMargin> 2 </Block>
          </Column>
        </Block>

        <Block>
          <Column col={3}>
            <Block solid noMargin> 1 </Block>
            <Block solid noMargin> 2 </Block>
            <Block solid noMargin> 3 </Block>
          </Column>
        </Block>

        <Block>
          <Column col={4}>
            <Block solid noMargin> 1 </Block>
            <Block solid noMargin> 2 </Block>
            <Block solid noMargin> 3 </Block>
            <Block solid noMargin> 4 </Block>
          </Column>
        </Block>

        <Block>
          <Column col={5}>
            <Block solid noMargin> 1 </Block>
            <Block solid noMargin> 2 </Block>
            <Block solid noMargin> 3 </Block>
            <Block solid noMargin> 4 </Block>
            <Block solid noMargin> 5 </Block>
          </Column>
        </Block>
        <Syntax code={example1} />
      </Block>

      <Block bigMargin>
        <Column col={3} gap={40}>
          <Block solid noMargin> 1 </Block>
          <Block solid noMargin> 2 </Block>
          <Block solid noMargin> 3 </Block>
          <Block solid noMargin> 4 </Block>
          <Block solid noMargin> 5 </Block>
          <Block solid noMargin> 6 </Block>
          <Block solid noMargin> 7 </Block>
          <Block solid noMargin> 8 </Block>
          <Block solid noMargin> 9 </Block>
        </Column>

        <Syntax code={example2} />
      </Block>

    </DocTemplate>
  )
}
