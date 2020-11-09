import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render, fireEvent } from "@testing-library/react"

import React from "react"

import { InputPassword } from "./input-password"

import { COLORS } from "../../values"

describe("<InputPassword /> component", () => {
  test("Check initial render", () => {
    const { getByTestId, queryByTestId } = render(<InputPassword />)

    expect(getByTestId("password-container")).toBeInTheDocument()
    expect(getByTestId("password-content")).toBeInTheDocument()
    expect(getByTestId("password-input")).toBeInTheDocument()
    expect(getByTestId("password-icon-hide")).toBeInTheDocument()
    expect(queryByTestId("password-icon-show")).not.toBeInTheDocument()

    // checking the type of input
    expect(getByTestId("password-input")).toHaveAttribute("type", "password")
  })

  test("Check error state", () => {
    const { getByTestId } = render(<InputPassword error errorMessage="erro message"/>)

    expect(getByTestId("password-error")).toBeInTheDocument()
    expect(getByTestId("password-input")).toHaveStyleRule("border", `solid ${COLORS.DANGER} 1px`)
    expect(getByTestId("password-error")).toHaveTextContent("erro message")
  })

  test("Check input label", () => {
    const { getByTestId } = render(<InputPassword label="password"/>)

    expect(getByTestId("password-label")).toBeInTheDocument()
    expect(getByTestId("password-label")).toHaveTextContent("password")
  })

  test("Check input show and hide password", () => {
    const { getByTestId, queryByTestId } = render(<InputPassword />)

    fireEvent.click(getByTestId("password-icon-hide"))

    expect(queryByTestId("password-icon-hide")).not.toBeInTheDocument()
    expect(getByTestId("password-icon-show")).toBeInTheDocument()
    expect(getByTestId("password-input")).toHaveAttribute("type", "text")

    fireEvent.click(getByTestId("password-icon-show"))

    expect(queryByTestId("password-icon-show")).not.toBeInTheDocument()
    expect(getByTestId("password-icon-hide")).toBeInTheDocument()
    expect(getByTestId("password-input")).toHaveAttribute("type", "password")
  })
})
