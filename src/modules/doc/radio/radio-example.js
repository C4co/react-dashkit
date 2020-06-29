export const import1 = `
  import { Radio } from "../components"
`

export const example1 = `
const [value, setValue] = useState(null)

useEffect(() => {
  console.log(value)
})

const data1 = [
  { key: "First", value: 1, description: "First description" },
  { key: "Second", value: 2, description: "Second description" },
  { key: "Third", value: 3, description: "Third description" },
  { key: "Fourth", value: 4, description: "Fourth description" }
]

...

<Radio
  options={data}
  onChange={(event) => {setValue(event.target.value)}} />
`
