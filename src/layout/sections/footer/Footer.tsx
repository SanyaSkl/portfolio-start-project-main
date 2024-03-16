import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {StyledSpan} from "../../../components/StyledSpan";
import {Menu} from "../../../components/menu/Menu";
import {LinkSocial} from "../../../components/linkSocial/LinkSocial";
import {FlexWrapper} from "../../../components/FlexWrapper";


const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Logo/>
                <StyledSpan>+91 12345 09876</StyledSpan>
                <StyledSpan>+sanyaskl2012@gmail.com</StyledSpan>
                <LinkSocial/>
                <Menu menuItems={items}/>
                <Copyright>Designed and built by Sklyarenko AA with IT-incubator</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  min-height: 20vh;
`

const Copyright = styled.small`

`

