import React from "react"

import {
  Block,
  Syntax,
  BasicTable,
  Column,
  Avatar
} from "../../../components"

import { DocTemplate } from "../../../templates"

import { FaCog } from "react-icons/fa"

import { import1, example1, example2 } from "./avatar-examples"

import { avatarProps } from "./avatar-props"

export function DocAvatar () {
  const photo = "https://randomuser.me/api/portraits/women/47.jpg"

  return (
    <DocTemplate actived="avatar" title="Avatar">
      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCog} title="<Alert> - properties" data={avatarProps} />
      </Block>

      <Block bigMargin>
        <Block solid>
          <Column gap={20}>
            <Avatar />
            <Avatar image={photo} />
          </Column>
        </Block>
        <Syntax code={example1} />
      </Block>

      <Block bigMargin>
        <Block solid>
          <Column gap={20} col={5} alignItems="center">
            <Avatar size="50px" badge image={photo} />
            <Avatar size="60px" badge badgeColor="#FFBB48" image={photo} />
            <Avatar size="70px" badge badgeColor="#D0109D" image={photo} />
            <Avatar size="80px" badge badgeColor="#10D026" image={photo} />
            <Avatar size="90px" badge badgeColor="#000000" image={photo} />
          </Column>
        </Block>
        <Syntax code={example2} />
      </Block>

    </DocTemplate>
  )
}
