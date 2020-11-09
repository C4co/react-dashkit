import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../values"
import { lighten } from "polished"
import { Spinner } from "../spinner/spinner"
import { Alert } from "../alert/alert"
import propTypes from "prop-types"

/**
 * @param {String} title - form divider title
 */

export const FormDivider = styled.div`
  ${props => props.title && css`
    &::before{
      content: \" ${props.title} \";
      display: block;
      border-bottom: solid ${COLORS.BORDER} 1px;
      margin-bottom: 10px;
      margin-top: 10px;
      padding-bottom: 10px;
      font-weight: bold;
      font-size: 1em;
      color: ${COLORS.TEXT_DARK};
    }
  `}
`

const FormWrapper = styled.section`
  background-color: ${COLORS.WHITE};
  border-radius: 3px;
  overflow: hidden;
  border: solid ${COLORS.WHITE} 1px;
  box-shadow: 0px 2px 2px 0px ${COLORS.BLOCK_SHADOW};
  position: relative;
  width: 100%;

  ${props => props.noShadow && css`
    box-shadow: none;
  `}

  ${props => props.error && css`
    border: solid ${COLORS.DANGER} 1px;
  `}
`

const FormContent = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  gap: 20px;
  padding: 30px;

  @media(max-width: 800px){
    padding: 20px;
  }
`

const FormHeader = styled.header`
  border-bottom: solid ${COLORS.BORDER} 1px;
  padding-bottom: 30px;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  align-items: center;
`

const FormTitle = styled.h1`
  color: ${COLORS.TEXT_DARK};
  font-size: 1em;
`

const FormIcon = styled.div`
  font-size: 30px;
  display: flex;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  color: ${lighten(0.4, COLORS.TEXT)};
  margin-right: 20px;
  background-color: ${lighten(0.6, COLORS.TEXT)};
  width: 60px;
  height: 60px;
  padding-top: 3px;
  margin: 0 auto 20px auto;
`

const FormLoading = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10;
  color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export function Form ({
  children,
  title,
  error,
  errorTitle,
  errorMessage,
  icon,
  noShadow,
  isLoading
}) {
  const Icon = icon

  return (
    <FormWrapper error={error} data-testid="form-wrapper" noShadow={noShadow}>
      {
        isLoading &&
        <FormLoading data-testid="form-loading">
          <Spinner data-spinner="form-spiner" size={40} />
          <br/>
          { isLoading }
        </FormLoading>
      }

      {
        (icon || title) &&
        <FormHeader data-testid="form-header">
          { icon && <FormIcon data-testid="form-icon"> <Icon/> </FormIcon> }
          { title && <FormTitle data-testid="form-title"> { title } </FormTitle> }
        </FormHeader>
      }

      <FormContent data-testid="form-content">
        { children }

        {
          error &&
            <Alert danger title={errorTitle}> { errorMessage} </Alert>
        }
      </FormContent>
    </FormWrapper>
  )
}

Form.propTypes = {
  children: propTypes.any,
  title: propTypes.any,
  error: propTypes.bool,
  errorTitle: propTypes.string,
  errorMessage: propTypes.string,
  icon: propTypes.elementType,
  noShadow: propTypes.bool,
  isLoading: propTypes.bool
}
