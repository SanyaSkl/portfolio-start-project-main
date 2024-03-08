import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillIconPropsType = {
    iconId: string
    title: string
}

export const Skill = (props: SkillIconPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
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