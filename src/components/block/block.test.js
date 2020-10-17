import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render } from "@testing-library/react"

import React from "react"

import { Block } from "./block"

import { COLORS } from "../../values"

import { FaStar } from "react-icons/fa"

describe("<Block /> component", () => {

  test("Check initial render", () => {
    const { getByTestId } = render(<Block> <div> block component </div> </Block>)

    expect(getByTestId("block-wrapper")).toBeInTheDocument()
    expect(getByTestId("block-content")).toBeInTheDocument()
    expect(getByTestId("block-content")).toHaveTextContent("block component")
  })

  test("Check solid style", () => {
    const { getByTestId } = render(<Block solid> <div> block component </div> </Block>)

    expect(getByTestId("block-wrapper")).toHaveStyleRule("background-color", COLORS.BLOCK_BACKGROUND)
    expect(getByTestId("block-content")).toHaveStyleRule("padding", "20px")
  })

  test("Check title", () => {
    const { getByTestId } = render(<Block solid title="block title"> <div> block component </div> </Block>)

    expect(getByTestId("block-header")).toBeInTheDocument()
    expect(getByTestId("block-title")).toBeInTheDocument()
    expect(getByTestId("block-title")).toHaveTextContent("block title")
  })

  test("Check icon", () => {
    const { getByTestId } = render(<Block solid title="block title" icon={FaStar}> <div> block component </div> </Block>)

    expect(getByTestId("block-icon")).toBeInTheDocument()
  })

  test("Check block without margin", () => {
    const { getByTestId } = render(<Block noMargin> <div> block component </div> </Block>)

    expect(getByTestId("block-wrapper")).toHaveStyleRule("margin-bottom", "0px")
  })

  test("Check block with big margin", () => {
    const { getByTestId } = render(<Block bigMargin> <div> block component </div> </Block>)

    expect(getByTestId("block-wrapper")).toHaveStyleRule("margin-bottom", "50px")
    expect(getByTestId("block-wrapper")).toHaveStyleRule("margin-top", "50px")
  })

  test("Check footer", () => {
    const { getByTestId } = render(
      <Block solid footer={ <footer> <p> footer content </p> </footer> }>
        <div> block component </div>
      </Block>
    )

    expect(getByTestId("block-footer")).toBeInTheDocument()
    expect(getByTestId("block-footer")).toHaveTextContent("footer content")
  })

  test("Check content with two columns", () => {
    const { getByTestId } = render(<Block col2> <div> block component </div> </Block>)

    expect(getByTestId("block-content")).toHaveStyleRule("display", "grid")
    expect(getByTestId("block-content")).toHaveStyleRule("grid-template-columns", "1fr 1fr")
    expect(getByTestId("block-content")).toHaveStyleRule("column-gap", "20px")
  })

})

