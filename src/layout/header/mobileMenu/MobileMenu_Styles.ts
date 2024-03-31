import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

const StyledMobileMenu = styled.nav`

`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(25, 25, 25, 0.9);
  display: none;
  

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  
  ul {
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  a {
    color: ${theme.colors.accent};
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`

  position: fixed;
  top: 0;
  right: 5px;
  width: 100px;
  height: 100px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.menu};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.menu};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.menu};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`

const Link = styled.a`
  color: ${theme.colors.menu};
  font-family: DM Sans, sans-serif;
  font-size: 20px;
  letter-spacing: 0;
  text-align: center;
`

export const S = {
    BurgerButton, MobileMenuPopup, StyledMobileMenu, Link
}

