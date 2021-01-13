import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"
import { render } from "@testing-library/react"
import React from "react"
import { TextArea } from "./text-area"
import { COLORS } from "../../values"

describe("<TextArea /> - component", () => {
  test("check initial render", () => {
    const { getByTestId } = render(<TextArea/>)

    expect(getByTestId("textarea-container")).toBeInTheDocument()
    expect(getByTestId("textarea-input")).toBeInTheDocument()
  })

  test("check textarea label", () => {
    const { getByTestId } = render(<TextArea label="textarea label"/>)

    expect(getByTestId("textarea-label")).toBeInTheDocument()
    expect(getByTestId("textarea-label")).toHaveTextContent("textarea label")
  })

  test("check error state", () => {
    const { getByTestId } = render(<TextArea error={true}/>)

    expect(getByTestId("textarea-input")).toHaveStyleRule("border", `solid ${COLORS.DANGER} 1px`)
  })

  test("check success state", () => {
    const { getByTestId } = render(<TextArea success={true}/>)

    expect(getByTestId("textarea-input")).toHaveStyleRule("border", `solid ${COLORS.SUCCESS} 1px`)
  })

  test("check error message", () => {
    const { getByTestId } = render(<TextArea error errorMessage="textarea error message"/>)

    expect(getByTestId("textarea-container")).toHaveTextContent("textarea error message")
  })
})
