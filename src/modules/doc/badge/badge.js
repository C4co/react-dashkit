import React from "react"

import {
  Block,
  Syntax,
  BasicTable,
  Badge,
} from "../../../components"

import { DocTemplate } from "../../../templates"

import { FaCog } from "react-icons/fa"

import { badgeProps } from "./badge-props"

import {
  import1,
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8
} from "./badge-example"

export function DocBadge() {
  return (
    <DocTemplate actived="badge" title="Badge">

      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block>
        <BasicTable icon={FaCog} title="<Bagde> - properties" data={badgeProps} />
      </Block>

      <Block bigMargin>
        <Block solid>
          <Badge> 1 </Badge>
          <Badge> 10 </Badge>
          <Badge> 100 </Badge>
          <Badge> 99+ </Badge>
          <Badge> Status </Badge>
        </Block>
        <Syntax code={example1} />
      </Block>

      <Block bigMargin>
        <Block solid>
          <Badge solid> 1 </Badge>
          <Badge solid> 10 </Badge>
          <Badge solid> 100 </Badge>
          <Badge solid> 99+ </Badge>
          <Badge solid> Status </Badge>
        </Block>
        <Syntax code={example2} />
      </Block>

      <Block bigMargin>
        <Block solid>
          <Badge danger> 1 </Badge>
          <Badge danger> 10 </Badge>
          <Badge danger> 100 </Badge>
          <Badge danger> 99+ </Badge>
          <Badge danger> Status </Badge>
        </Block>
        <Syntax code={example3} />
      </Block>

      <Block bigMargin>
        <Block solid>
          <Badge solid danger> 1 </Badge>
          <Badge solid danger> 10 </Badge>
          <Badge solid danger> 100 </Badge>
          <Badge solid danger> 99+ </Badge>
          <Badge solid danger> Status </Badge>
        </Block>
        <Syntax code={example4} />
      </Block>

      <Block bigMargin>
        <Block solid>
          <Badge success> 1 </Badge>
          <Badge success> 10 </Badge>
          <Badge success> 100 </Badge>
          <Badge success> 99+ </Badge>
          <Badge success> Status </Badge>
        </Block>
        <Syntax code={example5} />
      </Block>

      <Block bigMargin>
        <Block solid>
          <Badge success solid> 1 </Badge>
          <Badge success solid> 10 </Badge>
          <Badge success solid> 100 </Badge>
          <Badge success solid> 99+ </Badge>
          <Badge success solid> Status </Badge>
        </Block>
        <Syntax code={example6} />
      </Block>

      <Block bigMargin>
        <Block solid>
          <Badge warn> 1 </Badge>
          <Badge warn> 10 </Badge>
          <Badge warn> 100 </Badge>
          <Badge warn> 99+ </Badge>
          <Badge warn> Status </Badge>
        </Block>
        <Syntax code={example7} />
      </Block>

      <Block bigMargin>
        <Block solid>
          <Badge solid warn> 1 </Badge>
          <Badge solid warn> 10 </Badge>
          <Badge solid warn> 100 </Badge>
          <Badge solid warn> 99+ </Badge>
          <Badge solid warn> Status </Badge>
        </Block>
        <Syntax code={example8} />
      </Block>

    </DocTemplate>
  )
}
