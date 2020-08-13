import React, {useState, useEffect} from "react"

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

export function DynamicTable({data, onSelectItems, title, icon}){
  const [selectedItems, setSelectedItems] = useState(new Set())
  const [selectedData, setSelectedData] = useState(new Set())
  const [firstTime, setFirstTime] = useState(false)
  const [allSelected, setAllSelected] = useState(false)

  useEffect(() => {
    if(firstTime){
      onSelectItems([...selectedData])
    }

    if( data && (data.length === [...selectedData].length)){
      setAllSelected(true)
    }

  }, [selectedItems, selectedData, onSelectItems, firstTime, data])

  if(!data){
    return (
      <Alert danger title="Error">
        DynamicTable need a valid data structure.
      </Alert>
    )
  }

  const labels = Object.keys(data[0])
  const Icon = icon

  function toggleSelected(index, data){
    if(selectedItems.has(index)){
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

  function selectAll(){
    if(allSelected){
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
              <TableTitle>
                <TableCheck onClick={selectAll} checked={allSelected} />
              </TableTitle>
              {
                labels.map(item => {
                  return (
                    <TableTitle key={item}> { item } </TableTitle>
                  )
                })
              }
            </TableLabels>
          </TableHead>

          <tbody>
            {
              data.map((element, index) => {
                return (
                  <TableItem
                    selected={selectedItems.has(index)}
                    onClick={() => {
                      toggleSelected(index, element)
                      setFirstTime(true)
                    }}
                    key={index}>

                    <TableCell>
                      <TableCheck checked={selectedItems.has(index)} />
                    </TableCell>

                    {
                      Object.values(element).map((item, index) => {
                        return (
                          <TableCell key={index}> { item || "―"} </TableCell>
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
