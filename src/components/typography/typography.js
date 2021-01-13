import styled, { css } from "styled-components"
import { COLORS } from "../../values"
import { Link as RouterLink } from "react-router-dom"

export const Text = styled.p`
  font-size: 1em;
  line-height: 1.7em;
  margin-bottom: 20px;
  color: ${COLORS.TEXT};
`

export const Title = styled.h1`
  font-size: 2.3em;
  margin-bottom: 20px;
  color: ${COLORS.TEXT_DARK};

  ${props => props.h1 && css`
    font-size: 2.5em;
  `}

  ${props => props.h2 && css`
    font-size: 2.2em;
  `}

  ${props => props.h3 && css`
    font-size: 1.9em;
  `}

  ${props => props.h4 && css`
    font-size: 1.6em;
  `}

  ${props => props.h5 && css`
    font-size: 1.3em;
  `}

  ${props => props.h6 && css`
    font-size: 1em;
  `}
`

export const SubTitle = styled.h2`
  font-size: 1.6em;
  font-weight: normal;
  margin-bottom: 20px;
  color: ${COLORS.TEXT_DARK};
`

export const A = styled.a`
  text-decoration: none;
  color: ${COLORS.LINK};

  &:hover{
    text-decoration: underline;
  }
`

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${COLORS.LINK};

  &:hover{
    text-decoration: underline;
  }
`
