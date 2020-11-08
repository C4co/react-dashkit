import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"
import { render } from "@testing-library/react"

import React from "react"

import { Spinner } from "./spinner"

describe("<Spinner/> component", () => {

  test("Check initial render", () => {
    const { getByTestId } = render(<Spinner/>)

    expect(getByTestId("spinner-wrapper")).toBeInTheDocument()
    expect(getByTestId("spinner-element")).toBeInTheDocument()
    expect(getByTestId("spinner-circle")).toBeInTheDocument()
  })

  test("Check spinner color", () => {
    const { getByTestId } = render(<Spinner color="red" size="100"/>)

    expect(getByTestId("spinner-circle")).toHaveAttribute("stroke", "red")
  })
})
