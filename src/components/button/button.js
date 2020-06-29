import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../values"
import { darken } from "polished"

/**
 * @param {reactIcon} leftIcon - left icon inside button
 * @param {reactIcon} rightIcon - left icon inside button
 * @param {String} href - external link
 * @param {String} to - internal link
 */

const ButtonContainer = styled.button`
  border: none;
  background: ${COLORS.PRIMARY};
  display: flex;
  font-size: 0.82em;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;
  padding: 0px 12px 0px 12px;
  justify-content: center;
  align-items: center;
  color: white;
  letter-spacing: 0.07em;
  height: 40px;
  transition: all 0.2s linear 0s;
  letter-spacing: 0.15em;

  &:hover{
    background-color: ${darken(0.08, COLORS.PRIMARY)};
  }

  &:active{
    background-color: ${darken(0.2, COLORS.PRIMARY)};
  }

  ${props => props.full && css`
    width: 100%;
  `}

  ${props => props.loading && css`
    opacity: 0.7;
    cursor: not-allowed;
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
`

const SpinnerWrapper = styled.div`
  .spinner {
    animation: rotate 2s linear infinite;
    z-index: 2;
    margin-left: 10px;
    width: 18px;
    height: 18px;

    & .path {
      stroke: hsl(210, 70, 75);
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

function Spinner () {
  return (
    <SpinnerWrapper>
      <svg className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" stroke="white" strokeWidth="5"></circle>
      </svg>
    </SpinnerWrapper>
  )
}

export function Button ({ children, iconLeft, iconRight, loading, ...props }) {
  let IconLeft = styled.span``
  let IconRight = styled.span``

  if (iconLeft) {
    IconLeft = styled(iconLeft)`
      font-size: 1.5em;
      margin-right: 12px;
      position: relative;
      bottom: 1px;
    `
  }

  if (iconRight) {
    IconRight = styled(iconRight)`
      font-size: 1.5em;
      margin-left: 12px;
      position: relative;
      bottom: 1px;
    `
  }

  if (loading) {
    return (
      <ButtonContainer disabled loading={loading.toString()} {...props}>
        {children} <Spinner />
      </ButtonContainer>
    )
  }

  return (
    <ButtonContainer {...props}>
      { iconLeft ? <IconLeft /> : null }
      { children }
      { iconRight ? <IconRight /> : null }
    </ButtonContainer>
  )
}

Button.defaultProps = {
  childre: "Buttons",
  iconLeft: null,
  iconRigth: null
}
