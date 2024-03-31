import React from 'react';
import photo from '../../../assets/images/photo2.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5} from "../../../components/AbstractRectangle";
import {Accent} from "../../../components/Accent";
import { S } from './Main_Styled';


export const Main = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.StyledTitle>
                        <S.SpanTitle>Hi 👋,</S.SpanTitle>
                        <S.SpanTitle> My name is </S.SpanTitle>
                        <S.Name><Accent>Sklyarenko AA</Accent></S.Name>
                        <S.MainTitle>I Frontend Developer</S.MainTitle>
                    </S.StyledTitle>
                    <S.Abstract>
                        <Rectangle1/>
                        <Rectangle2/>
                        <Rectangle3/>
                        <Rectangle4/>
                        <Rectangle5/>
                        <S.Photo src={photo}/>
                    </S.Abstract>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};


