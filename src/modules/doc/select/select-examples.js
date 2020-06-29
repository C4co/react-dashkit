export const import1 = `
import { select } from "../components"
`

export const example1 = `
...

const data = [
  {key: "first", value: 1},
  {key: "second", value: 2},
  {key: "third", value: 3},
  {key: "fourth", value: 4}
]

...

<Select
  placeholder="Select an option"
  options={data}
  label="My select" />
`

export const example2 = `
...

const data = [
  {key: "first", value: 1},
  {key: "second", value: 2},
  {key: "third", value: 3},
  {key: "fourth", value: 4}
]

...

<Select
  error
  errorMessage="Error message example"
  placeholder="Select an option"
  options={data}
  label="My select" />
`
