import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"

import { render, fireEvent } from "@testing-library/react"

import React from "react"

import { Select } from "./select"

describe("<Select/> component", () => {
  const data = [
    { key: "first", value: 1 },
    { key: "second", value: 2 },
    { key: "third", value: 3 },
    { key: "fourth", value: 4 }
  ]

  test("Check initial render", () => {
    const { getByTestId, getAllByTestId } = render(<Select options={data} />)

    expect(getByTestId("select-container")).toBeInTheDocument()
    expect(getByTestId("select-content")).toBeInTheDocument()
    expect(getByTestId("select-arrow")).toBeInTheDocument()
    expect(getByTestId("select-wrapper")).toBeInTheDocument()

    // options
    getAllByTestId("select-option").forEach(element => {
      expect(element).toBeInTheDocument()
    })
  })

  test("Check options", () => {
    const { getAllByTestId } = render(<Select options={data} />)

    getAllByTestId("select-option").forEach((element, index) => {
      expect(element).toHaveTextContent(data[index].key)
      expect(element).toHaveProperty("value", data[index].value.toString())
    })
  })

  test("Check placeholder", () => {
    const { getByTestId, getByText } = render(<Select options={data} placeholder="select placeholder" />)

    expect(getByText("select placeholder")).toBeInTheDocument()
    expect(getByTestId("select-placeholder")).toBeInTheDocument()
    expect(getByTestId("select-placeholder")).toHaveTextContent("select placeholder")
  })

  test("Check changes", () => {
    let mockValue = null

    const { getAllByTestId, getByTestId } = render(
      <Select
        options={data}
        placeholder="select placeholder" onChange={event => { mockValue = event.target.value }}
      />
    )

    getAllByTestId("select-option").forEach((element, index) => {
      fireEvent.change(getByTestId("select-wrapper"), { target: { value: data[index].value } })
      expect(mockValue).toBe(data[index].value.toString())
    })
  })

  test("Check select error without data", () => {
    const { getByTestId } = render(<Select />)

    expect(getByTestId("alert-wrapper")).toBeInTheDocument()
    expect(getByTestId("alert-text")).toHaveTextContent("Select need valid options")
  })
})
