import React from "react"
import styled, { css } from "styled-components"
import { COLORS } from "../../values"

const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: #C9C9C9;
  position: relative;
  border-radius: 100px;

  ${props => props.size && css`
    width: ${props.size};
    height: ${props.size};
  `}
`

const AvatarBadge = styled.div`
  width: 30%;
  height: 30%;
  background: ${COLORS.INFO};
  position: absolute;
  top: -2%;
  right: -2%;
  border-radius: 1000px;
  border: solid white 2px;
  z-index: 10;

  ${props => props.badgeColor && css`
    background-color: ${props.badgeColor};
  `}
`

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100px;
`

export function Avatar ({ image, size, badge, badgeColor, badgeTop, badgeBottom }) {
  return (
    <AvatarWrapper size={size}>
      { badge &&
          <AvatarBadge
            badgeColor={badgeColor}
            badgeTop={badgeTop}
            badgeBottom={badgeBottom} />
      }

      { image && <AvatarImage src={image} />}
    </AvatarWrapper>
  )
}
