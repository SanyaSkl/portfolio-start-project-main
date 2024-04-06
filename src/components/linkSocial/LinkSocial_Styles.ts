import styled from "styled-components";
import {theme} from "../../styles/Theme";


const SocialList = styled.ul`
  display: flex;
  gap: 10px;

  @media ${theme.media.tablet} {
    padding-left: 20px;
  }

  @media ${theme.media.mobile} {
    margin: 0 auto;
  }
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

export const S = {
    SocialLink, SocialItem, SocialList
}