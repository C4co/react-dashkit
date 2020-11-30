import React from "react"
import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"
import { render, fireEvent, getByTestId } from "@testing-library/react"
import { DynamicTable } from "./dynamic-table"
import { FaStar } from "react-icons/fa"
import { COLORS } from "../../values"

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

const labels = [
  "ID",
  "Name",
  "Brithday",
  "Address",
  "Phone"
]

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

describe("<DynamicTable/> component", () => {

  test("Check initial render", () => {
    const { getByTestId, getAllByTestId } = render(<DynamicTable data={data}/>)

    expect(getByTestId("dynamic-container")).toBeInTheDocument()
    expect(getByTestId("dynamic-content")).toBeInTheDocument()
    expect(getByTestId("dynamic-table-content")).toBeInTheDocument()
    expect(getByTestId("dynamic-table-head")).toBeInTheDocument()
    expect(getByTestId("dynamic-table-labels")).toBeInTheDocument()
    expect(getByTestId("dynamic-table-title-check")).toBeInTheDocument()
    expect(getByTestId("dynamic-table-check-all")).toBeInTheDocument()

    getAllByTestId("dynamic-table-check").forEach(item => {
      expect(item).toBeInTheDocument()
    })

    expect(getByTestId("dynamic-table-body")).toBeInTheDocument()

    getAllByTestId("dynamic-table-item").forEach(item => {
      expect(item).toBeInTheDocument()
    })

    getAllByTestId("dynamic-table-cell-check").forEach(item => {
      expect(item).toBeInTheDocument()
    })

    getAllByTestId("dynamic-table-cell").forEach(item => {
      expect(item).toBeInTheDocument()
    })

    getAllByTestId("dynamic-table-title").forEach(item => {
      expect(item).toBeInTheDocument()
    })
  })

  test("Check table header, icon and title", () => {
    const { getByTestId } = render(<DynamicTable icon={FaStar} title="Dynamic table" data={data} />)

    expect(getByTestId("dynamic-header")).toBeInTheDocument()
    expect(getByTestId("dynamic-header-icon")).toBeInTheDocument()
    expect(getByTestId("dynamic-header-title")).toBeInTheDocument()
    expect(getByTestId("dynamic-header-title")).toHaveTextContent("Dynamic table")
  })

  test("Check labels", () => {
    const { getAllByTestId } = render(<DynamicTable data={data} />)

    getAllByTestId("dynamic-table-title").forEach((item, index) => {
      expect(item).toHaveTextContent(labels[index])
    })
  })

  test("Check cells", () => {
    const { getAllByTestId } = render(<DynamicTable data={data} />)

    getAllByTestId("dynamic-table-cell").forEach((item, index) => {
      expect(item).toHaveTextContent(values[index])
    })
  })

  test("Check basic table without valid data", () => {
    const { getByTestId } = render(<DynamicTable />)

    expect(getByTestId("alert-wrapper")).toBeInTheDocument()
    expect(getByTestId("alert-text")).toHaveTextContent("DynamicTable need a valid data structure")
  })

  test("Check selection of all items: data", () => {
    let selectedItems = []

    const { getByTestId } = render(<DynamicTable data={data} onSelectItems={items => {
      selectedItems = items
    }} />)

    fireEvent.click(getByTestId("dynamic-table-check-all"))
    expect(selectedItems).toStrictEqual(data)

    fireEvent.click(getByTestId("dynamic-table-check-all"))
    expect(selectedItems).toStrictEqual([])
  })

  test("Check selection of all items: style", () => {
    const { getByTestId, getAllByTestId } = render(<DynamicTable data={data} />)

    // default styled
    expect(getByTestId("dynamic-table-check-all")).toHaveStyleRule("background-color", undefined)
    getAllByTestId("dynamic-table-check").forEach(item => {
      expect(item).toHaveStyleRule("background-color", undefined)
    })

    // selected style
    fireEvent.click(getByTestId("dynamic-table-check-all"))
    expect(getByTestId("dynamic-table-check-all")).toHaveStyleRule("background-color", COLORS.PRIMARY)
    getAllByTestId("dynamic-table-check").forEach(item => {
      expect(item).toHaveStyleRule("background-color", COLORS.PRIMARY)
    })

    //unselect style
    fireEvent.click(getByTestId("dynamic-table-check-all"))
    expect(getByTestId("dynamic-table-check-all")).toHaveStyleRule("background-color", undefined)
    getAllByTestId("dynamic-table-check").forEach(item => {
      expect(item).toHaveStyleRule("background-color", undefined)
    })
  })

  test("Check selection of a single item", () => {
    let selectedItem = []

    const { getAllByTestId } = render(<DynamicTable data={data} onSelectItems={data => {
      selectedItem = data
    }}/>)

    getAllByTestId("dynamic-table-item").forEach((item, index) => {
      fireEvent.click(item)
      expect(selectedItem[0]).toStrictEqual(data[index])
      fireEvent.click(item)
      expect(selectedItem).toStrictEqual([])
    })
  })

  test("Check selection of multiples items", () => {
    let selectedItem = []

    const { getAllByTestId } = render(<DynamicTable data={data} onSelectItems={data => {
      selectedItem = data
    }}/>)

    getAllByTestId("dynamic-table-item").forEach((item, index) => {
      fireEvent.click(item)
    })

    expect(selectedItem).toStrictEqual(data)
  })
})
