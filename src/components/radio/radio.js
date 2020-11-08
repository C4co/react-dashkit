import React from "react"
import styled from "styled-components"
import { COLORS } from "../../values"

function ID () {
  return "_" + Math.random().toString(36).substr(2, 9)
}

const Group = styled.div`
  display: grid;
  grid-auto-columns: auto;
  gap: 20px;
`

const Element = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 50px;

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
  margin: 0 0 5px 0;
`

const Description = styled.p`
  margin: 0;
  font-size: 0.9em;
  font-style: oblique;
`

export function Radio ({ options, ...props }) {
  const name = ID()

  return (
    <Group data-testid="radio-group">
      { options.map((item) => {
        return (
          <Element data-testid="radio-element" key={item.value}>
            <input
              {...props}
              data-testid="radio-element-input"
              name={`dashkit-radio-${name}`}
              type="radio"
              id={`${item.key}-${item.value}-${name}`}
              value={item.value} />

            <label data-testid="radio-element-label" htmlFor={`${item.key}-${item.value}-${name}`}>
              <Title data-testid="radio-element-title"> {item.key} </Title>
              {
                item.description &&
                <Description data-testid="radio-element-description">
                  { item.description }
                </Description>
              }
            </label>
          </Element>
        )
      })}
    </Group>
  )
}
