import React from "react"

import { Main } from "../components"

import styled from "styled-components"

import { COLORS, IMAGES } from "../values"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

  @media(max-width: 800px){
    flex-direction: column;
  }
`

const Effect = styled.div`
  width: 100%;
  background-color: ${ COLORS.PRIMARY };
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 800px){
    height: 100px;
  }
`

const Logo = styled.img`
  width: 100%;
  padding: 10px;
  max-width: 200px;

  @media(max-width: 800px){
    max-width: 130px;
  }
`

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${COLORS.WHITE};

  @media(max-width: 800px){
    margin: 20px auto 0 auto;
  }

  @media(max-width: 600px){
    max-width: 100%;
    margin: 0px auto 0 auto;
  }
`

const FormContent = styled.div`
  width: 100%;
  max-width: 480px;

  @media(max-width: 800px){
    max-width: 100%;
  }
`

export function AuthTemplate({ children }){
  return (
    <Main white>
      <Container>
        <Effect>
          <Logo src={IMAGES.DECK_LOGO} />
        </Effect>

        <Content>
          <FormContent>
            { children }
          </FormContent>
        </Content>

      </Container>
    </Main>
  )
}
