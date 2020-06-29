import styled from "styled-components"
import { COLORS } from "../../values"

export const Label = styled.span`
  display: block;
  margin-bottom: 5px;
  font-weight: normal;
  color: ${COLORS.TEXT_DARK};
`

export const ErrorMessage = styled.span`
  display: block;
  margin-top: 5px;
  color: ${COLORS.DANGER};
`
