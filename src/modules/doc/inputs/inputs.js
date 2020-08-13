import React from "react"

import {
  Block,
  Syntax,
  Input,
  InputPassword,
  TextArea,
  BasicTable,
} from "../../../components"

import { DocTemplate } from "../../../templates"

import { FaUser, FaCog } from "react-icons/fa"

import {
  import1,
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8
} from "./inputs-examples"

import { tableProps } from "./inputs-props"

export function DocInputs(){
  return (
    <DocTemplate actived="inputs" title="Inputs">

      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block>
        <BasicTable icon={FaCog} data={tableProps} title="<Input> - properties" />
      </Block>

      <Block bigMargin>
        <Input label="Label" placeholder="Entrer your text" />
        <Syntax code={example1}/>
      </Block>

      <Block bigMargin>
        <Input icon={FaUser} label="Input with icon" placeholder="Entrer your text" />
        <Syntax code={example2}/>
      </Block>

      <Block bigMargin>
        <Input
          icon={FaUser}
          label="Input error state"
          error={true}
          errorMessage="Error: error message"
          placeholder="Entrer your text" />
        <Syntax code={example3}/>
      </Block>

      <Block bigMargin>
        <Input
          icon={FaUser}
          label="Input success state"
          success
          placeholder="Entrer your text" />
        <Syntax code={example4}/>
      </Block>

      <Block bigMargin>
        <Input
          icon={FaUser}
          disabled
          label="Input disabled"
          placeholder="Enter your password" />
        <Syntax code={example5}/>
      </Block>

      <Block bigMargin>
        <InputPassword label="Input password" placeholder="Enter your password" />
        <Syntax code={example6}/>
      </Block>

      <Block bigMargin>
        <Input
          label="Another input"
          InputComponent={() => <input placeholder="Another input"/>} />
        <Syntax code={example7}/>
      </Block>

      <Block>
        <TextArea
          error
          errorMessage="Hello world!"
          label="Textarea"
          placeholder="Enter text" />
        <Syntax code={example8}/>
      </Block>

    </DocTemplate>
  )
}
