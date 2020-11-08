import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"
import { render } from "@testing-library/react"
import React from "react"
import { Syntax } from "./syntax"

describe("<Syntax/> component", () => {

  const example = `
    function add(x, y){
      return x + y
    }

    console.log(10, 20)
    console.log(30, 40)
  `

  test("Check initial render", () => {
    const { getByTestId } = render(<Syntax code={example} />)

    expect(getByTestId("syntax-container")).toBeInTheDocument()
    expect(getByTestId("syntax-content")).toBeInTheDocument()
    expect(getByTestId("syntax-code")).toBeInTheDocument()
  })

  test("Check description", () => {
    const { getByTestId } = render(<Syntax code={example} description="syntax description"/>)

    expect(getByTestId("syntax-description")).toBeInTheDocument()
    expect(getByTestId("syntax-description")).toHaveTextContent("syntax description")
  })

  test("Check arrow", () => {
    const { getByTestId } = render(<Syntax code={example} arrow={true} />)

    expect(getByTestId("syntax-arrow")).toBeInTheDocument()
  })

})
