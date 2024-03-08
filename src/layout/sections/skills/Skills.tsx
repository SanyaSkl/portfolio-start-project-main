import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {StyledSpan} from "../../../components/StyledSpan";


export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <StyledSpan>Technologies I’ve been working with recently</StyledSpan>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"github"} title={"github"}/>
                <Skill iconId={"react"} title={"react"}/>
                <Skill iconId={"css"} title={"css3"}/>
                <Skill iconId={"git"} title={"git"}/>
                <Skill iconId={"html"} title={"html5"}/>
                <Skill iconId={"js"} title={"js"}/>
                <Skill iconId={"typescript"} title={"typescript"}/>
                <Skill iconId={"styledComponent"} title={"styledComponent"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #191919;
  min-height: 100vh;
`
