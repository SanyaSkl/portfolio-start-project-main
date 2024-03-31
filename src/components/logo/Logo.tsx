import React from 'react';
import logo from "../../assets/images/front-end-logo.png";
import styled from "styled-components";


export const Logo:React.FC = () => {
    return (
        <LinkLogo href="#">
            <StyledLogo src={logo} alt='logo'/>
        </LinkLogo>
    );
};

const LinkLogo = styled.a`

`

export const StyledLogo = styled.img`
  width: 59px;
  height: 59px;
  
`