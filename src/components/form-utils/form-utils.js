import styled from "styled-components"
import { COLORS } from "../../values"

export const Label = styled.span`
  display: block;
  margin-bottom: 7px;
  font-size: 0.95em;
  color: ${COLORS.TEXT_DARK};
`

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 0.95em;
  font-style: oblique;
  color: ${COLORS.DANGER};
`
