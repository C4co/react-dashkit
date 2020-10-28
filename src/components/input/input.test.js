import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render } from "@testing-library/react"

import React from "react"

import { Input } from "./input"

import { FaStar } from "react-icons/fa"

describe("<Input/> component", () => {

  test("Check initial render", () => {
    const { getByTestId } = render(<Input/>)

    expect(getByTestId("input-wrapper")).toBeInTheDocument()
    expect(getByTestId("input-content")).toBeInTheDocument()
    expect(getByTestId("input-component")).toBeInTheDocument()
  })

  test("Check input label", () => {
    const { getByTestId } = render(<Input label="input label" />)

    expect(getByTestId("input-label")).toBeInTheDocument()
    expect(getByTestId("input-label")).toHaveTextContent("input label")
  })

  test("Check input icon", () => {
    const { getByTestId } = render(<Input icon={FaStar} />)

    expect(getByTestId("input-icon")).toBeInTheDocument()
  })

  test("Check input error state", () => {
    const { getByTestId } = render(<Input error errorMessage="input error message"/>)

    expect(getByTestId("input-error")).toBeInTheDocument()
    expect(getByTestId("input-error")).toHaveTextContent("input error message")
  })

  test("Check custom input", () => {
    const { getByTestId } = render(<Input InputComponent={() => <input placeholder="custom input" /> }/>)

    expect(getByTestId("input-custom-component")).toBeInTheDocument()
  })

})