import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../values"
import { Label, ErrorMessage } from "../form-utils/form-utils"

const Container = styled.label`
  display: block;
`

const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  input{
    width: 100%;
    display: flex;
    padding: 13px;
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

    &:disabled{
      cursor: not-allowed;
      background-color: ${COLORS.INPUT_DISABLED};
    }

    &:focus{
      outline: none;
      border: solid ${COLORS.INPUT_FOCUS} 1px;
    }

    ${props => props.hasicon && css`
      padding-left: 41px;
    `}

    ${props => props.error && css`
      border: solid ${COLORS.DANGER} 1px;
    `}

    ${props => props.success && css`
      border: solid ${COLORS.SUCCESS} 1px;
    `}
  }
`

const CustomWrapper = styled.div`
  width: 100%;
`

const InputIcon = styled.div`
  color: ${COLORS.INPUT_ICON};
  position: absolute;
  font-size: 18px;
  left: 12px;
  display: flex;
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
  const Icon = icon
  const hasIcon = icon ? "true" : ""

  return (
    <Container data-testid="input-wrapper">
      { label && <Label data-testid="input-label"> {label} </Label> }

      <Content id="input-content" data-testid="input-content" hasicon={hasIcon} error={error} success={success}>
        {
          InputComponent
            ? <CustomWrapper data-testid="input-custom-component"> <InputComponent /> </CustomWrapper>
            : <input data-testid="input-component" type={type} placeholder={placeholder} {...props} />
        }

        { icon && <InputIcon data-testid="input-icon"> <Icon /> </InputIcon> }
      </Content>

      { errorMessage && <ErrorMessage data-testid="input-error"> { errorMessage } </ErrorMessage> }
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
