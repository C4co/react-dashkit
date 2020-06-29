import styled, { css } from "styled-components"
import { COLORS } from "../../values"

/**
 * @param {Boolean} col2 - split the grid with two columns
 */

export const FormDivider = styled.div`
  margin-bottom: 15px;

  &:last-of-type{
    margin-bottom: 0px;
  }

  ${props => props.col2 && css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media(max-width: 800px){
      grid-template-columns: 1fr;
      gap: 20px;
    }
  `}
`

export const FormError = styled.div`
  background: ${COLORS.DANGER};
  border-radius: 3px;
  padding: 10px 15px 10px 15px;
  color: ${COLORS.WHITE};
  font-size: 0.9em;
  margin-top: 15px;
`
