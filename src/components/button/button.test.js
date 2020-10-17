import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render } from "@testing-library/react"

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

  test("Check button with loading", () => {
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

})
