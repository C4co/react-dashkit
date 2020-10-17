import React from "react"

import { AuthTemplate } from "../../templates"

import {
  Form,
  Input,
  InputPassword,
  Button,
  Title,
  A
} from "../../components"

import { FaEnvelope } from "react-icons/fa"

export function AuthLogin () {
  return (
    <AuthTemplate>
      <Form noShadow>
        <Title h4 className="no-margin"> Enter </Title>
        <div>
          <A href="#"> Create new account </A>
        </div>

        <Input id="auth-email" icon={FaEnvelope} label="Email" placeholder="Ex: John@email.com" />
        <InputPassword id="auth-password" label="Password" placeholder="Enter your password" />

        <div>
          <A href="#"> Recover password </A>
        </div>
        <Button> Enter </Button>
      </Form>
    </AuthTemplate>
  )
}
