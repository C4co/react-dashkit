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
  font-size: 0.95em;
  padding-bottom: 50px;

  @media(max-width: 1000px){
    margin-left: -240px;
  }
`

// <SideMenuItem />

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
  font-size: 18px;
  margin-right: 15px;
  display: flex;

  .svg{
    border: solid red 1px;
  }
`

export function SideMenuItem({ actived, to, icon, children }){
  const Icon = icon

  return (
    <SideMenuItemWrapper to={to} actived={actived}>
      { icon && <SideMenuItemIcon> <Icon /> </SideMenuItemIcon>}
      {children}
    </SideMenuItemWrapper>
  )
}

// <SideMenuDivision />

const SideMenuSectionTitle = styled.h1`
  margin-bottom: 10px;
  font-size: 1em;
  color: ${COLORS.WHITE};
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.8em;
  padding: 15px;
  border-bottom: solid ${lighten(0.1, COLORS.SIDEMENU_BACKGROUND)} 1px;
`

const SideMenuSectionWrapper = styled.nav`
  padding: 10px 15px 10px 15px;
`

export function SideMenuSection({ title, children }){
  return (
    <SideMenuSectionWrapper>
      { title && <SideMenuSectionTitle> {title} </SideMenuSectionTitle> }
      {children}
    </SideMenuSectionWrapper>
  )
}
