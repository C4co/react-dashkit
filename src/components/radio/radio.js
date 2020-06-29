import React from "react"
import styled from "styled-components"
import { COLORS } from "../../values"

function ID () {
  return "_" + Math.random().toString(36).substr(2, 9)
}

const Group = styled.div``

const Element = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 40px;
  padding-top: 10px;
  padding-bottom: 10px;

  &:last-of-type{
    margin-bottom: 0;
  }

  input[type="radio"] {
    display: none;
  }

  label {
    display: inline-block;
    margin: 0;
  }

  label::before {
    position: absolute;
    -webkit-transform: translate(0%,-50%);
    transform: translate(0%,-50%);
    top: 50%;
    left: 0px;
    display: inline-block;
    width: 27px;
    height: 27px;
    content: "";
    border: solid ${COLORS.INPUT_BORDER} 3px;
    border-radius: 100%;
    background-color: ${COLORS.WHITE};
    box-shadow: inset 0 0 0 3px #fff;
  }

  input[type="radio"]:checked + label::before {
    background-color: ${COLORS.PRIMARY};
    border: solid ${COLORS.PRIMARY} 3px;
  }

  input[type="radio"][disabled] + label::before {
    cursor: no-drop;
    opacity: 0.2;
  }
`

const Title = styled.p`
  color: ${COLORS.TEXT_DARK};
  font-weight: bold;
  margin: 0 0 2px 0;
`

const Description = styled.p`
  margin: 0;
`

const Label = styled.h1`
  font-size: 1.1em;
  color: ${COLORS.TEXT_DARK};
  margin-bottom: 10px;
`

export function Radio({ options, label, ...props }){
  const name = ID()

  return (
    <Group>
      { label && <Label> { label } </Label> }

      { options.map((item) => {
        return (
          <Element key={item.value}>
            <input
              {...props}
              name={`deck-radio-${name}`}
              type="radio"
              id={`${item.key}-${item.value}-${name}`}
              value={item.value} />

            <label htmlFor={`${item.key}-${item.value}-${name}`}>
              <Title> {item.key} </Title>
              { item.description && <Description> { item.description } </Description>}
            </label>
          </Element>
        )
      })}
    </Group>
  )
}
