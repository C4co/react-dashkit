import React from "react"

import { Main } from "../components"

import styled from "styled-components"

import { COLORS, IMAGES } from "../values"

const BACKGROUND_FULL = "https://images.unsplash.com/photo-1568301956237-25a54f5f0d21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=100"
const BACKGROUND_LIGHT = "https://images.unsplash.com/photo-1568301956237-25a54f5f0d21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=100"

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
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media(max-width: 800px){
    padding: 10px;
    margin: 20px auto 0 auto;
  }

  @media(max-width: 600px){
    max-width: 100%;
    margin: 0px auto 0 auto;
  }
`

export function AuthTemplate({ children }){
  return (
    <Main>
      <Container>
        <Effect>
          <Logo src={IMAGES.DECK_LOGO} />
        </Effect>
        <Content>
          { children }
        </Content>
      </Container>
    </Main>
  )
}
