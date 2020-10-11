import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../values"
import { darken } from "polished"
import { Spinner } from "../spinner/spinner"

const ButtonContainer = styled.button`
  border: none;
  background: ${COLORS.BUTTON};
  display: flex;
  font-size: 0.82em;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;
  padding: 0px 15px 0px 15px;
  justify-content: center;
  align-items: center;
  color: white;
  letter-spacing: 0.07em;
  height: 40px;
  font-family: inherit;
  transition: all 0.2s linear 0s;

  &:hover{
    background-color: ${darken(0.08, COLORS.BUTTON)};
  }

  &:active{
    background-color: ${darken(0.2, COLORS.BUTTON)};
  }

  ${props => props.full && css`
    width: 100%;
  `}

  ${props => props.loading && css`
    opacity: 0.7;
    cursor: not-allowed;
  `}

  ${props => props.info && css`
    background-color: ${COLORS.INFO};

    &:hover{
      background-color: ${darken(0.08, COLORS.INFO)};
    }

    &:active{
      background-color: ${darken(0.2, COLORS.INFO)};
    }
  `}

  ${props => props.danger && css`
    background-color: ${COLORS.DANGER};

    &:hover{
      background-color: ${darken(0.08, COLORS.DANGER)};
    }

    &:active{
      background-color: ${darken(0.2, COLORS.DANGER)};
    }
  `}

  ${props => props.success && css`
    background-color: ${COLORS.SUCCESS};

    &:hover{
      background-color: ${darken(0.08, COLORS.SUCCESS)};
    }

    &:active{
      background-color: ${darken(0.2, COLORS.SUCCESS)};
    }
  `}

  ${props => props.warn && css`
    background-color: ${COLORS.WARN};

    &:hover{
      background-color: ${darken(0.08, COLORS.WARN)};
    }

    &:active{
      background-color: ${darken(0.2, COLORS.WARN)};
    }
  `}
`

const ButtonSpinner = styled.div`
  margin-left: 10px;
`

const ButtonIconLeft = styled.div`
  font-size: 1.5em;
  margin-right: 12px;
  position: relative;
  bottom: 1px;
  display: flex;
`

const ButtonIconRight = styled.div`
  font-size: 1.5em;
  margin-left: 12px;
  position: relative;
  bottom: 1px;
  display: flex;
`
/**
 * @param {reactIcon} leftIcon - left icon inside button
 * @param {reactIcon} rightIcon - left icon inside button
 * @param {String} href - external link
 * @param {String} to - internal link
 */

export function Button ({
  children,
  iconLeft,
  iconRight,
  loading,
  ...props
}) {
  const IconLeft = iconLeft
  const IconRight = iconRight

  if (loading) {
    return (
      <ButtonContainer disabled loading={loading.toString()} {...props}>
        {children} <ButtonSpinner> <Spinner/> </ButtonSpinner>
      </ButtonContainer>
    )
  }

  return (
    <ButtonContainer {...props}>
      { iconLeft && <ButtonIconLeft> <IconLeft/> </ButtonIconLeft> }
      { children }
      { iconRight && <ButtonIconRight> <IconRight/> </ButtonIconRight> }
    </ButtonContainer>
  )
}

Button.defaultProps = {
  children: "Button"
}
