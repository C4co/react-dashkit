export const import1 = `
import { Input, InputPassword, TextArea } from "../componentes"
import { FaUser } from "react-icons/fa"
`

export const example1 = `
<Input
  label="Label"
  placeholder="Entrer your text" />
`

export const example2 = `
<Input
  icon={FaUser}
  label="Input with icon"
  placeholder="Entrer your text" />
`

export const example3 = `
<Input
  icon={FaUser}
  label="Input error state"
  error={true}
  errorMessage="Error: error message"
  placeholder="Entrer your text" />
`

export const example4 = `
<Input
  icon={FaUser}
  label="Input success state"
  success
  placeholder="Entrer your text" />
`

export const example5 = `
<Input
  icon={FaUser}
  disabled
  label="Input password"
  placeholder="Enter your password" />
`

export const example6 = `
<InputPassword
  label="Input disabled"
  placeholder="Enter your password" />
`

export const example7 = `
<Input
  label="Another input"
  InputComponent={() => <input placeholder="Another input"/>} />
`

export const example8 = `
<TextArea
  error
  errorMessage="Hello world!"
  label="Textarea"
  placeholder="Enter text" />
`
