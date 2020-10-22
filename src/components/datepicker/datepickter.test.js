import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render } from "@testing-library/react"

import React, { useState } from "react"

import { DatePicker } from "./datepicker"

function MockDatePicker(props){
  const [date, setDate] = useState(new Date())

  return (
    <DatePicker
      {...props}
      selected={date}
      onChange={date => {setDate(date)}}
    />
  )
}

describe("<Datepicker/> component", () => {
  test("Check initial render", () => {
    const { getByTestId, queryByTestId } = render(<MockDatePicker/>)

    expect( getByTestId("datepicker-wrapper") ).toBeInTheDocument()
    expect( getByTestId("datepicker-content") ).toBeInTheDocument()
    expect( getByTestId("datepicker-icon") ).toBeInTheDocument()
    expect( queryByTestId("datepicker-error") ).not.toBeInTheDocument()
    expect( queryByTestId("datepicker-label") ).not.toBeInTheDocument()
  })

  test("Check the label", () => {
    const { getByTestId } = render(<MockDatePicker label="datepicker label"/>)

    expect(getByTestId("datepicker-label")).toBeInTheDocument()
    expect(getByTestId("datepicker-label")).toHaveTextContent("datepicker label")
  })

  test("Check error message", () => {
    const { getByTestId } = render(<MockDatePicker error errorMessage="datepicker error"/>)

    expect(getByTestId("datepicker-error")).toBeInTheDocument()
    expect(getByTestId("datepicker-error")).toHaveTextContent("datepicker error")
  })

})
