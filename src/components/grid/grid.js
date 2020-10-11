import styled, { css } from "styled-components"

export const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: auto;

  ${props => props.gap && css`
    gap: ${props.gap}px;

    @media(max-width: 800px){
      gap: 20px;
    }
  `}

  ${props => props.alignItems && css`
    align-items: ${props.alignItems};
  `}

  ${props => props.col && css`
    grid-template-columns: repeat(${props.col}, 1fr);

    @media(max-width: 800px){
      grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 600px){
      grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 400px){
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`
