import React from "react"

import { FaCog, FaUserAstronaut, FaUserNinja } from "react-icons/fa"

import {
  Block,
  Syntax,
  DynamicTable,
  BasicTable
} from "../../../components"

import { DocTemplate } from "../../../templates"

import {
  import1,
  example1,
  example2,
  example3,
  example4
} from "./table-example"

import { basicTableProps, dynamicTableProps } from "./table-props"

export function DocTable () {
  const data = [
    {
      ID: 11,
      Name: "Samuel Fleming",
      Brithday: "08/05/1966",
      Address: "6517 Green Rd",
      Phone: "(039)-678-3922"
    },
    {
      ID: 12,
      Name: "Judson Kub Sr.",
      Brithday: "12/01/1995",
      Address: "4794 E Pecan St",
      Phone: "(513)-509-0129"
    },
    {
      ID: 13,
      Name: "Patrick West",
      Brithday: "11/07/1985",
      Address: "8510 James St",
      Phone: "(683)-472-0529"
    }
  ]

  function onSelectItemsHandle (items) {
    console.log(items)
  }

  return (
    <DocTemplate actived="table" title="Table">
      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCog} title="<BasicTable> - properties" data={basicTableProps} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCog} title="<DynamicTable> - properties" data={dynamicTableProps} />
      </Block>

      <Block bigMargin>
        <BasicTable title="The title"/>
        <Syntax description="BasicTable component without data" code={example1} />
      </Block>

      <Block bigMargin>
        <DynamicTable title="The title" />
        <Syntax description="DynamicTable component without data" code={example2} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaUserNinja} title="Basic table" data={data} />
        <Syntax code={example3} />
      </Block>

      <Block bigMargin>
        <DynamicTable icon={FaUserAstronaut} title="Dynamic table" onSelectItems={onSelectItemsHandle} data={data} />
        <Syntax code={example4} />
      </Block>
    </DocTemplate>
  )
}
