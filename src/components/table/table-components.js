import styled, { css } from "styled-components"
import { COLORS } from "../../values"

export const Container = styled.div`
  border-radius: 3px;
  background: white;
  box-shadow: 0px 2px 10px -3px ${COLORS.BLOCK_SHADOW};
  border: solid ${COLORS.WHITE} 1px;
  overflow: hidden;
`

export const Header = styled.header`
  border-bottom: solid ${COLORS.BORDER} 1px;
  padding: 20px;
  display: flex;
  align-items: center;
`

export const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 23px;
  margin-right: 20px;
  opacity: 0.4;
`

export const HeaderTitle = styled.h1`
  color: ${COLORS.TEXT_DARK};
  font-size: 1em;
`

export const Content = styled.div`
  width: 100%;
  overflow-x: auto;
`

export const TableContent = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 0.95em;
  min-width: 600px;
`

export const TableHead = styled.thead`
  border-bottom: solid ${COLORS.BORDER} 1px;
`

export const TableLabels = styled.tr`
  text-align: left;
`

export const TableTitle = styled.th`
  padding: 12px 20px 12px 20px;
  color: ${COLORS.TEXT_DARK};
`

export const TableItem = styled.tr`
  &:last-of-type{
    border: none;
  }

  ${props => props.selected && css`
    background: #F5F5F5;
  `}
`

export const TableCell = styled.td`
  margin: 0;
  padding: 12px 20px 12px 20px;
`

export const TableCheck = styled.div`
  border: solid ${COLORS.PRIMARY} 1px;
  width: 18px;
  height: 18px;
  border-radius: 3px;

  ${props => props.checked && css`
    background: ${COLORS.PRIMARY};
  `}
`
