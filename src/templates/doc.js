import React from "react"

import styled from "styled-components"

import {
  Main,
  SideMenu,
  SideMenuSection,
  SideMenuItem
} from "../components"

import { COLORS, IMAGES } from "../values"

import {
  FaHome,
  FaFont,
  FaEdit,
  FaCheckSquare,
  FaRegDotCircle,
  FaSquare,
  FaChevronDown,
  FaThLarge,
  FaColumns,
  FaCalendarAlt,
  FaCode,
  FaBorderAll,
  FaAlignJustify,
  FaSpinner,
  FaTable,
  FaStopCircle,
  FaExclamationTriangle,
  FaSmileBeam,
  FaCss3
} from "react-icons/fa"

const DocContainer = styled.section`
  display: flex;
`

const DocLogo = styled.div`
  padding: 40px 15px 10px 15px;

  img{
    margin: 0 auto;
    width: 100%;
    display: block;
    max-width: 100px;
  }
`

const DocContent = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 15px 50px 15px;
`

const DocTitle = styled.h1`
  text-transform: capitalize;
  font-weight: 300;
  font-size: 3em;
  text-align: center;
  color: ${COLORS.TEXT_DARK};
`

export function DocTemplate ({ actived, children, title }) {
  return (
    <Main>
      <DocContainer>
        <SideMenu>
          <DocLogo>
            <img src={IMAGES.DECK_LOGO} alt="logo"/>
          </DocLogo>

          <SideMenuSection title="Components">
            <SideMenuItem
              icon={FaHome}
              actived={actived === "home" ? 1 : 0}
              to="/doc/home">
              Home
            </SideMenuItem>

            <SideMenuItem
              icon={FaFont}
              actived={actived === "typography" ? 1 : 0}
              to="/doc/typography">
              Typography
            </SideMenuItem>

            <SideMenuItem
              icon={FaEdit}
              actived={actived === "inputs" ? 1 : 0}
              to="/doc/inputs">
              Inputs
            </SideMenuItem>

            <SideMenuItem
              icon={FaCheckSquare}
              actived={actived === "check" ? 1 : 0}
              to="/doc/checkbox">
              Checkbox
            </SideMenuItem>

            <SideMenuItem
              icon={FaRegDotCircle}
              actived={actived === "radio" ? 1 : 0}
              to="/doc/radio">
              Radio
            </SideMenuItem>

            <SideMenuItem
              icon={FaSquare}
              actived={actived === "buttons" ? 1 : 0}
              to="/doc/buttons">
              Buttons
            </SideMenuItem>

            <SideMenuItem
              icon={FaChevronDown}
              actived={actived === "select" ? 1 : 0}
              to="/doc/select">
              Select
            </SideMenuItem>

            <SideMenuItem
              icon={FaThLarge}
              actived={actived === "block" ? 1 : 0}
              to="/doc/block">
              Block
            </SideMenuItem>

            <SideMenuItem
              icon={FaColumns}
              actived={actived === "sidemenu" ? 1 : 0}
              to="/doc/sidemenu">
              Sidemenu
            </SideMenuItem>

            <SideMenuItem
              icon={FaCalendarAlt}
              actived={actived === "datepicker" ? 1 : 0}
              to="/doc/datepicker">
              Date Picker
            </SideMenuItem>

            <SideMenuItem
              icon={FaCode}
              actived={actived === "syntax" ? 1 : 0}
              to="/doc/syntax">
              Syntax
            </SideMenuItem>

            <SideMenuItem
              icon={FaBorderAll}
              actived={actived === "grid" ? 1 : 0}
              to="/doc/grid">
              Grid
            </SideMenuItem>

            <SideMenuItem
              icon={FaAlignJustify}
              actived={actived === "form" ? 1 : 0}
              to="/doc/form">
              Form
            </SideMenuItem>

            <SideMenuItem
              icon={FaSpinner}
              actived={actived === "spinner" ? 1 : 0}
              to="/doc/spinner">
              Spinner
            </SideMenuItem>

            <SideMenuItem
              icon={FaTable}
              actived={actived === "table" ? 1 : 0}
              to="/doc/table">
              Table
            </SideMenuItem>

            <SideMenuItem
              icon={FaStopCircle}
              actived={actived === "badge" ? 1 : 0}
              to="/doc/badge">
              Badge
            </SideMenuItem>

            <SideMenuItem
              icon={FaExclamationTriangle}
              actived={actived === "alert" ? 1 : 0}
              to="/doc/alert">
              Alert
            </SideMenuItem>

            <SideMenuItem
              icon={FaSmileBeam}
              actived={actived === "Avatar" ? 1 : 0}
              to="/doc/avatar">
              Avatar
            </SideMenuItem>
          </SideMenuSection>

          <SideMenuSection title="Helpers">
            <SideMenuItem
              icon={FaCss3}
              actived={actived === "classes" ? 1 : 0}
              to="/doc/classes">
              CSS Classes
            </SideMenuItem>
          </SideMenuSection>

        </SideMenu>
        <DocContent>
          {title && <DocTitle> {title} </DocTitle>}
          <> {children} </>
        </DocContent>
      </DocContainer>
    </Main>
  )
}
