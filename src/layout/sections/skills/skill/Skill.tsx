import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillIconPropsType = {
    iconId: string
    title: string
    width?: string
    height?: string
    viewBox?: string
}

export const Skill = (props: SkillIconPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
                <SkillTitle>{props.title}</SkillTitle>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

`

const SkillTitle = styled.h3`
  color: #CCCCCC;
`