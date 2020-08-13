export const import1 = `import { Form } from "../components"`

export const example1 = `
<Form
  icon={FaUserPlus}
  error={true}
  errorTitle="Error"
  errorMessage="This email already exists"
  title="Basic details">

  <Column col={2}>
    <Input icon={FaUser} label="First name" placeholder="Ex: John" />
    <Input icon={FaUser} label="Last name" placeholder="Ex: Doe" />
  </Column>

  <Input icon={FaUser} label="User ID" placeholder="Ex: john232" />
  <Input icon={FaEnvelope} label="Email" placeholder="Ex: johndoe@gmail.com" />

  <FormDivider title="Location" />

  <Column col={2}>
    <Select placeholder="Select the country" options={country} label="Country" />
    <Select placeholder="Select the state" options={state} label="State" />
  </Column>

  <FormDivider title="User Role"/>

  <Radio options={roles} />

  <FormDivider title="Use Terms" />

  <Checkbox label="Check the use terms" description="Signing up signifies that you have read and agree to the Terms of Service and our Privacy Policy." />

  <Button> Cadastrar </Button>
</Form>
`

export const example2 = `
<Form>
  <h1 className="dk__no-margin-bottom"> Enter </h1>

  <div>
    <A href="#"> Create new account </A>
  </div>

  <Column col={2}>
    <Input icon={FaEnvelope} label="Email" placeholder="Ex: John" />
    <InputPassword label="Password" placeholder="Entrer your password" />
  </Column>

  <div>
    <A href="#"> Recover password </A>
  </div>

  <Button> Enter </Button>
</Form>
`

export const example3 = `
<Form isLoading="Loading...">
  <h1 className="dk__no-margin-bottom"> Enter </h1>

  <div>
    <A href="#"> Create new account </A>
  </div>

  <Column col={2}>
    <Input icon={FaEnvelope} label="Email" placeholder="Ex: John" />
    <InputPassword label="Password" placeholder="Entrer your password" />
  </Column>

  <div>
    <A href="#"> Recover password </A>
  </div>

  <Button> Enter </Button>
</Form>
`
