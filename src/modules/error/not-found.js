import React from "react"
import styled from "styled-components"
import { Main } from "../../components"
import { COLORS, IMAGES } from "../../values"

const Center = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.BLACK};
`

const Content = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 50px;

  @media(max-width: 700px){
    grid-template-columns: auto;
    gap: 0px;
  }
`

const Image = styled.img`
  border-radius: 10px;
  max-width: 400px;
  width: 400px;
  min-height: 100%;

  @media(max-width: 700px){
    width: 250px;
  }
`

const ErrorText = styled.div``

const ErrorCode = styled.h1`
  font-size: 5em;
  margin: 0;
  text-align: center;
`

const ErrorMessage = styled.span`
  text-align: center;
  display: block;
  width: 100%;
`

export function NotFound () {
  return (
    <Main>
      <Center>
        <Content>
          <Image src={IMAGES.NOT_FOUND} />
          <ErrorText>
            <ErrorCode> 404 </ErrorCode>
            <ErrorMessage> Page not found </ErrorMessage>
          </ErrorText>
        </Content>
      </Center>
    </Main>
  )
}
