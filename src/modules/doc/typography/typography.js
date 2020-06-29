import React from "react"

import {
  Block,
  Syntax,
  A,
  Text,
  Title,
  SubTitle
} from "../../../components"

import { DocTemplate } from "../../../templates"

import {
  import1,
  example1,
  example2,
  example3,
  example4,
  example5
} from "./typography-examples"

export function DocTypography(){

  return (
    <DocTemplate actived="typography" title="Typography">
      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block bigMargin>
        <Block solid>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Harum praesentium quia reprehenderit quod qui sed officia
            iure fugiat, excepturi, aut omnis est sequi labore iste
            iusto, voluptatem molestiae quis quasi!
          </Text>
        </Block>
        <Syntax code={example1}/>
      </Block>

      <Block bigMargin>
        <Block solid>
          <>
            <Text>
              Tech forum: <A href="https://news.ycombinator.com/"> Hacker news </A>
            </Text>

            <Text>
              Dev articles: <A href="https://dev.to/"> DEV.to </A>
            </Text>

            <Text>
              Design content for non designers: <A href="https://nodesign.dev/"> NoDesign </A>
            </Text>

            <Text>
              Design resources: <A href="https://undesign.learn.uno/"> UnDesign </A>
            </Text>
          </>
        </Block>
        <Syntax code={example2}/>
      </Block>

      <Block bigMargin>
        <Block solid>
          <Title> Title </Title>
        </Block>
        <Syntax code={example3}/>
      </Block>

      <Block bigMargin>
        <Block solid>
          <SubTitle> SubTitle </SubTitle>
        </Block>
        <Syntax code={example4}/>
      </Block>

      <Block>
        <Block solid>
          <>
            <Title> Lorem Ipsum </Title>
            <SubTitle> What is Lorem Ipsum? </SubTitle>
            <Text>
              <A href="https://www.lipsum.com/" target="_blank">Lorem Ipsum</A> is
              simply dummytext of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.
            </Text>
          </>
        </Block>
        <Syntax code={example5}/>
      </Block>

    </DocTemplate>
  )

}
