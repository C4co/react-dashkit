import React from "react"
import styled, { css } from "styled-components"
import { COLORS, SIZE } from "../../values"

// Block

const Container = styled.div`
  width: 100%;
  margin-bottom: ${SIZE.BLOCK.MARGIN};
  color: ${COLORS.TEXT};

  &:last-of-type{
    margin-bottom: 0;
  }

  ${props => props.solid && css`
    background-color: ${COLORS.BLOCK_BACKGROUND};
    border-radius: 3px;
    padding: ${SIZE.BLOCK.PADDING};
    box-shadow: 0px 2px 6px -3px ${COLORS.BLOCK_SHADOW};
  `}

  ${props => props.bigMargin && css`
    margin-top: ${SIZE.BLOCK.BIG_MARGIN};
    margin-bottom: ${SIZE.BLOCK.BIG_MARGIN};
  `}
`

const Header = styled.header`
  display: flex;
  align-items: center;
  padding-bottom: ${SIZE.BLOCK.PADDING};
  margin-bottom: ${SIZE.BLOCK.PADDING};
  border-bottom: solid ${COLORS.BLOCK_BORDER} 1px;
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
    padding: 0px 0px 0px 0px;
  `}

  ${props => props.col2 && css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: ${SIZE.BLOCK.GAP};
  `}
`

const Title = styled.h1`
  font-size: 0.89em;
  text-transform: uppercase;
  color: ${COLORS.TEXT_DARK};
  letter-spacing: 0.1em;
`

const Footer = styled.div`
  padding-top: ${SIZE.BLOCK.PADDING};
  margin-top: ${SIZE.BLOCK.PADDING};
  border-top: solid ${COLORS.BLOCK_BORDER} 1px;
`

/**
 * @param {any} children - react children
 * @param {boolean} solid - adding box shaddow and background color
 * @param {string} title - block title
 * @param {any} footer - block footer elements
 * @param {boolean} col2 - divide block in 2 columns
 * @param {reactIcon} icon - adding icon in title
 */

export function Block({
  children,
  solid,
  Icon,
  bigMargin,
  title,
  footer,
  col2
}){
  return (
    <Container solid={solid} bigMargin={bigMargin}>
      {
        (solid && title) &&
        <Header>
          { Icon && <HeaderIcon> <Icon /> </HeaderIcon> }
          <Title> {title} </Title>
        </Header>
      }

      <Content solid={solid} col2={col2}>
        { children }
      </Content>

      { (solid && footer) && <Footer>{footer}</Footer>}
    </Container>
  )
}

Block.defaultProps = {
  solid: false,
  title: false,
  footer: false
}

// <BlockField>

const BlockFieldContent = styled.div`
  margin-bottom: 15px;
  border-bottom: solid ${COLORS.BLOCK_BORDER} 1px;
  padding-bottom: 15px;

  &:last-of-type{
    border: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

const BlockFieldTitle = styled.p`
  margin-bottom: 5px;
  color: ${COLORS.TEXT_DARK};
  font-weight: bold;
`

/**
 * @param {any} children - react children
 * @param {string} title - block title
 */

 export function BlockField({title, children}){
  return(
    <BlockFieldContent>
      <BlockFieldTitle> {title} </BlockFieldTitle>
      {children}
    </BlockFieldContent>
  )
}
