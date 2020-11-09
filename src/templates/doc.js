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
  FaCss3,
  FaLock
} from "react-icons/fa"
import propTypes from "prop-types"

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
              actived={actived === "home"}
              to="/doc/home">
              Home
            </SideMenuItem>

            <SideMenuItem
              icon={FaFont}
              actived={actived === "typography"}
              to="/doc/typography">
              Typography
            </SideMenuItem>

            <SideMenuItem
              icon={FaEdit}
              actived={actived === "inputs"}
              to="/doc/inputs">
              Inputs
            </SideMenuItem>

            <SideMenuItem
              icon={FaCheckSquare}
              actived={actived === "check"}
              to="/doc/checkbox">
              Checkbox
            </SideMenuItem>

            <SideMenuItem
              icon={FaRegDotCircle}
              actived={actived === "radio"}
              to="/doc/radio">
              Radio
            </SideMenuItem>

            <SideMenuItem
              icon={FaSquare}
              actived={actived === "buttons"}
              to="/doc/buttons">
              Buttons
            </SideMenuItem>

            <SideMenuItem
              icon={FaChevronDown}
              actived={actived === "select"}
              to="/doc/select">
              Select
            </SideMenuItem>

            <SideMenuItem
              icon={FaThLarge}
              actived={actived === "block"}
              to="/doc/block">
              Block
            </SideMenuItem>

            <SideMenuItem
              icon={FaColumns}
              actived={actived === "sidemenu"}
              to="/doc/sidemenu">
              Sidemenu
            </SideMenuItem>

            <SideMenuItem
              icon={FaCalendarAlt}
              actived={actived === "datepicker"}
              to="/doc/datepicker">
              Date Picker
            </SideMenuItem>

            <SideMenuItem
              icon={FaCode}
              actived={actived === "syntax"}
              to="/doc/syntax">
              Syntax
            </SideMenuItem>

            <SideMenuItem
              icon={FaBorderAll}
              actived={actived === "grid"}
              to="/doc/grid">
              Grid
            </SideMenuItem>

            <SideMenuItem
              icon={FaAlignJustify}
              actived={actived === "form"}
              to="/doc/form">
              Form
            </SideMenuItem>

            <SideMenuItem
              icon={FaSpinner}
              actived={actived === "spinner"}
              to="/doc/spinner">
              Spinner
            </SideMenuItem>

            <SideMenuItem
              icon={FaTable}
              actived={actived === "table"}
              to="/doc/table">
              Table
            </SideMenuItem>

            <SideMenuItem
              icon={FaStopCircle}
              actived={actived === "badge"}
              to="/doc/badge">
              Badge
            </SideMenuItem>

            <SideMenuItem
              icon={FaExclamationTriangle}
              actived={actived === "alert"}
              to="/doc/alert">
              Alert
            </SideMenuItem>

            <SideMenuItem
              icon={FaSmileBeam}
              actived={actived === "Avatar"}
              to="/doc/avatar">
              Avatar
            </SideMenuItem>
          </SideMenuSection>

          <SideMenuSection title="Helpers">
            <SideMenuItem
              icon={FaCss3}
              actived={actived === "classes"}
              to="/doc/classes">
              CSS Classes
            </SideMenuItem>
          </SideMenuSection>

          <SideMenuSection title="Pages">
            <SideMenuItem
              icon={FaLock}
              actived={actived === "login"}
              to="/login">
              Login page
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

DocTemplate.propTypes = {
  actived: propTypes.bool,
  children: propTypes.any,
  title: propTypes.string
}
