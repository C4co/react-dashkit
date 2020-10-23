import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render } from "@testing-library/react"

import React from "react"

import { Form } from "./forms"

import { FaStar } from "react-icons/fa"

describe("<Form /> components", () => {
  test("Check initial render", () => {
    const { getByTestId } = render(<Form />)

    expect(getByTestId("form-wrapper"))
    expect(getByTestId("form-content"))
  })

  test("Check form title", () => {
    const { getByTestId } = render(<Form title="Form title"/>)

    expect(getByTestId("form-header")).toBeInTheDocument()
    expect(getByTestId("form-title")).toBeInTheDocument()
    expect(getByTestId("form-title")).toHaveTextContent("Form title")
  })

  test("Check form icon", () => {
    const { getByTestId } = render(<Form icon={FaStar} />)

    expect(getByTestId("form-header")).toBeInTheDocument()
    expect(getByTestId("form-icon")).toBeInTheDocument()
  })

  test("Check error message", () => {
    const { getByTestId } = render(<Form error errorTitle="Form Error" errorMessage="Error message" />)

    expect(getByTestId("alert-wrapper")).toBeInTheDocument()
    expect(getByTestId("alert-title")).toHaveTextContent("Form Error")
    expect(getByTestId("alert-text")).toHaveTextContent("Error message")
  })
})
