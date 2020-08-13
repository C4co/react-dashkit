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

export function BasicTable({ data, title, icon }){
  if(!data){
    return (
      <Alert danger title="Error"> BasicTable need a valid data structure. </Alert>
    )
  }

  const labels = Object.keys(data[0])
  const Icon = icon

  return (
    <Container>
      {
        title &&
        <Header>
          { icon && <HeaderIcon> <Icon/> </HeaderIcon> }
          <HeaderTitle> { title } </HeaderTitle>
        </Header>
      }

      <Content>
        <TableContent>
          <TableHead>
            <TableLabels>
              {
                labels.map(item => {
                  return (
                    <TableTitle key={item}> {item} </TableTitle>
                  )
                })
              }
            </TableLabels>
          </TableHead>

          <tbody>
            {
              data.map((element, index) => {
                return (
                  <TableItem key={index}>
                    {
                      Object.values(element).map((item, index) => {
                        return (
                          <TableCell key={index}> { item || "―" } </TableCell>
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
