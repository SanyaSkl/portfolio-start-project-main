import React from 'react';
import {Logo} from "../../../components/logo/Logo";
import {LinkSocial} from "../../../components/linkSocial/LinkSocial";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Accent} from "../../../components/Accent";
import {Menu} from "../../../components/menu/Menu";
import { S } from './Footer_Styles';


export const Footer: React.FC = () => {
    return (
        <S.StyledFooter>
            <Container>
                <FlexWrapper wrap={"wrap"} align={"center"} justify={"space-between"}>
                    <Logo/>
                    <S.TelNumber>+91 12345 09876</S.TelNumber>
                    <S.Mail>sanyaskl2012@gmail.com</S.Mail>
                    <LinkSocial/>
                </FlexWrapper>
                <S.MenuWrapper>
                    <Menu />
                    <S.Copyright>Designed and built by
                        <Accent>Sklyarenko AA</Accent>
                        together with
                        <Accent>IT-incubator</Accent>
                    </S.Copyright>
                </S.MenuWrapper>
            </Container>
        </S.StyledFooter>
    );
};


