import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";

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
  
  @media ${theme.media.tablet} {
    margin-left: 0;
  }
`

const MenuItem = styled.li`

`

const NavLink = styled(Link)`
  color: ${theme.colors.menu};
  font-family: DM Sans, sans-serif;
  font-size: 20px;
  letter-spacing: 0;
  text-align: center;
  
  &:hover, &.active {
    color: ${theme.colors.accent};
    cursor: pointer;
  }
`

export const S = {
    NavLink, MenuItem, StyledMenu
}