import React from "react"
import {
  Block,
  BlockField,
  Syntax,
  Input,
  InputPassword,
  TextArea,
  A
} from "../../../components"

import { DocTemplate } from "../../../templates"

import { FaUser, FaCog, FaDiceD6 } from "react-icons/fa"

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

export function DocInputs(){
  return (
    <DocTemplate actived="inputs" title="Inputs">

      <Block bigMargin>
        <Syntax code={import1} arrow={false} />
      </Block>

      <Block Icon={FaCog} bigMargin title="<inputs> - properties" solid>
        <BlockField title="label">
          string - input label
        </BlockField>

        <BlockField title="placeholder">
          string - input placeholder
        </BlockField>

        <BlockField title="icon">
          reactIcon - icon inside input
        </BlockField>

        <BlockField title="error">
          boolean - input on error mode
        </BlockField>

        <BlockField title="success">
          boolean - input on success mode
        </BlockField>

        <BlockField title="InputComponent">
          component - set default input component
        </BlockField>
      </Block>

      <Block Icon={FaDiceD6} bigMargin solid title="Dependencies">
        <BlockField>
          <A href="https://github.com/react-icons/react-icons">
            React icons
          </A>
        </BlockField>
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
          label="Input password"
          placeholder="Enter your password" />
        <Syntax code={example5}/>
      </Block>

      <Block bigMargin>
        <InputPassword label="Input disabled" placeholder="Enter your password" />
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
