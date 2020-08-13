import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../values"
import { FaExclamationCircle } from "react-icons/fa"
import { lighten } from "polished"
import { Spinner } from "../spinner/spinner"

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

const FormErrorWrapper = styled.div`
  background: ${COLORS.DANGER};
  color: ${COLORS.WHITE};
  display: flex;
  padding: 15px;
  font-size: 1em;
  align-items: center;
`

const FormErrorIcon = styled(FaExclamationCircle)`
  margin-right: 10px;
  opacity: 0.7;
  font-size: 20px;
  min-width: 20px;
  width: 20px;
`

const FormWrapper = styled.section`
  background-color: ${COLORS.WHITE};
  border-radius: 3px;
  overflow: hidden;
  border: solid ${COLORS.WHITE} 1px;
  box-shadow: 0px 2px 2px 0px ${COLORS.BLOCK_SHADOW};
  position: relative;
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

const FormFooter = styled.footer`
  border: solid red 1px;
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
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export function Form({
  children,
  title,
  error,
  errorTitle,
  errorMessage,
  icon,
  isLoading
}){

  const Icon = icon

  return (
    <FormWrapper>
      {  isLoading &&
        <FormLoading>
          <Spinner size={40} />
          <br/>
          { isLoading }
        </FormLoading> }

      {
        (icon || title) &&
        <FormHeader>
          { icon && <FormIcon> <Icon/> </FormIcon> }
          { title && <FormTitle> { title } </FormTitle> }
        </FormHeader>
      }

      <FormContent>
        { children }
      </FormContent>

      {
        error &&
        <FormFooter>
          <FormErrorWrapper>
            <FormErrorIcon />
            <div>
              { errorTitle && <b> {errorTitle} - </b> }
              { errorMessage }
            </div>
          </FormErrorWrapper>
        </FormFooter>
      }

    </FormWrapper>
  )
}
