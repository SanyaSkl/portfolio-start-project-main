import styled from "styled-components";
import {font} from "../styles/Common";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  ${font({weight: 700, Fmax: 48, Fmin: 32})}
  text-align: center;
  padding: 10px 0 50px;
 
  
  @media ${theme.media.tablet} {
    padding-bottom: 20px;

  }
`