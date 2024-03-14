import React from 'react';
import photo from '../../../assets/images/photo2.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <StyledTitle>
                        <StyledSpanTitle>Hi 👋,</StyledSpanTitle>
                        <StyledSpanTitle> My name is </StyledSpanTitle>
                        <StyledName>Sklyarenko AA</StyledName>
                        <StyledMainTitle>I Frontend Developer</StyledMainTitle>
                    </StyledTitle>
                    <Abstract>
                        <Rectangle/>
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
`

const StyledPhoto = styled.img`
  background-image: linear-gradient(to bottom right, #e70faa, #00c0fd);
  padding: 9px;
  width: 21.75rem;
  height: 21.75rem;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
`

const Abstract = styled.div`
  width: 628px;
  height: 628px;
  position: relative;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Rectangle = styled.div`
  width: 444px;
  height: 444px;
  border: 1px solid yellow;
  transform: rotate(135.00deg);
  
  position: absolute;

  &::before {
    content: "";
    width: 444px;
    height: 444px;
    border: 1px solid yellow;
    transform: rotate(150.00deg);
    position: absolute;
  }

  &::after {
    content: "";
    width: 444px;
    height: 444px;
    border: 1px solid yellow;
    transform: rotate(165.00deg);
    position: absolute;
  }
`


const StyledMainTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  text-align: left;
  letter-spacing: -1px;
`

const StyledName = styled.h2`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -1px;
  text-align: left;
  background-image: linear-gradient(#13B0F5, #E70FAA);
  color: transparent;
  -webkit-background-clip: text
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