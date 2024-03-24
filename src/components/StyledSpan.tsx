import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const StyledSpan = styled.span`
  color: ${theme.colors.span};
  ${font({weight: 400, Fmax: 32, Fmin: 25})}
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  letter-spacing: 0;
  padding-bottom: 100px;

  @media ${theme.media.tablet} {
    padding-bottom: 50px;

  }
`
