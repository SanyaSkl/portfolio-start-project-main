import React from 'react';
import photo from '../../../assets/images/photo2.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <StyledTitle>
                    <StyledSpanTitle>Hi 👋,</StyledSpanTitle>
                    <StyledSpanTitle> My name is </StyledSpanTitle>
                    <StyledName>Sklyarenko AA</StyledName>
                    <StyledMainTitle>I Frontend Developer</StyledMainTitle>
                </StyledTitle>
                <StyledPhoto src={photo}/>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain = styled.section`
  min-height: 100vh;
  width: 1600px;
  height: 1024px;
`

const StyledTitle = styled.section `
    
`


const StyledPhoto = styled.img`
  width: 249px;
  height: 249px;
  border-radius: 230px;
  object-fit: cover;
  background-position: 150px;
  background-size: 300px;
  border: 9px solid #E70FAA;


`

const StyledMainTitle = styled.h1`

`

const StyledName = styled.h2`

`

const StyledSpanTitle = styled.span `
display: flex;
  justify-content: flex-start;
`