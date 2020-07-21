import React from "react"

import { DocTemplate } from "../../../templates"

import {
  Block,
  BlockField,
  Syntax,
  Grid
} from "../../../components"

import { import1, example1 } from "./grid-example"

import { FaCog } from "react-icons/fa"

export function DocGrid(){
  return (
    <DocTemplate actived="grid" title="grid">

      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block Icon={FaCog} solid bigMargin title="<Grid> - Propeties">
        <BlockField title="col">
          number - number of grid columns
        </BlockField>
      </Block>

      <Block>
        <Grid>
          <Block solid> 1 </Block>
        </Grid>

        <Grid col={2}>
          <Block solid> 1 </Block>
          <Block solid> 2 </Block>
        </Grid>

        <Grid col={3}>
          <Block solid> 1 </Block>
          <Block solid> 2 </Block>
          <Block solid> 3 </Block>
        </Grid>

        <Grid col={4}>
          <Block solid> 1 </Block>
          <Block solid> 2 </Block>
          <Block solid> 3 </Block>
          <Block solid> 4 </Block>
        </Grid>

        <Grid col={5}>
          <Block solid> 1 </Block>
          <Block solid> 2 </Block>
          <Block solid> 3 </Block>
          <Block solid> 4 </Block>
          <Block solid> 5 </Block>
        </Grid>
        <Syntax code={example1} />
      </Block>

    </DocTemplate>
  )
}
