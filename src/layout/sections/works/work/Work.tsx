import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/Icon";

type WorkPropsType = {
    title: string
    text: string
    src: string
    techStack: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <TechStack>{props.techStack}</TechStack>
                <LinkBlock>
                    <Icon iconId={"linkIcon"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                    <Link href={"#"}>Live Preview</Link>
                    <Icon iconId={"githubIcon"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                    <Link href={"#"}>View Code</Link>
                </LinkBlock>
            </Description>
        </StyledWork>
    );
};

const Link = styled.a`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  text-align: left;
  color: ${theme.colors.link};
  text-decoration-line: underline;
  display: inline-block;
`

const LinkBlock = styled.div`
  
`

const StyledWork = styled.div`
  max-width: 373px;
  height: 567px;
  border-radius: 20px;
  background: ${theme.colors.secondaryBg};
  margin: 17px;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 50px;
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
`

const Title = styled.h3`
  font-size: 28px;
  font-weight: 500;
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
`


