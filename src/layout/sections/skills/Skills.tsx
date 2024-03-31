import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {StyledSpan} from "../../../components/StyledSpan";
import {Container} from "../../../components/Container";
import { S } from './Skills_styles';

const skillData = [
    {
        iconId: "js",
        title: "js"
    },
    {
        iconId: "react",
        title: "react",
        width: "113",
        height: "120",
        viewBox: "0 0 113 120"
    },
    {
        iconId: "css",
        title: "css3"
    },
    {
        iconId: "git",
        title: "git",
        width: "105",
        height: "120",
        viewBox: "0 0 105 120"
    },
    {
        iconId: "html",
        title: "html5"
    },
    {
        iconId: "typescript",
        title: "typescript"
    },
    {
        iconId: "styledComponent",
        title: "styled component"
    },
    {
        iconId: "github",
        title: "github",
        width: "88",
        height: "120",
        viewBox: "0 0 88 120"
    },
]

export const Skills = () => {
    return (
        <S.StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <StyledSpan>Technologies I’ve been working with recently</StyledSpan>
                <FlexWrapper wrap={"wrap"} justify={"space-around"}>
                    {skillData.map((s, index) => {
                        return <Skill
                            iconId={s.iconId} key={index}
                            title={s.title}
                            viewBox={s.viewBox}
                            width={s.width}
                            height={s.height}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.StyledSkills>
    );
};

