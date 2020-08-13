import React from "react"
import { FaCog } from "react-icons/fa"
import {
  Block,
  Syntax,
  BasicTable
} from "../../../components"
import { DocTemplate } from "../../../templates"

import {
  import1,
  example1,
  example2,
  example3,
  exampleUsage
} from "./syntax-examples"

import { syntaxProps } from "./syntax-props"

export function DocSyntax() {
  return (
    <DocTemplate actived="syntax" title="Syntax">
      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block>
        <BasicTable icon={FaCog} title="<Syntax> - properties" data={syntaxProps} />
      </Block>

      <Block solid bigMargin>
        Usage
        <Syntax lang="jsx" code={exampleUsage} arrow={false} />
      </Block>

      <Block bigMargin>
        Lang: Javascript
        <Syntax lang="javascript" code={example1} />
      </Block>

      <Block bigMargin>
        Lang: HTML
        <Syntax lang="html" code={example2} />
      </Block>

      <Block bigMargin>
        Lang: CSS
        <Syntax lang="css" code={example3} />
      </Block>
    </DocTemplate>
  )
}
