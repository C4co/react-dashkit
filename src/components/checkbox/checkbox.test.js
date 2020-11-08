import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render, fireEvent } from "@testing-library/react"

import React from "react"

import { Checkbox } from "./checkbox"

describe("<Checkbox /> component", () => {
  test("Check initial render", () => {
    const { getByTestId } = render(<Checkbox label="checkbox component" />)

    expect(getByTestId("checkbox-wrapper")).toBeInTheDocument()
    expect(getByTestId("checkbox-element")).toBeInTheDocument()
    expect(getByTestId("checkbox-label")).toBeInTheDocument()
    expect(getByTestId("checkbox-title")).toBeInTheDocument()
    expect(getByTestId("checkbox-label")).toHaveTextContent("checkbox component")
  })

  test("Check description", () => {
    const { getByTestId } = render(<Checkbox label="checkbox component" description="checkbox description"/>)

    expect(getByTestId("checkbox-description")).toBeInTheDocument()
    expect(getByTestId("checkbox-description")).toHaveTextContent("checkbox description")
  })

  test("Check values", () => {
    let mockValue = null

    const { getByTestId } = render(
      <Checkbox
        label="checkbox component"
        description="checkbox descriptione"
        value={10}
        onChange={event => {
          mockValue = event.target.value
        }}
      />
    )

    expect(getByTestId("checkbox-element")).toHaveAttribute("value", "10")

    fireEvent.click(getByTestId("checkbox-element"))

    expect(mockValue).toBe("10")
  })
})
