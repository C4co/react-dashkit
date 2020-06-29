import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../values"
import { ErrorMessage, Label } from "../extras/extras"
import { FaAngleDown } from "react-icons/fa"

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

const Data = styled.select`
  width: 100%;
  display: flex;
  font-family: inherit;
  font-size: 1em;
  background-color: ${COLORS.WHITE};
  border: solid ${COLORS.INPUT_BORDER} 2px;
  padding: 13px;
  border-radius: 3px;
  color: ${COLORS.TEXT_DARK};
  -moz-appearance: none;
  -webkit-appearance: none;

  &:focus{
    outline: none;
    border: solid ${COLORS.INPUT_FOCUS} 2px;
  }

  ${props => props.error && css`
    border: solid ${COLORS.DANGER} 2px;
  `}
`

/**
 * @param {Array} options - select opions, format: [{key: "key", value: "value"}]
 * @param {String} placeholder - select placeholder
 * @param {String} label - select label
 * @param {String} errorMessage - select error message
 * @param {Boolean} error - select error state
 */


export function Select ({
  options,
  placeholder,
  label,
  errorMessage,
  error,
  ...props
}) {
  return (
    <Container>
      { label && <Label> {label} </Label> }

      <Content>
        <Arrow />
        <Data
          error={error}
          defaultValue={false}
          {...props}>

          { options &&
            <>
              { placeholder && <option value={false} disabled> {placeholder} </option> }
              {
                options.map(option => (
                  <option key={`${option.key}-${option.value}`} value={option.value}> {option.key} </option>
                ))
              }
            </>
          }
        </Data>
      </Content>

      {errorMessage && <ErrorMessage> {errorMessage} </ErrorMessage>}
    </Container>
  )
}

Select.defaultProps = {
  options: [],
  placeholder: false,
  error: false,
  errorMessage: false,
  label: null
}
