import styled from "styled-components";

export const Button = styled.button `
background-color: unset;
  border: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;
  position: relative;
  z-index: 0;
  
  &:hover {
    &::before {
      height: 100%;
      width: 100%;
      
      position:absolute;
      
    }
  }
`