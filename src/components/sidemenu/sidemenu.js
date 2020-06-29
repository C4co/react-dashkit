import React from "react"
import styled, {css} from "styled-components"
import { COLORS } from "../../values";
import { darken, lighten } from "polished"
import { Link } from "react-router-dom"

// <SideMenu />

export const SideMenu = styled.section`
  background-color: ${COLORS.SIDEMENU_BACKGROUND};
  width: 240px;
  min-height: 100vh;
  box-shadow: 0px 2px 10px -3px ${COLORS.BLOCK_SHADOW};
  margin-left: 0px;
  transition: all 0.3s linear 0s;

  @media(max-width: 1000px){
    margin-left: -240px;
  }
`

// <SideMenu />

export const SideMenuItemWrapper = styled(Link)`
  display: block;
  margin-bottom: 4px;
  text-decoration: none;
  color: ${lighten(0.4, COLORS.SIDEMENU_BACKGROUND)};
  padding: 10px 15px 10px 15px;
  border-radius: 3px;
  display: flex;

  &:last-of-type{
    margin-bottom: 0px;
  }

  &:hover{
    background: ${darken(0.07, COLORS.SIDEMENU_BACKGROUND)};
  }

  ${props => props.actived && css`
    background: ${lighten(0.05, COLORS.SIDEMENU_BACKGROUND)};
    color: white;
  `}
`

const SideMenuItemIcon = styled.div`
  height: 20px;
  font-size: 18px;
  margin-right: 15px;

  .svg{
    border: solid red 1px;
  }
`

export function SideMenuItem({ actived, to, Icon, children }){
  return (
    <SideMenuItemWrapper to={to} actived={actived}>
      { Icon && <SideMenuItemIcon> <Icon /> </SideMenuItemIcon>}
      {children}
    </SideMenuItemWrapper>
  )
}

// <SideMenuDivision />

const SideMenuDivisionTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 1em;
  color: ${COLORS.WHITE};
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9em;
`

const SideMenuDivisionWrapper = styled.nav`
  padding: 30px 15px 30px 15px;
`

export function SideMenuDivision({ title, children }){
  return (
    <SideMenuDivisionWrapper>
      { title && <SideMenuDivisionTitle> {title} </SideMenuDivisionTitle> }
      {children}
    </SideMenuDivisionWrapper>
  )
}
