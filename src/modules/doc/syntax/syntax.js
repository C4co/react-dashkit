import React from "react"
import { FaCog } from "react-icons/fa"
import {
  Block,
  BlockField,
  Syntax
} from "../../../components"
import { DocTemplate } from "../../../templates"

import {
  import1,
  example1,
  example2,
  example3,
  exampleUsage
} from "./syntax-examples"

export function DocSyntax() {
  return (
    <DocTemplate actived="syntax" title="Syntax">
      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block Icon={FaCog} solid bigMargin title="<Syntax /> - Properties">
        <BlockField title="code">
          string-literal - code example
        </BlockField>

        <BlockField title="lang">
          string - language syntax
        </BlockField>

        <BlockField title="arrow">
          boolean - show arrow at top of component
        </BlockField>
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
