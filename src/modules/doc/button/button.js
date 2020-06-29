import React from "react"

import {
  Button,
  Block,
  BlockField,
  Syntax,
  A,
  Text
} from "../../../components"

import { FaStar, FaCog, FaDiceD6 } from "react-icons/fa"

import { DocTemplate } from "../../../templates"

import {
  import1,
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
  example9,
  example10,
  example11,
} from "./button-examples"

export function DocButtons () {
  return (
    <DocTemplate actived="buttons" title="Buttons">

      <Block bigMargin>
        <Syntax arrow={false} code={import1}/>
      </Block>

      <Block Icon={FaCog} bigMargin title="properties" solid>
        <BlockField title="iconLeft">
          react-icon - Inset a icon in left side of the button
        </BlockField>

        <BlockField title="iconRight">
          react-icon - Inset a icon in left side of the button
        </BlockField>

        <BlockField title="loading">
          boolean - button on loadmode
        </BlockField>

        <BlockField title="danger">
          boolean - button on danger mode
        </BlockField>

        <BlockField title="success">
          boolean - button on success mode
        </BlockField>

        <BlockField title="full">
          boolean - button on full mode
        </BlockField>
      </Block>

      <Block Icon={FaDiceD6} solid bigMargin title="Dependencies">
        <BlockField>
          <Text>
            <A href="https://react-icons.github.io/react-icons/"> React icons </A>
          </Text>
        </BlockField>
      </Block>

      <Block bigMargin>
        <Button> Normal Button </Button>
        <Syntax code={example1} />
      </Block>

      <Block bigMargin>
        <Button iconLeft={FaStar}> Icon left </Button>
        <Syntax code={example2} />
      </Block>

      <Block bigMargin>
        <Button iconRight={FaStar}> Icon right </Button>
        <Syntax code={example3} />
      </Block>

      <Block bigMargin>
        <Button iconLeft={FaStar} iconRight={FaStar}> Double icon </Button>
        <Syntax code={example4} />
      </Block>

      <Block bigMargin>
        <Button danger> Danger button </Button>
        <Syntax code={example5} />
      </Block>

      <Block bigMargin>
        <Button success> Success button </Button>
        <Syntax code={example6} />
      </Block>

      <Block bigMargin>
        <Button loading={true}> Loading </Button>
        <Syntax code={example7} />
      </Block>

      <Block bigMargin>
        <Button loading={true} danger={true}> Danger Loading </Button>
        <Syntax code={example8} />
      </Block>

      <Block bigMargin>
        <Button loading={true} success={true}> Success Loading </Button>
        <Syntax code={example9} />
      </Block>

      <Block bigMargin>
        <Button full> Full button </Button>
        <Syntax code={example10} />
      </Block>

      <Block bigMargin>
        <Button full loading> Full loading </Button>
        <Syntax code={example11} />
      </Block>

    </DocTemplate>
  )
}
