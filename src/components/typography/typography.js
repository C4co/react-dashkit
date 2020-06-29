import styled from "styled-components"
import { COLORS, SIZE } from "../../values"
import { lighten } from "polished"

export const Text = styled.p`
  font-size: 1em;
  line-height: 1.7em;
  margin-bottom: ${SIZE.TEXT.MARGIN};
  color: ${COLORS.TEXT};

  &:last-of-type{
    margin-bottom: 0;
  }
`

export const Title = styled.h1`
  font-size: 2.3em;
  color: ${COLORS.TEXT_DARK} !important;
  margin-bottom: ${SIZE.TEXT.MARGIN};
  color: ${COLORS.TEXT_DARK};
`

export const SubTitle = styled.h2`
  font-size: 1.6em;
  font-weight: normal;
  margin-bottom: ${SIZE.TEXT.MARGIN};
  color: ${COLORS.TEXT_DARK};
`

export const A = styled.a`
  text-decoration: none;
  color: ${COLORS.LINK};
  border-bottom: solid ${lighten(0.3, COLORS.LINK)} 4px;

  &:hover{
    border-bottom: solid ${lighten(0, COLORS.LINK)} 4px;
  }
`
