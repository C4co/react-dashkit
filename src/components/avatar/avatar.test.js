import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render } from "@testing-library/react"

import React from "react"

import { Avatar } from "./avatar"

import { COLORS } from "../../values"

describe("<Avatar/> component", () => {

  test("Check initial render", () => {
    const { getByTestId } = render(<Avatar image="https://randomuser.me/api/portraits/women/44.jpg" />)

    expect(getByTestId("avatar-wrapper")).toBeInTheDocument()
    expect(getByTestId("avatar-image")).toBeInTheDocument()
  })

  test("Check size", () => {
    const { getByTestId } = render(<Avatar size="20px" image="https://randomuser.me/api/portraits/women/44.jpg"/>)

    expect(getByTestId("avatar-wrapper")).toHaveStyleRule("width", "20px")
    expect(getByTestId("avatar-wrapper")).toHaveStyleRule("height", "20px")
  })

  test("Check size", () => {
    const { getByTestId } = render(<Avatar size="100px" image="https://randomuser.me/api/portraits/women/44.jpg"/>)

    expect(getByTestId("avatar-wrapper")).toHaveStyleRule("width", "100px")
    expect(getByTestId("avatar-wrapper")).toHaveStyleRule("height", "100px")
  })

  test("Check the badge", () => {
    const { getByTestId } = render(<Avatar size="100px" badge image="https://randomuser.me/api/portraits/women/44.jpg" />)

    expect(getByTestId("avatar-badge")).toBeInTheDocument()
    expect(getByTestId("avatar-badge")).toHaveStyleRule("background-color", COLORS.INFO)
  })

  test("Check badge colors", () => {
    const { getByTestId } = render(<Avatar size="100px" badgeColor="red" badge image="https://randomuser.me/api/portraits/women/44.jpg" />)

    expect(getByTestId("avatar-badge")).toHaveStyleRule("background-color", "red")
  })

})