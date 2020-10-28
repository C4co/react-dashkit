import React, { useState } from "react"
import styled, {css} from "styled-components"
import { COLORS, IMAGES } from "../../values"
import { Spinner } from "../../components"

const Wrapper = styled.div`
  background: ${COLORS.BLACK};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  visibility: visible;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  transition: all 0.4s linear 0s;
  opacity: 1;

  ${props => props.hidden && css`
    opacity: 0;
    visibility: hidden;
  `}
`

const Logo = styled.img`
  width: 150px;
  margin-bottom: 40px;
`

export function Splash(){
  const [hidden, setHidden] = useState(false)

  window.onload = function(){
    setTimeout(() => {
      setHidden(true)
    }, 600)
  }

  return (
    <Wrapper hidden={hidden}>
      <Logo src={IMAGES.DECK_LOGO} />
      <Spinner size={25} color={COLORS.WHITE} />
    </Wrapper>
  )
}

