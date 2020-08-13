export const import1 = `import {
  BasicTable,
  DynamicTable
} from "../components"`

export const example1 = `<BasicTable title="The title"/>`

export const example2 = `<DynamicTable title="The title" />`

export const example3 = `
const data = [
  {
    "ID": 11,
    "Mounth": "primeiro1",
    "Savings": "segundo1",
    "Type": "terceiro1",
    "Test": "foo"
  },
  {
    "ID": 12,
    "Mounth": "primeiro1",
    "Savings": "segundo1",
    "Type": "terceiro1",
    "Test": "foo"
  },
  {
    "ID": 13,
    "Mounth": "primeiro1",
    "Savings": "segundo1",
    "Type": "terceiro1",
    "Test": "foo"
  },
]

...

<BasicTable data={data} />
`

export const example4 = `
const data = [
  {
    "ID": 11,
    "Mounth": "primeiro1",
    "Savings": "segundo1",
    "Type": "terceiro1",
    "Test": "foo"
  },
  {
    "ID": 12,
    "Mounth": "primeiro1",
    "Savings": "segundo1",
    "Type": "terceiro1",
    "Test": "foo"
  },
  {
    "ID": 13,
    "Mounth": "primeiro1",
    "Savings": "segundo1",
    "Type": "terceiro1",
    "Test": "foo"
  },
]

function onSelectItemsHandle(items){
  console.log(items)
}

...

<DynamicTable onSelectItems={onSelectItemsHandle} data={data} />
`
