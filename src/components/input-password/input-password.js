import React, { useState } from "react"
import styled, { css } from "styled-components"
import { ErrorMessage, Label } from "../form-utils/form-utils"
import { COLORS } from "../../values"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import propTypes from "prop-types"

const Container = styled.div`
  display: block;
`

const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`

const InputData = styled.input`
  display: flex;
  width: 100%;
  display: flex;
  padding: 13px 13px 13px 41px;
  border: solid ${COLORS.INPUT_BORDER} 1px;
  font-size: 1em;
  border-radius: 3px;
  font-family: inherit;
  color: ${COLORS.TEXT_DARK};
  background-color: ${COLORS.WHITE};
  box-shadow: 0px 2px 6px -3px ${COLORS.BLOCK_SHADOW};

  ::placeholder{
    color: ${COLORS.INPUT_PLACEHOLDER};
    opacity: 1;
  }

  &:focus{
    outline: none;
    border: solid ${COLORS.INPUT_FOCUS} 1px;
  }

  ${props => props.error && css`
    border: solid ${COLORS.DANGER} 1px;
  `}
`

const IconShowPassword = styled(FaEye)`
  color: ${COLORS.SUCCESS};
  position: absolute;
  font-size: 18px;
  left: 12px;
  cursor: pointer;
`

const IconHidePassword = styled(FaEyeSlash)`
  color: #B2B2B2;
  position: absolute;
  font-size: 18px;
  left: 12px;
  cursor: pointer;
`

/**
  @param {String} label - input label
  @param {Boolean} error - error state
  @param {String} errorMessage - input error message
*/

export function InputPassword ({ label, error, errorMessage, ...props }) {
  const [security, setSecurity] = useState(true)

  function toggleSecurity () {
    setSecurity(!security)
  }

  return (
    <Container data-testid="password-container">
      {label && <Label data-testid="password-label"> {label} </Label>}

      <Content data-testid="password-content">
        { !security && <IconShowPassword data-testid="password-icon-show" onClick={toggleSecurity} /> }
        { security && <IconHidePassword data-testid="password-icon-hide" onClick={toggleSecurity} /> }

        <InputData data-testid="password-input" error={error} type={security ? "password" : "text"} {...props} />
      </Content>

      { errorMessage && <ErrorMessage data-testid="password-error"> {errorMessage} </ErrorMessage>}
    </Container>
  )
}

InputPassword.defaultProps = {
  label: "",
  error: false,
  errorMessage: ""
}

InputPassword.propTypes = {
  label: propTypes.string,
  error: propTypes.bool,
  errorMessage: propTypes.string
}
