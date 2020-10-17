import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render } from "@testing-library/react"

import React from "react"

import { Badge } from "./badge"

import { darken, lighten } from "polished"

import { COLORS } from "../../values"

describe("<Badge/> component", () => {

  test("Check initial render", () => {
    const { getByText } = render(<Badge> badge </Badge>)

    expect(getByText("badge")).toHaveTextContent("badge")
    expect(getByText("badge")).toHaveStyleRule("background-color", lighten(0.32, COLORS.INFO))
    expect(getByText("badge")).toHaveStyleRule("color", darken(0.2, COLORS.INFO))
  })

  test("Check info state with solid style", () => {
    const { getByText } = render(<Badge solid info> badge </Badge>)

    expect(getByText("badge")).toHaveStyleRule("background-color", COLORS.INFO)
    expect(getByText("badge")).toHaveStyleRule("color", COLORS.WHITE)
  })

  test("Check warning state", () => {
    const { getByText } = render(<Badge warn> badge </Badge>)

    expect(getByText("badge")).toHaveStyleRule("background-color", lighten(0.32, COLORS.WARN))
    expect(getByText("badge")).toHaveStyleRule("color", darken(0.2, COLORS.WARN))
  })

  test("Check warnning state with solid style", () => {
    const { getByText } = render(<Badge warn solid> badge </Badge>)

    expect(getByText("badge")).toHaveStyleRule("background-color", COLORS.WARN)
    expect(getByText("badge")).toHaveStyleRule("color", COLORS.WHITE)
  })

  test("Check danger state", () => {
    const { getByText } = render(<Badge danger> badge </Badge>)

    expect(getByText("badge")).toHaveStyleRule("background-color", lighten(0.32, COLORS.DANGER))
    expect(getByText("badge")).toHaveStyleRule("color", darken(0.2, COLORS.DANGER))
  })

  test("Check danger state with solid style", () => {
    const { getByText } = render(<Badge danger solid> badge </Badge>)

    expect(getByText("badge")).toHaveStyleRule("background-color", COLORS.DANGER)
    expect(getByText("badge")).toHaveStyleRule("color", COLORS.WHITE)
  })

  test("Check success state", () => {
    const { getByText } = render(<Badge success> badge </Badge>)

    expect(getByText("badge")).toHaveStyleRule("background-color", lighten(0.32, COLORS.SUCCESS))
    expect(getByText("badge")).toHaveStyleRule("color", darken(0.2, COLORS.SUCCESS))
  })

  test("Check success state with solid style", () => {
    const { getByText } = render(<Badge success solid> badge </Badge>)

    expect(getByText("badge")).toHaveStyleRule("background-color", COLORS.SUCCESS)
    expect(getByText("badge")).toHaveStyleRule("color", COLORS.WHITE)
  })

})

