import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

const Contacts = styled.section`
  padding-top: 100px;
  @media ${theme.media.tablet} {
    padding: 50px 0;
`

const Mail = styled.a`
  ${font({family: "DM Sans, sans-serif", weight: 700, Fmax: 58, Fmin: 28})}
  text-align: center;
  letter-spacing: -1px;
`

export const S = {
    Mail,
    Contacts
}