import React from "react"
import { FaGithub } from "react-icons/fa"
import {
  Block,
  A,
  Text
} from "../../../components"
import { DocTemplate } from "../../../templates"
import styled from "styled-components"

const Github = styled(FaGithub)`
  font-size: 60px;
  color: black;
  display: block;
  margin: 0 auto;
`

export function DocHome() {
  return (
    <DocTemplate actived="home" title="React dashkit">

      <Block bigMargin>
        <a href="http://github.com">
          <Github />
        </a>
      </Block>

      <Block solid bigMargin>
        <Text className="no-margin"> Ui kit based on React JS focused to create simple dashboards to small projects </Text>
      </Block>

      <Block solid bigMargin title="What's inside?">
        <Text> <A href="#"> React create app </A>  </Text>
        <Text> <A href="#"> React snap </A>  </Text>
        <Text> <A href="#"> Styled Components </A>  </Text>
        <Text className="no-margin"> <A href="#"> React query </A>  </Text>
      </Block>
    </DocTemplate>
  )
}
