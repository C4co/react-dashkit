import React, { useState } from "react"
import { FaCog } from "react-icons/fa"
import {
  Block,
  Syntax,
  DatePicker,
  Text,
  A
} from "../../../components"
import { DocTemplate } from "../../../templates"

import {
  import1,
  example1
} from "./datepicker-examples"

export function DocDatepicker() {
  const [date, setDate] = useState(new Date())

  return (
    <DocTemplate actived="datepicker" title="Date Picker">
      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block Icon={FaCog} solid bigMargin title="<DatePicker /> - Properties">
        <Text>
          { `<DatePicker /> extends react-date-picker`} see all details here ->
          <A href="https://reactdatepicker.com/"> React DatePicker </A>
        </Text>
      </Block>

      <Block bigMargin>
        <DatePicker selected={date} onChange={date => {setDate(date)}} />
        <Syntax code={example1} />
      </Block>

    </DocTemplate>
  )
}
