import React from 'react';
import photo from '../../../assets/images/photo2.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <StyledTitle>
                    <span>Hi 👋,</span>
                    <StyledSpan> My name is </StyledSpan>
                    <StyledName>Sklyarenko AA</StyledName>
                    <StyledMainTitle>I Frontend Developer</StyledMainTitle>
                </StyledTitle>
                <StyledPhoto src={photo}/>
            </FlexWrapper>
        </StyledMain>
    );
};


const StyledMain = styled.div`
  min-height: 100vh;
  width: 1600px;
  height: 1024px;
  background-color: #191919;
`

const StyledTitle = styled.section `
    color: #D9D9D9;
`


const StyledPhoto = styled.img`
  width: 249px;
  height: 249px;
  border-radius: 230px;
  object-fit: cover;
  background-size: 300px;
  border: 9px solid #E70FAA;


`

const StyledMainTitle = styled.h1`

`

const StyledName = styled.h2`

`

export const StyledSpan = styled.div`

`