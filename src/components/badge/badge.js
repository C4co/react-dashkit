import styled, { css } from "styled-components"
import { lighten, darken } from "polished"
import { COLORS } from "../../values"

export const Badge = styled.div`
  display: inline-block;
  font-size: 0.62em;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 10px 5px 10px;
  border-radius: 100px;
  color: ${darken(0.2, COLORS.INFO)};
  background-color: ${lighten(0.32, COLORS.INFO)};

  ${props => props.solid && css`
    background-color: ${COLORS.INFO};
    color: white;
  `}

  ${props => props.danger && css`
    color: ${darken(0.2, COLORS.DANGER)};
    background-color: ${lighten(0.32, COLORS.DANGER)};
  `}

  ${props => props.danger && props.solid && css`
    background-color: ${COLORS.DANGER};
    color: white;
  `}

  ${props => props.success && css`
    color: ${darken(0.2, COLORS.SUCCESS)};
    background-color: ${lighten(0.32, COLORS.SUCCESS)};
  `}

  ${props => props.success && props.solid && css`
    background-color: ${COLORS.SUCCESS};
    color: white;
  `}

  ${props => props.warn && css`
    color: ${darken(0.2, COLORS.WARN)};
    background-color: ${lighten(0.32, COLORS.WARN)};
  `}

  ${props => props.warn && props.solid && css`
    background-color: ${COLORS.WARN};
    color: white;
  `}
`
