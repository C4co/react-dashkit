import "react-datepicker/dist/react-datepicker.css"
import React from "react"
import styled, {css} from "styled-components"
import { COLORS } from "../../values"
import { Label, ErrorMessage } from "../extras/extras"
import { FaCalendarAlt } from "react-icons/fa"
import ptBR from "date-fns/locale/pt-BR"
import ReactDatePicker, { registerLocale, setDefaultLocale } from "react-datepicker"

registerLocale("ptBR", ptBR)
setDefaultLocale("ptBR")

const Wrapper = styled.div`

  .react-datepicker__input-container,
  .react-datepicker-wrapper{
    display: block;
    width: 100%;
    min-width: 100%;
  }

  .react-datepicker-wrapper{
    width: 100%;
  }

  .react-datepicker{
    transform: scale(1.1, 1.1);
    border: none;
    font-family: "inter", Arial, Helvetica, sans-serif;
    color: red;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name{
    color: ${COLORS.TEXT};
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range{
    color: ${COLORS.WHITE};
    background-color: ${COLORS.PRIMARY};
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected{
    color: ${COLORS.WHITE};
    background-color: ${COLORS.BLACK};
  }

  .react-datepicker__header{
    background-color: ${COLORS.WHITE};
    border-bottom: solid ${COLORS.BORDER} 1px;
    color: ${COLORS.TEXT_DARK};
  }

  .react-datepicker__current-month{
    text-transform: capitalize;
    font-weight: normal;
  }

  .react-datepicker-popper{
    z-index: 9999999;
  }

  .react-datepicker__input-container{
    width: 100% !important;
    display: block;
  }

  input[type="text"]{
    width: 100% !important;
    display: flex;
    padding: 13px;
    border: solid ${COLORS.INPUT_BORDER} 2px;
    font-size: 1em;
    border-radius: 3px;
    font-family: inherit;
    font-weight: normal;
    color: ${COLORS.TEXT_DARK};
    background-color: ${COLORS.WHITE};
    padding-left: 41px;

    &:disabled{
      background: ${COLORS.INPUT_DISABLED};
      cursor: no-drop;
    }

    &:focus{
      outline: none;
      width: 100%;
      border: solid ${COLORS.INPUT_FOCUS} 2px;
    }

    ${props => props.error && css`
      border: solid ${COLORS.DANGER} 2px;
    `}
  }
`

const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;

  & > div{
    width: 100%;
  }
`

const Icon = styled(FaCalendarAlt)`
  color: ${COLORS.INPUT_ICON};
  position: absolute;
  font-size: 18px;
  left: 12px;
`

/**
 * @param {String} label - input label
 * @param {bolean} error - input error state
 * @param {String} errorMessage - input error message
*/

export function DatePicker ({label, error, errorMessage, ...props }) {

  return (
    <Wrapper error={error}>
      { label && <Label> {label} </Label> }

      <Content>
        <ReactDatePicker
          {...props}
          withPortal
          onFocus={(e) => e.target.readOnly = true}
          autoComplete="off"
        />
        <Icon />
      </Content>

      { errorMessage && <ErrorMessage> {errorMessage} </ErrorMessage> }
    </Wrapper>
  )
}

DatePicker.defaultProps = {
  label: "",
  icon: false,
}
