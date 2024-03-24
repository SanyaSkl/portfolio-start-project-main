import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {StyledSpan} from "../../../components/StyledSpan";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <StyledSpan>Technologies I’ve been working with recently</StyledSpan>
                <FlexWrapper wrap={"wrap"} justify={"space-around"}>
                    <Skill iconId={"js"} title={"js"}/>
                    <Skill width={"113"} height={"120"} viewBox={"0 0 113 120"} iconId={"react"} title={"react"}/>
                    <Skill iconId={"css"} title={"css3"}/>
                    <Skill width={"105"} height={"120"} viewBox={"0 0 105 120"} iconId={"git"} title={"git"}/>
                    <Skill iconId={"html"} title={"html5"}/>
                    <Skill iconId={"typescript"} title={"typescript"}/>

                    <Skill iconId={"styledComponent"} title={"styled component"}/>
                    <Skill width={"88"} height={"120"} viewBox={"0 0 88 120"} iconId={"github"} title={"github"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  
`
