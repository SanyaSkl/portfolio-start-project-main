import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {SkillIcon} from "../../../components/SkillIcon";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionTitle>Technologies I’ve been working with recently</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"stretch"}>
                <SkillIcon iconId={"github"} title={"github"}/>
                <SkillIcon iconId={"react"} title={"react"}/>
                <SkillIcon iconId={"css"} title={"css3"}/>
                <SkillIcon iconId={"git"} title={"git"}/>
                <SkillIcon iconId={"html"} title={"html5"}/>
                <SkillIcon iconId={"js"} title={"js"}/>
                <SkillIcon iconId={"typescript"} title={"typescript"}/>
                <SkillIcon iconId={"styledComponent"} title={"styledComponent"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #191919;
  min-height: 100vh;
`
