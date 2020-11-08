import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"
import "jest-styled-components"
import { Router, Route } from "react-router-dom"
import { render } from "@testing-library/react"
import React from "react"
import { FaStar } from "react-icons/fa"
import { SideMenu, SideMenuItem, SideMenuSection } from "./sidemenu"
import { createMemoryHistory } from "history"
import { COLORS } from "../../values"
import { lighten } from "polished"

const history = createMemoryHistory()

describe("<Sidemenu/> component", () => {

  test("check initial render", () => {
    const { getByTestId, queryByTestId } = render(
      <Router history={history}>
        <Route>
          <SideMenu>
            <SideMenuSection title="section">
              <SideMenuItem to="/home"> Home </SideMenuItem>
            </SideMenuSection>
          </SideMenu>
        </Route>
      </Router>
    )

    expect(getByTestId("sidemenu-item-wrapper")).toBeInTheDocument()
    expect(getByTestId("sidemenu-section-wrapper")).toBeInTheDocument()
    expect(getByTestId("sidemenu-section-title")).toBeInTheDocument()
    expect(getByTestId("sidemenu-section-title")).toHaveTextContent("section")
    expect(getByTestId("sidemenu-item-wrapper")).toHaveTextContent("Home")
    expect(queryByTestId("sidemenu-item-icon")).not.toBeInTheDocument()
  })

  test("Check menu item icon", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Route>
          <SideMenu>
            <SideMenuSection title="section">
              <SideMenuItem icon={FaStar} to="/home"> Home </SideMenuItem>
            </SideMenuSection>
          </SideMenu>
        </Route>
      </Router>
    )

    expect(getByTestId("sidemenu-item-icon")).toBeInTheDocument()
  })

  test("Check actived menu item", () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Route>
          <SideMenu>
            <SideMenuSection title="section">
              <SideMenuItem actived={true} icon={FaStar} to="/home"> Home </SideMenuItem>
            </SideMenuSection>
          </SideMenu>
        </Route>
      </Router>
    )

    expect(getByTestId("sidemenu-item-wrapper")).toHaveStyleRule("background", lighten(0.05, COLORS.PRIMARY))
    expect(getByTestId("sidemenu-item-wrapper")).toHaveStyleRule("color", COLORS.WHITE)
  })

})
