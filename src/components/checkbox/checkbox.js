import propTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../values"

function ID () {
  return "_" + Math.random().toString(36).substr(2, 9)
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 15px;
  padding-bottom: 3px;
  padding-top: 3px;
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
    content: "";
    border: solid ${COLORS.INPUT_BORDER} 3px;
    box-shadow: inset 0 0 0 3px #fff;
    background-color: ${COLORS.WHITE};

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
  padding-left: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${props => props.disabled && css`
    text-decoration: line-through;
  `}
`

const Title = styled.p`
  font-weight: bold;
  color: ${COLORS.TEXT_DARK};
  display: flex;

  ${props => props.description && css`
    margin-bottom: 5px;
  `}
`

const Description = styled.p`
  color: ${COLORS.TEXT};
  font-size: 0.9em;
  font-style: oblique;
  margin: 0;
`

/**
 * @param {String} label - checkbox label
 */

export function Checkbox ({ label, description, ...props }) {
  const id = ID()

  return (
    <Wrapper data-testid="checkbox-wrapper">
      <Check data-testid="checkbox-element" type="checkbox" {...props} id={id} />
      <Label data-testid="checkbox-label" disabled={props.disabled} htmlFor={id}>
        <Title data-testid="checkbox-title" description={description}> {label} </Title>
        {description && <Description data-testid="checkbox-description" > {description} </Description>}
      </Label>
    </Wrapper>
  )
}

Checkbox.defaultProps = {
  label: "Checkbox"
}

Checkbox.propTypes = {
  label: propTypes.string,
  description: propTypes.string,
  disabled: propTypes.bool
}
