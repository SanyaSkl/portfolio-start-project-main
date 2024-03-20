import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {Menu} from "../../../components/menu/Menu";
import {LinkSocial} from "../../../components/linkSocial/LinkSocial";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";


const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper wrap={"wrap"} justify={"spase-between"}>
                    <Logo/>
                    <TelNumber>+91 12345 09876</TelNumber>
                    <Mail>sanyaskl2012@gmail.com</Mail>
                    <LinkSocial/>
                </FlexWrapper>
                <MenuWrapper>
                    <Menu menuItems={items}/>
                    <Copyright>Designed and built by Sklyarenko AA with IT-incubator</Copyright>
                </MenuWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  color: white;
  position: relative;
  height: 178px;
 
  ${FlexWrapper}{
    align-items: center;
    padding: 20px 10px ;
  }
  
  &::before{
    content: "";
    position: absolute;
    border: 2px solid rgb(66, 68, 110);
    top: 20px;
    opacity: 0.3;

  }
`

const TelNumber = styled.div`
  font-family: DM Sans, sans-serif;
  font-size: 18px;
  font-weight: 400;
  padding: 0 50px 0 550px;
  
`

const Mail = styled.div`
  font-family: DM Sans, sans-serif;
  font-size: 18px;
  font-weight: 400;
  padding-right: 50px;
`

const MenuWrapper = styled.div`
    flex-direction: row;
text-align: center;
`

const Copyright = styled.small`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0;
  text-align: center;
  display: inline-block;
  padding-top: 15px;
`

