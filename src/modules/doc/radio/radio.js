import React, { useState, useEffect } from "react"

import {
  Block,
  Syntax,
  Radio,
  BasicTable
} from "../../../components"

import { DocTemplate } from "../../../templates"

import { FaCog } from "react-icons/fa"

import {
  import1,
  example1
} from "./radio-example"

import { radioProps } from "./radio-props"

export function DocRadio () {
  const [value, setValue] = useState(null)

  const data = [
    { key: "First", value: 1, description: "first description" },
    { key: "Second", value: 2, description: "second description" },
    { key: "Third", value: 3, description: "third description" },
    { key: "Fourth", value: 4, description: "fourth description" }
  ]

  useEffect(() => {
    console.log(value)
  })

  return (
    <DocTemplate actived="radio" title="Radio">
      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block>
        <BasicTable icon={FaCog} title="<Radio> - properties" data={radioProps} />
      </Block>

      <Block bigMargin>
        <Radio options={data} onChange={(event) => { setValue(event.target.value) }} />
        <Syntax code={example1} />
      </Block>
    </DocTemplate>
  )
}
