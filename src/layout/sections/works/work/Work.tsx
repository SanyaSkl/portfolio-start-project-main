import React from 'react';
import styled from "styled-components";
import img1 from "../../../assets/images/img1.webp"

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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  padding: 0 30px;
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
  letter-spacing: 0;
  text-align: center;
  
`

const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0;
  text-align: left;
  
`

const TechStack = styled.span`

`

const Link = styled.a`

`

