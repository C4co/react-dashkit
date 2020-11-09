import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../values"
import { ErrorMessage, Label } from "../form-utils/form-utils"
import { FaAngleDown } from "react-icons/fa"
import { Alert } from "../alert/alert"
import propTypes from "prop-types"

const Container = styled.div`
  position: relative;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const Arrow = styled(FaAngleDown)`
  font-size: 20px;
  color: ${COLORS.INPUT_BORDER};
  position: absolute;
  right: 10px;
  top: 15px;
`

const SelectWrapper = styled.select`
  width: 100%;
  display: flex;
  font-family: inherit;
  font-size: 1em;
  background-color: ${COLORS.WHITE};
  border: solid ${COLORS.INPUT_BORDER} 1px;
  padding: 13px;
  border-radius: 3px;
  color: ${COLORS.TEXT_DARK};
  -moz-appearance: none;
  -webkit-appearance: none;
  box-shadow: 0px 2px 6px -3px ${COLORS.BLOCK_SHADOW};

  &:focus{
    outline: none;
    border: solid ${COLORS.INPUT_FOCUS} 1px;
  }

  ${props => props.error && css`
    border: solid ${COLORS.DANGER} 1px;
  `}
`

/**
 * @param {Array} options - select opions, format: [{key: "key", value: "value"}]
 * @param {String} placeholder - select placeholder
 * @param {String} label - select label
 * @param {String} errorMessage - select error message
 * @param {Boolean} error - select on error mode
 */

export function Select ({
  options,
  placeholder,
  label,
  errorMessage,
  error,
  ...props
}) {
  if (!options.length) {
    return (
      <Alert danger title="Error"> Select need valid options </Alert>
    )
  }

  return (
    <Container data-testid="select-container">
      { label && <Label> {label} </Label> }

      <Content data-testid="select-content">
        <Arrow data-testid="select-arrow" />
        <SelectWrapper
          data-testid="select-wrapper"
          error={error}
          defaultValue={false}
          {...props}>

          { options &&
            <>
              { placeholder && <option data-testid="select-placeholder" value={false} disabled> {placeholder} </option> }
              {
                options.map(option => (
                  <option
                    data-testid="select-option"
                    key={`${option.key}-${option.value}`}
                    value={option.value}>
                    {option.key}
                  </option>
                ))
              }
            </>
          }
        </SelectWrapper>
      </Content>

      {errorMessage && <ErrorMessage data-testid="select-error" > {errorMessage} </ErrorMessage>}
    </Container>
  )
}

Select.defaultProps = {
  options: [],
  placeholder: "",
  error: false,
  errorMessage: "",
  label: ""
}

Select.propTypes = {
  options: propTypes.array,
  placeholder: propTypes.string,
  label: propTypes.string,
  errorMessage: propTypes.string,
  error: propTypes.bool
}
