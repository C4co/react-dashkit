export const import1 = `
  import { DatePicker } from "../components"
`

export const example1 = `
...
const [date, setDate] = useState(new Date())
...
<DatePicker
  selected={date}
  onChange={date => {setDate(date)}}
/>
`

export const example2 = `
...
const [date, setDate] = useState(new Date())
...
<DatePicker
  error
  errorMessage="Error message"
  selected={date}
  onChange={date => {setDate(date)}}
/>
`
