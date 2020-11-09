import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../values"
import {
  FaInfoCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaCheck
} from "react-icons/fa"

import { lighten, darken } from "polished"
import propTypes from "prop-types"

const AlertWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  color: ${COLORS.WHITE};
  font-size: 0.95em;
  color: ${darken(0.3, COLORS.INFO)};
  background-color: ${lighten(0.25, COLORS.INFO)};
  border-radius: 3px;

  ${props => props.solid && css`
    background-color: ${COLORS.INFO};
    color: ${COLORS.WHITE};
  `}

  ${props => props.danger && css`
    color: ${darken(0.2, COLORS.DANGER)};
    background-color: ${lighten(0.25, COLORS.DANGER)};
  `}

  ${props => props.danger && props.solid && css`
    background-color: ${COLORS.DANGER};
    color: ${COLORS.WHITE};
  `}

  ${props => props.success && css`
    color: ${darken(0.2, COLORS.SUCCESS)};
    background-color: ${lighten(0.25, COLORS.SUCCESS)};
  `}

  ${props => props.success && props.solid && css`
    background-color: ${COLORS.SUCCESS};
    color: ${COLORS.WHITE};
  `}

  ${props => props.warn && css`
    color: ${darken(0.2, COLORS.WARN)};
    background-color: ${lighten(0.25, COLORS.WARN)};
  `}

  ${props => props.warn && props.solid && css`
    background-color: ${COLORS.WARN};
    color: ${COLORS.WHITE};
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

export function Alert ({
  children,
  solid,
  danger,
  success,
  warn,
  title
}) {
  let Icon = FaInfoCircle
  let iconType = "info"

  if (danger) {
    Icon = FaExclamationCircle
    iconType = "danger"
  }

  if (warn) {
    Icon = FaExclamationTriangle
    iconType = "warning"
  }

  if (success) {
    Icon = FaCheck
    iconType = "success"
  }

  return (
    <AlertWrapper
      data-testid="alert-wrapper"
      success={success}
      danger={danger}
      warn={warn}
      solid={solid}>

      <AlertIcon data-icon={iconType} data-testid="alert-icon">
        <Icon data-testid="icon" />
      </AlertIcon>

      {
        title && <AlertTitle data-testid="alert-title"> {title} </AlertTitle>
      }

      <span data-testid="alert-text"> {children} </span>
    </AlertWrapper>
  )
}

Alert.propTypes = {
  children: propTypes.any,
  solid: propTypes.bool,
  danger: propTypes.bool,
  success: propTypes.bool,
  warn: propTypes.bool,
  title: propTypes.string
}
