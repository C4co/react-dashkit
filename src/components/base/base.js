import styled, { css } from "styled-components"
import { COLORS } from "../../values"

export const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${COLORS.BACKGROUND};
  position: relative;
  color: ${COLORS.TEXT};

  ${props => props.white && css`
    background-color: ${COLORS.WHITE};
  `}
`
