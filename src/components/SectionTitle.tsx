import styled from "styled-components";
import {font} from "../styles/Common";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  ${font({weight: 700, Fmax: 48, Fmin: 32})}
  text-align: center;
  font-size: 48px;
  padding-top: 10px;
  padding-bottom: 50px;
  
  @media ${theme.media.tablet} {
    padding-bottom: 20px;

  }
`