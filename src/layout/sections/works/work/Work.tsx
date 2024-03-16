import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

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
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <TechStack>{props.techStack}</TechStack>
            <Link href={"#"}>Live Preview</Link>
            <Link href={"#"}>View Code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 373px;
  height: 567px;
  border-radius: 20px;
  background: ${theme.colors.secondaryBg};
  margin: 17px;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`

const Title = styled.h3`
  font-size: 28px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0;
  text-align: center;
  padding: 27px 0 17px 0;
`

const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
`

const TechStack = styled.span`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0;
  text-align: left;
  padding: 12px 0 21px 0;
  display: inline-block;
`

const Link = styled.a`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  text-align: left;
  color: ${theme.colors.link};
  text-decoration-line: underline;
  display: inline-block;
`

