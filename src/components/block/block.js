import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../values"

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;

  ${props => props.solid && css`
    background-color: ${COLORS.BLOCK_BACKGROUND};
    border-radius: 3px;
    box-shadow: 0px 2px 2px 0px ${COLORS.BLOCK_SHADOW};
  `}

  ${props => props.bigMargin && css`
    margin-top: 50px;
    margin-bottom: 50px;
  `}

  ${props => props.noMargin && css`
    margin-bottom: 0px;
  `}
`

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: solid ${COLORS.BORDER} 1px;
`

const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 23px;
  margin-right: 20px;
  opacity: 0.4;
`

const Content = styled.div`
  width: 100%;
  flex-direction: column;

  ${props => props.solid && css`
    padding: 20px;
  `}

  ${props => props.col2 && css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  `}
`

const Title = styled.h1`
  font-size: 1em;
  color: ${COLORS.TEXT_DARK};
`

const Footer = styled.div`
  padding: 20px;
  border-top: solid ${COLORS.BORDER} 1px;
`

/**
 * @param {any} children - react children
 * @param {boolean} solid - adding box shaddow and background color
 * @param {string} title - block title
 * @param {any} footer - block footer elements
 * @param {boolean} col2 - divide block in 2 columns
 * @param {reactIcon} icon - adding icon in title
 * @param {boolean} bigMargin - bottom margin with 50px
 * @param {boolean} noMargin - remove bottom margin
 */

export function Block({
  children,
  solid,
  icon,
  bigMargin,
  title,
  footer,
  col2,
  noMargin
}){
  const Icon = icon

  return (
    <Container solid={solid} bigMargin={bigMargin} noMargin={noMargin}>
      {
        (solid && title) &&
        <Header>
          { Icon && <HeaderIcon> <Icon/> </HeaderIcon> }
          <Title> { title } </Title>
        </Header>
      }

      <Content solid={ solid } col2={col2}>
        { children }
      </Content>

      { (solid && footer) && <Footer> { footer } </Footer> }
    </Container>
  )
}
