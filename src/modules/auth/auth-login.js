import React from "react"

import { AuthTemplate } from "../../templates"

import {
  Form,
  Input,
  InputPassword,
  Button,
  Title,
  Text,
  A
} from "../../components"

import { FaEnvelope } from "react-icons/fa"

export function AuthLogin () {
  return (
    <AuthTemplate>
      <Form error errorMessage="Invalid credentials">
        <Title h4 className="no-margin"> Enter </Title>
          <div>
            <A href="#"> Create new account </A>
          </div>

          <Input icon={FaEnvelope} label="Email" placeholder="Ex: John" />
          <InputPassword label="Password" placeholder="Enter your password" />

          <div>
            <A href="#"> Recover password </A>
          </div>
        <Button> Enter </Button>
      </Form>
      <Text className="margin-top"> Dashkit • 2020 </Text>
    </AuthTemplate>
  )
}
