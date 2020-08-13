import React from "react"
import styled, {css} from "styled-components"
import { COLORS } from "../../values"
import {
  FaInfoCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaCheck
} from "react-icons/fa"

import { lighten, darken } from "polished"

const AlertWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 15px;
  color: white;
  background-color: ${COLORS.INFO};
  color: ${darken(0.3, COLORS.INFO)};
  background-color: ${lighten(0.25, COLORS.INFO)};
  border-radius: 3px;

  ${props => props.solid && css `
    background-color: ${COLORS.INFO};
    color: white;
  `}

  ${props => props.danger && css`
    color: ${darken(0.2, COLORS.DANGER)};
    background-color: ${lighten(0.25, COLORS.DANGER)};
  `}

  ${props => props.danger && props.solid && css`
    background-color: ${COLORS.DANGER};
    color: white;
  `}

  ${props => props.success && css`
    color: ${darken(0.2, COLORS.SUCCESS)};
    background-color: ${lighten(0.25, COLORS.SUCCESS)};
  `}

  ${props => props.success && props.solid && css`
    background-color: ${COLORS.SUCCESS};
    color: white;
  `}

  ${props => props.warn && css`
    color: ${darken(0.2, COLORS.WARN)};
    background-color: ${lighten(0.25, COLORS.WARN)};
  `}

  ${props => props.warn && props.solid && css`
    background-color: ${COLORS.WARN};
    color: white;
  `}
`

const AlertIcon = styled.div`
  display: flex;
  margin-right: 20px;
  font-size: 18px;
  border-radius: 3px;
  opacity: 0.8;
`

const AlertTitle = styled.h1`
  font-weight: bold;
  font-size: 1em;
  margin-right: 3px;

  &::after{
    content: "-";
  }
`

export function Alert({ children, solid, danger, success, warn, title }){
  let Icon = FaInfoCircle

  if(danger){
    Icon = FaExclamationCircle
  }

  if(warn){
    Icon = FaExclamationTriangle
  }

  if(success){
    Icon = FaCheck
  }

  return (
    <AlertWrapper success={success} danger={danger} warn={warn} solid={solid}>
      <AlertIcon> <Icon /> </AlertIcon>
      { title && <AlertTitle> { title } </AlertTitle> }
      { children }
    </AlertWrapper>
  )
}
