import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {Menu} from "../../../components/menu/Menu";
import {LinkSocial} from "../../../components/linkSocial/LinkSocial";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Accent} from "../../../components/Accent";
import {font} from "../../../styles/Common";


const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper wrap={"wrap"} align={"center"} justify={"space-between"}>
                    <Logo/>
                    <TelNumber>+91 12345 09876</TelNumber>
                    <Mail>sanyaskl2012@gmail.com</Mail>
                    <LinkSocial/>
                </FlexWrapper>
                <MenuWrapper>
                    <Menu menuItems={items}/>
                    <Copyright>Designed and built by
                        <Accent>Sklyarenko AA</Accent>
                        together with
                        <Accent>IT-incubator</Accent>
                    </Copyright>
                </MenuWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  color: ${theme.colors.menu};
  position: relative;

  

  ${FlexWrapper} {
    padding: 15px;
    

    &::before {
      content: "";
      display: inline-block;
        background-color: ${theme.colors.accent};
      max-width: 1440px;
      width: 90%;
      height: 6px;
      opacity: 0.3;
      position: absolute;
      bottom: 35%;
      border: 2px solid rgb(66, 68, 110);

    }
    @media ${theme.media.tablet} {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }
  }
`

const TelNumber = styled.div`
  ${font({family: "DM Sans, sans-serif", weight: 400, Fmax: 18, Fmin: 14})}
  padding: 0 50px 0 550px;

  @media ${theme.media.tablet} {
padding: 0;
  }
`

const Mail = styled.div`
  ${font({family: "DM Sans, sans-serif", weight: 400, Fmax: 18, Fmin: 14})}
`

const MenuWrapper = styled.div`
  flex-direction: row;
  text-align: center;

  @media ${theme.media.tablet} {
    display: flex;
    flex-direction: row-reverse;
  }
`

const Copyright = styled.small`
  ${font({weight: 400, Fmax: 18, Fmin: 14})}
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;

  ${Accent} {
    font-size: 18px;
  }
`

