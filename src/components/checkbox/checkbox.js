import React from "react"
import styled, {css} from "styled-components"
import { COLORS } from "../../values"

function ID () {
  return "_" + Math.random().toString(36).substr(2, 9)
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 15px;
  padding: 4px 0 4px 0;
`

const Check = styled.input`
  display: none;

  & + label::before {
    display: block;
    left: 0px;
    width: 27px;
    height: 27px;
    border-radius: 3px;
    position: absolute;
    -webkit-transform: translate(0%,-50%);
    transform: translate(0%,-50%);
    top: 50%;
    left: 0px;
    content: "";
    border: solid ${COLORS.INPUT_BORDER} 3px;
    box-shadow: inset 0 0 0 3px #fff;
    background-color: white;

    ${props => props.disabled && css`
      background-color: ${COLORS.INPUT_BORDER};
      cursor: not-allowed;
      box-shadow: none;
    `}

  }

  &:checked + label::before {
    background: ${COLORS.PRIMARY};
    border: solid ${COLORS.PRIMARY} 3px;
  }
`

const Label = styled.label`
  padding-left: 41px;
  position: relative;

  ${props => props.disabled && css`
    text-decoration: line-through;
  `}
`

const Title = styled.p`
  font-weight: bold;
  color: ${COLORS.TEXT_DARK};
  margin: 0;
`

const Description = styled.p`
  color: ${COLORS.TEXT};
  margin: 0;
`

/**
 * @param {String} label - checkbox label
 */

export function Checkbox ({ label, description, ...props }) {
  const id = ID()

  return (
    <Wrapper>
      <Check type="checkbox" {...props} id={id} />
      <Label disabled={props.disabled} htmlFor={id}>
        <Title> {label} </Title>
        {description && <Description> {description} </Description>}
      </Label>
    </Wrapper>
  )
}

Checkbox.defaultProps = {
  label: "Checkbox"
}
