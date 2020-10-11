import React from "react"

import {
  Block,
  BasicTable
} from "../../../components"

import { DocTemplate } from "../../../templates"

import { FaCss3Alt } from "react-icons/fa"

import {
  marginProps,
  paddingProps,
  textAlignProps,
  textTransformProps
} from "./classes-props"

export function DocClasses () {
  return (
    <DocTemplate actived="classes" title="CSS Helpers">

      <Block bigMargin>
        <BasicTable icon={FaCss3Alt} title="Margin" data={marginProps} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCss3Alt} title="Padding" data={paddingProps} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCss3Alt} title="Text align" data={textAlignProps} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCss3Alt} title="Text transform" data={textTransformProps} />
      </Block>

    </DocTemplate>
  )
}
