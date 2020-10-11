import React from "react"
import styled, { css } from "styled-components"
import { ErrorMessage, Label } from "../extras/extras"
import { COLORS } from "../../values"

const Container = styled.div``

const Data = styled.textarea`
  display: flex;
  width: 100%;
  display: flex;
  padding: 13px;
  border: solid ${COLORS.INPUT_BORDER} 1px;
  font-size: 1em;
  border-radius: 3px;
  font-family: inherit;
  color: ${COLORS.TEXT_DARK};
  background-color: ${COLORS.WHITE};
  min-height: 120px;
  box-shadow: 0px 2px 6px -3px ${COLORS.BLOCK_SHADOW};

  &:focus{
    outline: none;
    border: solid ${COLORS.INPUT_FOCUS} 1px;
  }

  ::placeholder{
    color: ${COLORS.INPUT_PLACEHOLDER};
    opacity: 1;
  }

  ${props => props.error && css`
    border: solid ${COLORS.DANGER} 1px;
  `}

  ${props => props.success && css`
    border: solid ${COLORS.SUCCESS} 1px;
  `}
`

/**
  @param {String} label - input label
  @param {Boolean} error - error state
  @param {String} errorMessage - input error message
*/

export function TextArea ({ error, success, errorMessage, label, ...props }) {
  return (
    <Container>
      { label && <Label> {label} </Label> }

      <Data error={error} success={success} {...props} />

      { errorMessage && <ErrorMessage> {errorMessage} </ErrorMessage> }
    </Container>
  )
}

TextArea.defaultProps = {
  label: "",
  error: false,
  success: false,
  errorMessage: false
}
