import styled, { css } from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 20px;

  *{
    margin-bottom: 0;
  }

  ${props => props.col && css`
    grid-template-columns: repeat(${props.col}, 1fr);
  ` }
`
