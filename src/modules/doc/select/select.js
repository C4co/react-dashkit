import React from "react"

import {
  Block,
  BlockField,
  Syntax,
  Select
} from "../../../components"

import { FaCog } from "react-icons/fa"

import { DocTemplate } from "../../../templates"

import {
  import1,
  example1,
  example2
} from "./select-examples"

export function DocSelect() {

  const data = [
    {key: "first", value: 1},
    {key: "second", value: 2},
    {key: "third", value: 3},
    {key: "fourth", value: 4}
  ]

  return (
    <DocTemplate actived="select" title="Select">

      <Block bigMargin>
        <Syntax code={import1} arrow={false}/>
      </Block>

      <Block Icon={FaCog} solid bigMargin title="Properties">
        <BlockField title="options">
          {`[{key, value}]`} - select options
        </BlockField>
      </Block>

      <Block bigMargin>
        <Select
          placeholder="Select an option"
          options={data}
          label="Select label" />
        <Syntax code={example1} />
      </Block>

      <Block bigMargin>
        <Select
          error
          errorMessage="Error message example"
          placeholder="Select an option"
          options={data}
          label="Select label" />
        <Syntax code={example2} />
      </Block>

    </DocTemplate>
  )
}
