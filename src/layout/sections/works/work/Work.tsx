import React from 'react';
import styled from "styled-components";

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
  background-color: #191919;
  max-width: 373px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`

`

const TechStack = styled.span`

`

const Link = styled.a`

`

