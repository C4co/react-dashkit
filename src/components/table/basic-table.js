import React from "react"

import {
  Header,
  HeaderTitle,
  HeaderIcon,
  TableCell,
  TableContent,
  TableHead,
  TableItem,
  TableLabels,
  TableTitle,
  Container,
  Content
} from "./table-components"

import { Alert } from "../alert/alert"
import propTypes from "prop-types"

export function BasicTable ({
  data,
  title,
  icon
}) {
  if (!data) {
    return (
      <Alert danger title="Error"> BasicTable need a valid data structure. </Alert>
    )
  }

  const labels = Object.keys(data[0])
  const Icon = icon

  return (
    <Container data-testid="basic-container">
      {
        title &&
          <Header data-testid="basic-header">
            {
              icon &&
              <HeaderIcon data-testid="basic-header-icon">
                <Icon data-testid="basic-icon"/>
              </HeaderIcon>
            }
            <HeaderTitle data-testid="basic-title">
              { title }
            </HeaderTitle>
          </Header>
      }

      <Content data-testid="basic-content">
        <TableContent data-testid="basic-table-content">
          <TableHead data-testid="basic-table-head">
            <TableLabels data-testid="basic-table-labels">
              {
                labels.map(item => {
                  return (
                    <TableTitle data-testid="basic-table-title" key={item}> {item} </TableTitle>
                  )
                })
              }
            </TableLabels>
          </TableHead>

          <tbody data-testid="basic-table-body">
            {
              data.map((element, index) => {
                return (
                  <TableItem data-testid="basic-table-item" key={index}>
                    {
                      Object.values(element).map((item, index) => {
                        return (
                          <TableCell data-testid="basic-table-cell" key={index}> { item || "―" } </TableCell>
                        )
                      })
                    }
                  </TableItem>
                )
              })
            }
          </tbody>

        </TableContent>
      </Content>
    </Container>
  )
}

BasicTable.propTypes = {
  data: propTypes.array,
  title: propTypes.string,
  icon: propTypes.any
}
