import React from "react"
import { Main, Link } from "../../components"
import styled from "styled-components"
import { IMAGES } from "../../values"

const Center = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

const Logo = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
`

const Description = styled.span`
  font-size: 1em;
`

export function HotsiteHome () {
  return (
    <Main>
      <Center>
        <Logo src={IMAGES.DECK_LOGO_DARK} />
        <Description>
          React dashkit •
          <Link to="doc/home"> Doc </Link>
        </Description>
      </Center>
    </Main>
  )
}
