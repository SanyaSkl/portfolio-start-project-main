import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../styles/Common";

const Works = styled.section`
  position: relative;
  min-height: 100%;
  @media ${theme.media.tablet} {
    padding: 60px 0;
`

const Work = styled.div`
  max-width: 373px;
  height: auto;
  border-radius: 20px;
  background: ${theme.colors.secondaryBg};
  margin: 17px;
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: ${theme.animations.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: ${theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`

const Description = styled.div`
  padding: 27px 28px;

  ${FlexWrapper} {
    @media ${theme.media.mobile} {
      display: flex;
      flex-direction: column;
    }
  }
`

const Title = styled.h3`
  ${font({weight: 500, Fmax: 28, Fmin: 22})}
  letter-spacing: 0;
  text-align: center;
`

const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
  margin: 17px 0 12px;
`

const TechStack = styled.span`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0;
  text-align: left;
  display: inline-block;
  padding-bottom: 10px;
`

const Link = styled.a`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  text-align: left;
  color: ${theme.colors.link};
  text-decoration-line: underline;
  display: inline-block;
  padding: 10px 10px;

  &:hover {
    background-image: linear-gradient(#13B0F5, #E70FAA);
    color: transparent;
    -webkit-background-clip: text
  }
`

export const S = {
    Link,
    TechStack,
    Text,
    Title,
    Description,
    Image,
    ImageWrapper,
    Work,
    Works
}
