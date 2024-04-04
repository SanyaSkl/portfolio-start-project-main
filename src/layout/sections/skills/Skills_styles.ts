import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const StyledSkill = styled.div`
  width: 22%;
  @media ${theme.media.mobile} {
    width: 120px;
  }
`

const SkillTitle = styled.h3`
  ${font({weight: 700, Fmax: 20, Fmin: 16})}
  margin: 30px 0 25px;
  text-transform: uppercase;
  text-align: center;
`

const StyledSkills = styled.section`
  position: relative;
  @media ${theme.media.tablet} {
    padding: 60px 0;
`

export const S = {
  StyledSkills, SkillTitle, StyledSkill
}