import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../styles/Common";
import {Accent} from "../../../components/Accent";

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  color: ${theme.colors.menu};
  position: relative;


  ${FlexWrapper} {
    padding: 15px 0;


    &::before {
      content: "";
      display: inline-block;
      background-color: ${theme.colors.accent};
      max-width: 1440px;
      width: 90%;
      height: 4px;
      opacity: 0.3;
      position: absolute;
      bottom: 40%;
      border: 2px solid rgb(66, 68, 110);

      @media ${theme.media.tablet} {
        display: none;
      }
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
   display: none;
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

export const S = {
    Copyright,
    MenuWrapper,
    Mail,
    TelNumber,
    StyledFooter
}