import React from 'react';
import logo from "../../assets/images/front-end-logo.png";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";


export const Logo: React.FC = () => {
    return (
        <LinkLogo onClick={() => {
            scroll.scrollToTop()
        }}>
            <StyledLogo src={logo} alt='logo'/>
        </LinkLogo>
    );
};

const LinkLogo = styled.a`
  &:hover {
    cursor: pointer;
  }
`

export const StyledLogo = styled.img`
  width: 59px;
  height: 59px;

`