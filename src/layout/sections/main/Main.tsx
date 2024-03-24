import React from 'react';
import photo from '../../../assets/images/photo2.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5} from "../../../components/AbstractRectangle";
import {Accent} from "../../../components/Accent";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <StyledTitle>
                        <SpanTitle>Hi 👋,</SpanTitle>
                        <SpanTitle> My name is </SpanTitle>
                        <Name><Accent>Sklyarenko AA</Accent></Name>
                        <MainTitle>I Frontend Developer</MainTitle>
                    </StyledTitle>
                    <Abstract>
                        <Rectangle1/>
                        <Rectangle2/>
                        <Rectangle3/>
                        <Rectangle4/>
                        <Rectangle5/>
                        <Photo src={photo}/>
                    </Abstract>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100%;
  display: flex;

  @media ${theme.media.tablet} {
    padding-top: 40px;

  }
`

const StyledTitle = styled.section`
  font-weight: 700;
  letter-spacing: -1px;
  text-align: left;
  
`

const Photo = styled.img`
  background-image: linear-gradient(to bottom right, #e70faa, #00c0fd);
  padding: 9px;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 250px;
    height: 250px;
  }
`

const Abstract = styled.div`
  width: 628px;
  height: 628px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media ${theme.media.mobile} {
    margin-top: -150px;
    
  }

  @media ${theme.media.tablet} {

    margin-top: -150px;
    
  }

`

const MainTitle = styled.h1`
  ${font({weight: 700, Fmax: 58, Fmin: 32})}
  text-align: left;
  letter-spacing: -1px;
  white-space: nowrap;
`

const SpanTitle = styled.span`
  color: ${theme.colors.h1};
  ${font({weight: 700, Fmax: 58, Fmin: 32})}
  display: flex;
  justify-content: flex-start;
  letter-spacing: -1px;
  text-align: left;
`
const Name = styled.h2`
  ${font({weight: 700, Fmax: 58, Fmin: 32})}
  letter-spacing: -1px;
  text-align: left;
`

