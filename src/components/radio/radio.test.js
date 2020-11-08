import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import "jest-styled-components"
import { render, fireEvent } from "@testing-library/react"

import React from "react"

import { Radio } from "./radio"

describe("<Radio component/>", () => {

  const data = [
    { key: "First", value: 1, description: "First description" },
    { key: "Second", value: 2, description: "Second description" },
    { key: "Third", value: 3, description: "Third description" },
    { key: "Fourth", value: 4, description: "Fourth description" }
  ]

  test("Check initial render", () => {
    const { getByTestId, getAllByTestId } = render(<Radio options={data} />)

    expect(getByTestId("radio-group")).toBeInTheDocument()

    getAllByTestId("radio-element").forEach(element => {
      expect(element).toBeInTheDocument()
    })
  })

  test("Check labels, title and description", () => {
    const { getAllByTestId } = render(<Radio options={data} /> )

    getAllByTestId("radio-element-label").forEach(element => {
      expect(element).toBeInTheDocument()
    })

    getAllByTestId("radio-element-title").forEach((element, index) => {
      expect(element).toBeInTheDocument()
      expect(element).toHaveTextContent(data[index].key)
    })

    getAllByTestId("radio-element-description").forEach((element, index) => {
      expect(element).toBeInTheDocument()
      expect(element).toHaveTextContent(data[index].description)
    })
  })

  test("Check input value", () => {
    const { getAllByTestId } = render(<Radio options={data} />)

    getAllByTestId("radio-element-input").forEach((element, index) => {
      expect(element).toBeInTheDocument()
      expect(element).toHaveProperty("value", data[index].value.toString())
    })
  })

  test("Check changes on inputs", () => {
    let flag = null

    const { getAllByTestId } = render(
      <Radio options={data} onChange={(value) => { flag = value.target.value }}/>
    )

    getAllByTestId("radio-element-input").forEach((element, index) => {
      fireEvent.click(element)
      expect(flag).toBe(data[index].value.toString())
    })
  })

})
