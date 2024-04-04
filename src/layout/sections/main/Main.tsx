import React from 'react';
import photo from '../../../assets/images/photo2.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5} from "../../../components/AbstractRectangle";
import {Accent} from "../../../components/Accent";
import {S} from './Main_Styled';
import Typewriter from 'typewriter-effect'
import Tilt from 'react-parallax-tilt'

export const Main: React.FC = () => {
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.StyledTitle>
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
                    </S.StyledTitle>
                    <S.Abstract>
                        <Rectangle1/>
                        <Rectangle2/>
                        <Rectangle3/>
                        <Rectangle4/>
                        <Rectangle5/>
                        <Tilt
                            className="parallax-effect-img"
                            tiltMaxAngleX={40}
                            tiltMaxAngleY={40}
                            perspective={800}
                            transitionSpeed={1500}
                            scale={1.1}
                            gyroscope={true}
                        >
                            <S.Photo src={photo}/></Tilt>
                    </S.Abstract>
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};


