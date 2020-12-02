import React, { useState, useEffect } from "react"

import {
  Header,
  HeaderTitle,
  TableCell,
  TableCheck,
  TableContent,
  TableHead,
  TableItem,
  TableLabels,
  TableTitle,
  HeaderIcon,
  Container,
  Content
} from "./table-components"

import { Alert } from "../alert/alert"
import propTypes from "prop-types"

export function DynamicTable ({ data, onSelectItems, title, icon }) {
  const [selectedItems, setSelectedItems] = useState(new Set())
  const [selectedData, setSelectedData] = useState(new Set())
  const [firstTime, setFirstTime] = useState(false)
  const [allSelected, setAllSelected] = useState(false)

  useEffect(() => {
    if (firstTime) {
      onSelectItems([...selectedData])
    }

    if (data && (data.length === [...selectedData].length)) {
      setAllSelected(true)
    }
  }, [selectedItems, selectedData, onSelectItems, firstTime, data])

  if (!data) {
    return (
      <Alert danger title="Error">
        DynamicTable need a valid data structure.
      </Alert>
    )
  }

  const labels = Object.keys(data[0])
  const Icon = icon

  function toggleSelected (index, data) {
    setFirstTime(true)

    if (selectedItems.has(index)) {
      const cloneItems = selectedItems
      const cloneData = selectedData

      cloneItems.delete(index)
      cloneData.delete(data)

      setSelectedItems(new Set([...cloneItems]))
      setSelectedData(new Set([...cloneData]))
      setAllSelected(false)
      return false
    }

    setSelectedItems(new Set([...selectedItems]).add(index))
    setSelectedData(new Set([...selectedData]).add(data))
    setAllSelected(false)
  }

  function selectAll () {
    setFirstTime(true)

    if (allSelected) {
      setSelectedItems(new Set())
      setSelectedData(new Set())
      setAllSelected(false)

      return false
    }

    setSelectedItems(new Set([...data.keys()]))
    setSelectedData(new Set(data))
    setAllSelected(true)
  }

  return (
    <Container data-testid="dynamic-container">
      {
        title &&
        <Header data-testid="dynamic-header">
          { icon && <HeaderIcon data-testid="dynamic-header-icon"> <Icon data-testid="dynamic-icon"/> </HeaderIcon> }
          <HeaderTitle data-testid="dynamic-header-title"> { title } </HeaderTitle>
        </Header>
      }

      <Content data-testid="dynamic-content">
        <TableContent data-testid="dynamic-table-content">

          <TableHead data-testid="dynamic-table-head">
            <TableLabels data-testid="dynamic-table-labels">

              <TableTitle data-testid="dynamic-table-title-check">
                <TableCheck data-testid="dynamic-table-check-all" onClick={selectAll} checked={allSelected} />
              </TableTitle>

              {
                labels.map(item => {
                  return (
                    <TableTitle data-testid="dynamic-table-title" key={item}> { item } </TableTitle>
                  )
                })
              }

            </TableLabels>
          </TableHead>

          <tbody data-testid="dynamic-table-body">
            {
              data.map((element, index) => {
                return (
                  <TableItem
                    data-testid="dynamic-table-item"
                    selected={selectedItems.has(index)}
                    onClick={() => { toggleSelected(index, element) }}
                    key={index}>

                    <TableCell data-testid="dynamic-table-cell-check">
                      <TableCheck data-testid="dynamic-table-check" checked={selectedItems.has(index)} />
                    </TableCell>

                    {
                      Object.values(element).map((item, index) => {
                        return (
                          <TableCell data-testid="dynamic-table-cell" key={index}>
                            { item || "―"}
                          </TableCell>
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

DynamicTable.defaultProps = {
  onSelectItems: () => {}
}

DynamicTable.propTypes = {
  data: propTypes.array,
  onSelectItems: propTypes.func,
  title: propTypes.string,
  icon: propTypes.any
}
