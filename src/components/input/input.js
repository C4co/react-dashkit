import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../values"
import { Label, ErrorMessage } from "../extras/extras"

const Container = styled.label`
  display: block;
`

const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  input{
    display: flex;
    width: 100%;
    display: flex;
    padding: 13px;
    border: solid ${COLORS.INPUT_BORDER} 2px;
    font-size: 1em;
    border-radius: 3px;
    font-family: inherit;
    color: ${COLORS.TEXT_DARK};
    background-color: ${COLORS.WHITE};

    ::placeholder{
      color: ${COLORS.INPUT_PLACEHOLDER};
      opacity: 1;
    }

    &:disabled{
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:focus{
      outline: none;
      border: solid ${COLORS.INPUT_FOCUS} 2px;
    }

    ${props => props.hasicon && css`
      padding-left: 41px;
    `}

    ${props => props.error && css`
      border: solid ${COLORS.DANGER} 2px;
    `}

    ${props => props.success && css`
      border: solid ${COLORS.SUCCESS} 2px;
    `}
  }
`

/**
  @param {String} label - input label
  @param {Boolean} success - success state
  @param {Boolean} error - error state
  @param {String} errorMessage - input error message
  @param {component} icon  - react icon component inside input
*/

export function Input ({
  label,
  InputComponent,
  icon,
  type,
  errorMessage,
  error,
  success,
  placeholder,
  ...props
}) {

  let Icon = styled.span``
  const hasIcon = icon ? "true" : ""

  if (icon) {
    Icon = styled(icon)`
      color: ${COLORS.INPUT_ICON};
      position: absolute;
      font-size: 18px;
      left: 12px;
    `
  }

  return (
    <Container>
      { label && <Label> {label} </Label> }

      <Content hasicon={hasIcon} error={error} success={success}>
        { icon && <Icon /> }

        {
          InputComponent
            ? <InputComponent />
            : <input type={type} placeholder={placeholder} {...props} />
        }
      </Content>

      { errorMessage && <ErrorMessage> { errorMessage } </ErrorMessage> }
    </Container>
  )
}

Input.defaultProps = {
  label: "",
  icon: false,
  placeholder: "",
  error: false,
  success: false,
  errorMessage: ""
}
