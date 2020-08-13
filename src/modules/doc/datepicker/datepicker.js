import React, { useState } from "react"
import { FaCog } from "react-icons/fa"
import {
  Block,
  Syntax,
  DatePicker,
  BasicTable
} from "../../../components"

import { DocTemplate } from "../../../templates"

import {
  import1,
  example1,
  example2
} from "./datepicker-examples"

import { datepickerProps } from "./datepcker-props"

export function DocDatepicker() {
  const [date, setDate] = useState(new Date())

  return (
    <DocTemplate actived="datepicker" title="Date Picker">
      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCog} title="<DatePicker> - properties" data={datepickerProps} />
      </Block>

      <Block bigMargin>
        <DatePicker selected={date} onChange={date => {setDate(date)}} />
        <Syntax code={example1} />
      </Block>

      <Block bigMargin>
        <DatePicker error errorMessage="Error message" selected={date} onChange={date => {setDate(date)}} />
        <Syntax code={example2} />
      </Block>
    </DocTemplate>
  )
}
