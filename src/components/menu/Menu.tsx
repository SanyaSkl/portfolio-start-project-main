import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

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

const ListItem = styled.li`

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