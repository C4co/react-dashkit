import React from "react"

import styled from "styled-components"

import {
  Main,
  SideMenu,
  SideMenuDivision,
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
  FaCode
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
  max-width: 700px;
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

export function DocTemplate({ actived, children, title }){
  console.log(IMAGES.DECK_LOGO)

  return (
    <Main>
      <DocContainer>
        <SideMenu>
          <DocLogo>
            <img src={IMAGES.DECK_LOGO} alt="logo"/>
          </DocLogo>
          <SideMenuDivision title="Components">
            <SideMenuItem
              Icon={FaHome}
              actived={actived === "home" ? 1 : 0}
              to="/doc/home">
              Home
            </SideMenuItem>

            <SideMenuItem
              Icon={FaFont}
              actived={actived === "typography" ? 1 : 0}
              to="/doc/typography">
              Typography
            </SideMenuItem>

            <SideMenuItem
              Icon={FaEdit}
              actived={actived === "inputs" ? 1 : 0}
              to="/doc/inputs">
              Inputs
            </SideMenuItem>

            <SideMenuItem
              Icon={FaCheckSquare}
              actived={actived === "check" ? 1 : 0}
              to="/doc/checkbox">
              Checkbox
            </SideMenuItem>

            <SideMenuItem
              Icon={FaRegDotCircle}
              actived={actived === "radio" ? 1 : 0}
              to="/doc/radio">
              Radio
            </SideMenuItem>

            <SideMenuItem
              Icon={FaSquare}
              actived={actived === "buttons" ? 1 : 0}
              to="/doc/buttons">
              Buttons
            </SideMenuItem>

            <SideMenuItem
              Icon={FaChevronDown}
              actived={actived === "select" ? 1 : 0}
              to="/doc/select">
              Select
            </SideMenuItem>

            <SideMenuItem
              Icon={FaThLarge}
              actived={actived === "block" ? 1 : 0}
              to="/doc/block">
              Block
            </SideMenuItem>

            <SideMenuItem
              Icon={FaColumns}
              actived={actived === "sidemenu" ? 1 : 0}
              to="/doc/sidemenu">
              Sidemenu
            </SideMenuItem>

            <SideMenuItem
              Icon={FaCalendarAlt}
              actived={actived === "datepicker" ? 1 : 0}
              to="/doc/datepicker">
              Date Picker
            </SideMenuItem>

            <SideMenuItem
              Icon={FaCode}
              actived={actived === "syntax" ? 1 : 0}
              to="/doc/syntax">
              Syntax
            </SideMenuItem>
          </SideMenuDivision>
        </SideMenu>
        <DocContent>
          {title && <DocTitle> {title} </DocTitle>}
          <> {children} </>
        </DocContent>
      </DocContainer>
    </Main>
  )
}
