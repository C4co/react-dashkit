export const import1 = `import {
  BasicTable,
  DynamicTable
} from "../components"`

export const example1 = "<BasicTable title=\"The title\"/>"

export const example2 = "<DynamicTable title=\"The title\" />"

export const example3 = `
const data = [
  {
    ID: 11,
    Name: "Samuel Fleming",
    Brithday: "08/05/1966",
    Address: "6517 Green Rd",
    Phone: "(039)-678-3922"
  },
  {
    ID: 12,
    Name: "Judson Kub Sr.",
    Brithday: "12/01/1995",
    Address: "4794 E Pecan St",
    Phone: "(513)-509-0129"
  },
  {
    ID: 13,
    Name: "Patrick West",
    Brithday: "11/07/1985",
    Address: "8510 James St",
    Phone: "(683)-472-0529"
  }
]

...

<BasicTable data={data} />
`

export const example4 = `
const data = [
  {
    ID: 11,
    Name: "Samuel Fleming",
    Brithday: "08/05/1966",
    Address: "6517 Green Rd",
    Phone: "(039)-678-3922"
  },
  {
    ID: 12,
    Name: "Judson Kub Sr.",
    Brithday: "12/01/1995",
    Address: "4794 E Pecan St",
    Phone: "(513)-509-0129"
  },
  {
    ID: 13,
    Name: "Patrick West",
    Brithday: "11/07/1985",
    Address: "8510 James St",
    Phone: "(683)-472-0529"
  }
]

function onSelectItemsHandle(items){
  console.log(items)
}

...

<DynamicTable onSelectItems={onSelectItemsHandle} data={data} />
`
