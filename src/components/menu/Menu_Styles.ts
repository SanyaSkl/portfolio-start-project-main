import styled from "styled-components";
import {theme} from "../../styles/Theme";

const StyledMenu = styled.nav`
  display: flex;
  margin-left: auto;
  justify-content: center;
  padding-left: 50px;

  ul {
    display: flex;
    gap: 50px;
    padding-right: 50px;
  }

  a {
    color: ${theme.colors.menu};
  }
`

const MenuItem = styled.li`

`

const Link = styled.a`
  color: ${theme.colors.menu};
  font-family: DM Sans, sans-serif;
  font-size: 20px;
  letter-spacing: 0;
  text-align: center;
  
  &:hover{
    color: ${theme.colors.accent};
  }
`

export const S = {
    Link, MenuItem, StyledMenu
}