import React from "react"
import {
  Block,
  Syntax,
  Text,
  Button,
  BasicTable
} from "../../../components"

import { DocTemplate } from "../../../templates"

import { FaCog, FaHeart } from "react-icons/fa"

import {
  import1,
  example1,
  example2,
  example3,
  example5,
  example6,
  example7
} from "./block-examples"

import { blockProps } from "./block-props"

export function DocBlock () {
  return (
    <DocTemplate actived="block" title="Block">
      <Block bigMargin>
        <Syntax arrow={false} code={import1} />
      </Block>

      <Block>
        <BasicTable icon={FaCog} title="<BasicTable> - properties" data={blockProps} />
      </Block>

      <Block bigMargin>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Ab, quasi perferendis. Natus rem adipisci facere in, expedita
          fugit, voluptates quam facilis quasi ex qui voluptatem
          perspiciatis suscipit nisi cupiditate beatae!
        </Text>
        <Syntax code={example1} />
      </Block>

      <Block bigMargin>
        <Block solid>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ab, quasi perferendis. Natus rem adipisci facere in, expedita
            fugit, voluptates quam facilis quasi ex qui voluptatem
            perspiciatis suscipit nisi cupiditate beatae!
          </Text>
        </Block>
        <Syntax code={example2} />
      </Block>

      <Block bigMargin>
        <Block solid title="Block title">
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ab, quasi perferendis. Natus rem adipisci facere in, expedita
            fugit, voluptates quam facilis quasi ex qui voluptatem
            perspiciatis suscipit nisi cupiditate beatae!
          </Text>
        </Block>
        <Syntax code={example3} />
      </Block>

      <Block bigMargin>
        <Block solid icon={FaHeart} title="Block title">
          Block title with icon
        </Block>
        <Syntax code={example5} />
      </Block>

      <Block bigMargin>
        <Block
          title="Block title"
          solid
          footer={
            <Button> Footer button </Button>
          }>
          Content
        </Block>
        <Syntax code={example6} />
      </Block>

      <Block bigMargin>
        <Block title="Block title" solid col2>
          {/* Column 1 */}
          <div>
            <h1> Column 1 </h1><br />
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolor necessitatibus eaque
              excepturi rerum neque repudiandae
              voluptatem cum vero.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h1> Column 2 </h1><br />
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolor necessitatibus eaque
              excepturi rerum neque repudiandae
              voluptatem cum vero.
            </p>
          </div>
        </Block>
        <Syntax code={example7} />
      </Block>

    </DocTemplate>
  )
}
