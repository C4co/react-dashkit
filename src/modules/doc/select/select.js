import React from "react"

import {
  Block,
  Syntax,
  Select,
  BasicTable
} from "../../../components"

import { FaCog } from "react-icons/fa"

import { DocTemplate } from "../../../templates"

import {
  import1,
  example1,
  example2,
  example3
} from "./select-examples"

import { selectProps } from "./select-props"

export function DocSelect () {
  const data = [
    { key: "first", value: 1 },
    { key: "second", value: 2 },
    { key: "third", value: 3 },
    { key: "fourth", value: 4 }
  ]

  return (
    <DocTemplate actived="select" title="Select">

      <Block bigMargin>
        <Syntax code={import1} arrow={false}/>
      </Block>

      <Block>
        <BasicTable icon={FaCog} title="<Select> - properties" data={selectProps} />
      </Block>

      <Block bigMargin>
        <Select />
        <Syntax code={example1} />
      </Block>

      <Block bigMargin>
        <Select
          placeholder="Select an option"
          options={data}
          label="Select label" />
        <Syntax code={example2} />
      </Block>

      <Block bigMargin>
        <Select
          error
          errorMessage="Error message example"
          placeholder="Select an option"
          options={data}
          label="Select label" />
        <Syntax code={example3} />
      </Block>

    </DocTemplate>
  )
}
