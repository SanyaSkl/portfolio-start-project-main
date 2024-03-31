import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const StyledMain = styled.section`
  min-height: 100%;
  display: flex;
`

const StyledTitle = styled.div`
  letter-spacing: -1px;
  text-align: left;
  font-size: 58px;
  width: 700px;

  @media ${theme.media.tablet} {
    padding: 30px 0 40px;
    width: 50%
  }

  @media ${theme.media.mobile} {
    width: 95%;
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
    margin: -50px 0;
    width: 328px;
    height: 328px;
  }

  @media ${theme.media.tablet} {
    margin-top: -60px;
  }

`

const MainTitle = styled.h1`
  ${font({weight: 700, Fmax: 58, Fmin: 32})}
  text-align: left;
  letter-spacing: -1px;
  white-space: nowrap;
  
  p {
    display: none;
  }
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

export const S = {
    Name, SpanTitle, MainTitle, Abstract, Photo, StyledTitle, StyledMain
}