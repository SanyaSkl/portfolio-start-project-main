import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";

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
            <FlexWrapper wrap={"wrap"} direction={"column"} align={"center"}>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
                <SkillTitle>{props.title}</SkillTitle>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 22%;
  @media ${theme.media.mobile} {
    width: 120px;
  }
`

const SkillTitle = styled.h3`
  ${font({weight: 700, Fmax: 20, Fmin: 16})}
  margin: 30px 0 25px;
  text-transform: uppercase;
  text-align: center;
`