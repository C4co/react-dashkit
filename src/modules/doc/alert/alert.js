import React from "react"

import {
  Block,
  Syntax,
  BasicTable,
  Alert,
  Column
} from "../../../components"

import { DocTemplate } from "../../../templates"

import { FaCog } from "react-icons/fa"

import { alertProps } from "./alert-props"

import { import1, example1, example2, example3, example4 } from "./alert-examples"

export function DocAlert() {
  return (
    <DocTemplate actived="alert" title="Alert">
      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCog} title="<Alert> - properties" data={alertProps} />
      </Block>

      <Block bigMargin>
        <Column gap={10}>
          <Alert title="Info"> Default alert </Alert>
          <Alert title="Info" solid> Default solid alert </Alert>
        </Column>
        <Syntax code={example1} />
      </Block>

      <Block bigMargin>
        <Column gap={10}>
          <Alert title="Success" success> Success alert </Alert>
          <Alert title="Success" success solid> Solid success alert </Alert>
        </Column>
        <Syntax code={example2} />
      </Block>

      <Block bigMargin>
        <Column gap={10}>
          <Alert title="Danger" danger> Danger alert </Alert>
          <Alert title="Danger" danger solid> Solid danger alert </Alert>
        </Column>
        <Syntax code={example3} />
      </Block>

      <Block bigMargin>
        <Column gap={10}>
          <Alert title="Warnning" warn> Warn alert </Alert>
          <Alert title="Warnning" warn solid> Solid warn alert </Alert>
        </Column>
        <Syntax code={example4} />
      </Block>

    </DocTemplate>
  )
}
