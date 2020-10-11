import React from "react"

import {
  Button,
  Block,
  Syntax,
  BasicTable
} from "../../../components"

import { FaStar, FaCog } from "react-icons/fa"

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
  example12,
  example13
} from "./button-examples"

import { buttonProps } from "./button-props"

export function DocButtons () {
  return (
    <DocTemplate actived="buttons" title="Buttons">

      <Block bigMargin>
        <Syntax arrow={false} code={import1} />
      </Block>

      <Block>
        <BasicTable icon={FaCog} title="<Button> - properties" data={buttonProps} />
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
        <Button info> Info button </Button>
        <Syntax code={example5} />
      </Block>

      <Block bigMargin>
        <Button danger> Danger button </Button>
        <Syntax code={example6} />
      </Block>

      <Block bigMargin>
        <Button success> Success button </Button>
        <Syntax code={example7} />
      </Block>

      <Block bigMargin>
        <Button warn> Warning button </Button>
        <Syntax code={example8} />
      </Block>

      <Block bigMargin>
        <Button loading={true}> Loading </Button>
        <Syntax code={example9} />
      </Block>

      <Block bigMargin>
        <Button loading={true} danger={true}>
          Danger Loading
        </Button>
        <Syntax code={example10} />
      </Block>

      <Block bigMargin>
        <Button loading={true} success={true}>
          Success Loading
        </Button>
        <Syntax code={example11} />
      </Block>

      <Block bigMargin>
        <Button full> Full button </Button>
        <Syntax code={example12} />
      </Block>

      <Block bigMargin>
        <Button full loading> Full loading </Button>
        <Syntax code={example13} />
      </Block>
    </DocTemplate>
  )
}
