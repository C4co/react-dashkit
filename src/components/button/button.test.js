import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { getByTestId, render } from "@testing-library/react"

import React from "react"

import { Button } from "./button"

import { COLORS } from "../../values"

import { FaStar } from "react-icons/fa"

describe("<Button /> component", () => {
  test("Check initial render", () => {
    const { getByTestId } = render(<Button> button component </Button>)

    expect(getByTestId("button-wrapper")).toBeInTheDocument()
    expect(getByTestId("button-wrapper")).toHaveTextContent("button component")
  })

  test("Check loading state", () => {
    const { getByTestId } = render(<Button loading> button component </Button>)

    expect(getByTestId("button-spinner")).toBeInTheDocument()
    expect(getByTestId("button-wrapper")).toHaveStyleRule("opacity", "0.7")
    expect(getByTestId("button-wrapper")).toHaveStyleRule("cursor", "not-allowed")
  })

  test("Check left icon", () => {
    const { getByTestId } = render(<Button iconLeft={FaStar} iconRight={FaStar} > button component </Button>)

    expect(getByTestId("button-icon-left")).toBeInTheDocument()
    expect(getByTestId("button-icon-right")).toBeInTheDocument()
  })

  test("Check info state", () => {
    const { getByTestId } = render(<Button info> button component </Button>)

    expect(getByTestId("button-wrapper")).toHaveStyleRule("background-color", COLORS.INFO)
    expect(getByTestId("button-wrapper")).toHaveStyleRule("color", COLORS.WHITE)
  })

  test("Check danger state", () => {
    const { getByTestId } = render(<Button danger> button component </Button>)

    expect(getByTestId("button-wrapper")).toHaveStyleRule("background-color", COLORS.DANGER)
    expect(getByTestId("button-wrapper")).toHaveStyleRule("color", COLORS.WHITE)
  })

  test("Check warn state", () => {
    const { getByTestId } = render(<Button warn> button component </Button>)

    expect(getByTestId("button-wrapper")).toHaveStyleRule("background-color", COLORS.WARN)
    expect(getByTestId("button-wrapper")).toHaveStyleRule("color", COLORS.WHITE)
  })

  test("Check success state", () => {
    const { getByTestId } = render(<Button success> button component </Button>)

    expect(getByTestId("button-wrapper")).toHaveStyleRule("background-color", COLORS.SUCCESS)
    expect(getByTestId("button-wrapper")).toHaveStyleRule("color", COLORS.WHITE)
  })

  test("Check full width style", () => {
    const { getByTestId } = render(<Button full> button component </Button>)

    expect(getByTestId("button-wrapper")).toHaveStyleRule("width", "100%")
  })
})
