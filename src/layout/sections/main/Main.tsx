import React from 'react';
import photo from '../../../assets/images/photo2.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5} from "../../../components/AbstractRectangle";
import {Accent} from "../../../components/Accent";
import {S} from './Main_Styled';
import Typewriter from 'typewriter-effect'

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.Title>
                        <S.SpanTitle>Hi 👋,</S.SpanTitle>
                        <S.SpanTitle> My name is </S.SpanTitle>
                        <S.Name><Accent>Sklyarenko AA</Accent></S.Name>
                        <S.MainTitle>
                            <p>I Frontend Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['I Frontend Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                    </S.Title>
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
        </S.Main>
    );
};


