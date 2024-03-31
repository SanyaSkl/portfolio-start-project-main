import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {Button} from "../../../../components/Button";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from '../Works_Styles';

type WorkPropsType = {
    title: string
    text: string
    src: string
    techStack: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>VIEW PROJECT</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.TechStack>{props.techStack}</S.TechStack>
                <FlexWrapper align={"center"} direction={"row"}>
                    <Icon iconId={"linkIcon"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                    <S.Link href={"#"}>Live Preview</S.Link>
                    <Icon iconId={"githubIcon"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                    <S.Link href={"#"}>View Code</S.Link>
                </FlexWrapper>
            </S.Description>
        </S.Work>
    );
};



