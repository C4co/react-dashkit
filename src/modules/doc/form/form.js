import React from "react"

import {
  FaUserPlus,
  FaUser,
  FaEnvelope,
  FaCog
} from "react-icons/fa"

import {
  Block,
  Syntax,
  Form,
  FormDivider,
  Input,
  Button,
  Column,
  Select,
  Checkbox,
  Radio,
  InputPassword,
  BasicTable,
  A,
  Title
} from "../../../components"

import { DocTemplate } from "../../../templates"

import { import1, example1, example2, example3 } from "./form-example"

import { formProps, formDividerProps } from "./form-props"

export function DocForm () {
  const country = [
    { key: "United Stated", value: 1 },
    { key: "Brazil", value: 2 },
    { key: "India", value: 3 },
    { key: "China", value: 4 }
  ]

  const state = [
    { key: "California", value: 1 },
    { key: "Texas", value: 2 },
    { key: "New Jersey", value: 3 },
    { key: "Michigan", value: 4 }
  ]

  const roles = [
    { key: "Super Admin", value: 1, description: "somebody with access to the site network administration features and all other features. See the Create a Network article." },
    { key: "Administrator", value: 2, description: "somebody who has access to all the administration features within a single site." },
    { key: "Editor", value: 3, description: "somebody who can publish and manage posts including the posts of other" },
    { key: "Author", value: 4, description: "somebody who can publish and manage their own posts." }
  ]

  return (
    <DocTemplate actived="form" title="Form">

      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCog} title="<Form> - properties" data={formProps} />
      </Block>

      <Block bigMargin>
        <BasicTable icon={FaCog} title="<FormDivider> - properties" data={formDividerProps} />
      </Block>

      <Block bigMargin>
        <Form
          icon={FaUserPlus}
          error={true}
          errorTitle="Error"
          errorMessage="This email already exists"
          title="New user">

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

        <Syntax code={example1} />
      </Block>

      <Block bigMargin>
        <Form>
          <Title h3 className="dk__no-margin-bottom"> Enter </Title>

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

        <Syntax code={example2} />
      </Block>

      <Block bigMargin>
        <Form isLoading="Loading...">
          <Title h3 className="dk__no-margin-bottom"> Enter </Title>

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

        <Syntax code={example3} />
      </Block>

    </DocTemplate>
  )
}
