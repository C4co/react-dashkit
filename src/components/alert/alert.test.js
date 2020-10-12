import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render } from "@testing-library/react"

import React from "react"

import { Alert } from "./alert"

import { lighten, darken } from "polished"

import { COLORS } from "../../values"

describe("<Alert /> component", () => {
  test("Check initial rendering", () => {
    const { getByTestId, queryByTestId } = render(<Alert> testing alert component </Alert>)

    expect(getByTestId("alert-wrapper")).toBeInTheDocument()
    expect(getByTestId("alert-wrapper")).toHaveStyleRule("background-color", lighten(0.25, COLORS.INFO))
    expect(getByTestId("alert-wrapper")).toHaveStyleRule("color", darken(0.3, COLORS.INFO))
    expect(getByTestId("alert-icon")).toBeInTheDocument()
    expect(getByTestId("alert-text")).toBeInTheDocument()
    expect(getByTestId("alert-text")).toHaveTextContent("testing alert component")
    expect(queryByTestId("alert-title")).not.toBeInTheDocument()
    expect(getByTestId("alert-icon").getAttribute("data-icon")).toBe("info")
  })

  test("Check the title", () => {
    const { getByTestId } = render(<Alert title="alert title"> testing alert component </Alert>)

    expect(getByTestId("alert-title")).toBeInTheDocument()
    expect(getByTestId("alert-title")).toHaveTextContent("alert title")
  })

  test("Check danger state", () => {
    const { getByTestId } = render(<Alert danger title="danger state"> testing alert component </Alert>)

    expect(getByTestId("alert-wrapper")).toHaveStyleRule("background-color", lighten(0.25, COLORS.DANGER))
    expect(getByTestId("alert-wrapper")).toHaveStyleRule("color", darken(0.2, COLORS.DANGER))
    expect(getByTestId("alert-icon").getAttribute("data-icon")).toBe("danger")
  })

  test("Check danger state with solid style", () => {
    const { getByTestId } = render(<Alert danger solid title="danger state"> testing alert component </Alert>)

    expect(getByTestId("alert-wrapper")).toHaveStyleRule("background-color", COLORS.DANGER)
    expect(getByTestId("alert-wrapper")).toHaveStyleRule("color", COLORS.WHITE)
  })

  test("Check success state", () => {
    const { getByTestId } = render(<Alert success title="success state"> testing alert component </Alert>)

    expect(getByTestId("alert-wrapper")).toHaveStyleRule("background-color", lighten(0.25, COLORS.SUCCESS))
    expect(getByTestId("alert-wrapper")).toHaveStyleRule("color", darken(0.2, COLORS.SUCCESS))
    expect(getByTestId("alert-icon").getAttribute("data-icon")).toBe("success")
  })

  test("Check success state with solid styled", () => {
    const { getByTestId } = render(<Alert success solid title="success state" > testing alert component </Alert>)

    expect(getByTestId("alert-wrapper")).toHaveStyleRule("background-color", COLORS.SUCCESS)
    expect(getByTestId("alert-wrapper")).toHaveStyleRule("color", COLORS.WHITE)
  })

  test("Check warning state", () => {
    const { getByTestId } = render(<Alert warn title="warnning state"> testing alert component </Alert>)

    expect(getByTestId("alert-wrapper")).toHaveStyleRule("background-color", lighten(0.25, COLORS.WARN))
    expect(getByTestId("alert-wrapper")).toHaveStyleRule("color", darken(0.2, COLORS.WARN))
    expect(getByTestId("alert-icon").getAttribute("data-icon")).toBe("warning")
  })

  test("Check warning state with solid style", () => {
    const { getByTestId } = render(<Alert warn solid title="warning state"> testing alert component </Alert>)

    expect(getByTestId("alert-wrapper")).toHaveStyleRule("background-color", COLORS.WARN)
    expect(getByTestId("alert-wrapper")).toHaveStyleRule("color", COLORS.WHITE)
  })
})
