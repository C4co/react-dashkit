import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"
import { render } from "@testing-library/react"
import React from "react"
import { BasicTable } from "./basic-table"
import { FaStar } from "react-icons/fa"

describe("<BasicTable/> component", () => {
  const data = [
    {
      ID: 11,
      Name: "Samuel Fleming",
      Brithday: "08/05/1966",
      Address: "6517 Green Rd",
      Phone: "(039)-678-3922"
    },
    {
      ID: 12,
      Name: "Judson Kub Sr.",
      Brithday: "12/01/1995",
      Address: "4794 E Pecan St",
      Phone: "(513)-509-0129"
    },
    {
      ID: 13,
      Name: "Patrick West",
      Brithday: "11/07/1985",
      Address: "8510 James St",
      Phone: "(683)-472-0529"
    }
  ]

  const dataKeys = [ "ID", "Name", "Brithday", "Address", "Phone"]

  const values = [
    "11",
    "Samuel Fleming",
    "08/05/1966",
    "6517 Green Rd",
    "(039)-678-3922",
    "12",
    "Judson Kub Sr.",
    "12/01/1995",
    "4794 E Pecan St",
    "(513)-509-0129",
    "13",
    "Patrick West",
    "11/07/1985",
    "8510 James St",
    "(683)-472-0529"
  ]

  test("Check initial render", () => {
    const { getByTestId } = render(<BasicTable data={data} />)

    expect(getByTestId("basic-container")).toBeInTheDocument()
    expect(getByTestId("basic-content")).toBeInTheDocument()
    expect(getByTestId("basic-table-content")).toBeInTheDocument()
    expect(getByTestId("basic-table-head")).toBeInTheDocument()
    expect(getByTestId("basic-table-labels")).toBeInTheDocument()
    expect(getByTestId("basic-table-body")).toBeInTheDocument()
  })

  test("Check table title", () => {
    const { getByTestId } = render(<BasicTable data={data} title="Basic table title" />)

    expect(getByTestId("basic-header")).toBeInTheDocument()
    expect(getByTestId("basic-title")).toBeInTheDocument()
    expect(getByTestId("basic-title")).toHaveTextContent("Basic table title")
  })

  test("Check icon", () => {
    const { getByTestId } = render(<BasicTable icon={FaStar} data={data} title="Basic table title" />)

    expect(getByTestId("basic-header-icon")).toBeInTheDocument()
    expect(getByTestId("basic-icon")).toBeInTheDocument()
  })

  test("Check labels", () => {
    const { getAllByTestId } = render(<BasicTable data={data} />)

    getAllByTestId("basic-table-title").forEach((element, index) => {
      expect(element).toBeInTheDocument()
      expect(element).toHaveTextContent(dataKeys[index])
    })
  })

  test("Check items", () => {
    const { getAllByTestId } = render(<BasicTable data={data} />)

    getAllByTestId("basic-table-item").forEach(element => {
      expect(element).toBeInTheDocument()
    })
  })

  test("Check cell values", () => {
    const { getAllByTestId } = render(<BasicTable data={data} />)

    getAllByTestId("basic-table-cell").forEach((element, index) => {
      expect(element).toBeInTheDocument()
      expect(element).toHaveTextContent(values[index])
    })
  })
})

