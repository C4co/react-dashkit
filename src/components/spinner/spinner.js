import React from "react"
import styled, { css } from "styled-components"

const SpinnerWrapper = styled.div`
  .spinner {
    animation: rotate 2s linear infinite;
    z-index: 2;

    ${props => props.size && css`
      width: ${props.size}px;
      height: ${props.size}px;
    ` }

    & .path {
      stroke: hsl(210, 70, 75);
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

export function Spinner ({
  color = "white",
  size = 18
}) {
  return (
    <SpinnerWrapper size={size} >
      <svg className="spinner" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" stroke={color} strokeWidth="5"></circle>
      </svg>
    </SpinnerWrapper>
  )
}
