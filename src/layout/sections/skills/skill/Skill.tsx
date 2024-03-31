import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import { S } from '../Skills_styles';

type SkillIconPropsType = {
    iconId: string
    title: string
    width?: string
    height?: string
    viewBox?: string
}

export const Skill = (props: SkillIconPropsType) => {
    return (
        <S.StyledSkill>
            <FlexWrapper wrap={"wrap"} direction={"column"} align={"center"}>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
                <S.SkillTitle>{props.title}</S.SkillTitle>
            </FlexWrapper>
        </S.StyledSkill>
    );
};

