import styled from "styled-components";
import {font} from "../../../styles/Common";

const StyledTestimony = styled.section`
  padding-top: 100px;

`

const Mail = styled.span`
  ${font({family: "DM Sans, sans-serif", weight: 700, Fmax: 58, Fmin: 28})}
  text-align: center;
  letter-spacing: -1px;
`

export const S = {
    Mail,
    StyledTestimony
}