import React from 'react';
import photo from '../../../assets/images/photo2.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5} from "../../../components/AbstractRectangle";
import {StyledAccent} from "../../../components/StyledAccent";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <StyledTitle>
                        <StyledSpanTitle>Hi 👋,</StyledSpanTitle>
                        <StyledSpanTitle> My name is </StyledSpanTitle>
                        <StyledAccent >Sklyarenko AA</StyledAccent>
                        <StyledMainTitle>I Frontend Developer</StyledMainTitle>
                    </StyledTitle>
                    <Abstract>
                        <Rectangle1/>
                        <Rectangle2/>
                        <Rectangle3/>
                        <Rectangle4/>
                        <Rectangle5/>
                        <StyledPhoto src={photo}/>
                    </Abstract>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`

const StyledTitle = styled.section`
  font-weight: 700;
  letter-spacing: -1px;
  text-align: left;

  ${StyledAccent} {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -1px;
    text-align: left;
  }
`

const StyledPhoto = styled.img`
  background-image: linear-gradient(to bottom right, #e70faa, #00c0fd);
  padding: 9px;
  width: 21.75rem;
  height: 21.75rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: bottom -50%;

  position: absolute;
`

const Abstract = styled.div`
  width: 628px;
  height: 628px;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`

const StyledMainTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: left;
  letter-spacing: -1px;
`


const StyledSpanTitle = styled.span`
  display: flex;
  justify-content: flex-start;
  font-size: 40px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  text-align: left;
`