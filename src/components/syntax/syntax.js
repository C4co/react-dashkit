import React from "react"
import styled from "styled-components"
import { Prism } from "react-syntax-highlighter"
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism"
import propTypes from "prop-types"

const Container = styled.div`
  *{
    font-family: "Fira Code" !important;
    font-weight: normal;
  }
`

const Arrow = styled.div`
  top: -20px;
  left: 20px;
  position: absolute;
  width: 0;
  height: 0;
  border-radius: 0px;
  border-style: solid;
  border-width: 0 15px 20px 15px;
  border-color: transparent transparent #262A3F transparent;
`

const SyntaxContent = styled.div`
  position: relative;
  margin-top: 30px;
  background-color: #262A3F;
  border-radius: 3px;
`

const SyntaxDescription = styled.span`
  display: block;
  padding: 15px 20px 15px 20px;
  color: #FFE7C7;
  border-radius: 3px;
  background-color: #262A3F;
  border-bottom: solid rgba(255, 255, 255, 0.1) 1px;
`

const SyntaxCode = styled(Prism)`
  border-radius: 3px !important;
  margin: 0px !important;
  position: relative;
  font-size: 1em;
  background-color: #262A3F !important;

  .react-syntax-highlighter-line-number{
    opacity: 0.5;
  }
`

export function Syntax ({
  code,
  description,
  lang,
  arrow
}) {
  return (
    <Container data-testid="syntax-container">
      <SyntaxContent data-testid="syntax-content">
        { arrow && <Arrow data-testid="syntax-arrow" /> }
        { description && <SyntaxDescription data-testid="syntax-description"> {description} </SyntaxDescription> }

        <SyntaxCode data-testid="syntax-code" showLineNumbers={true} language={lang} style={okaidia}>
          {code.trim()}
        </SyntaxCode>
      </SyntaxContent>
    </Container>
  )
}

Syntax.defaultProps = {
  arrow: true,
  lang: "jsx"
}

Syntax.propTypes = {
  code: propTypes.string,
  description: propTypes.string,
  lang: propTypes.string,
  arrow: propTypes.bool
}
