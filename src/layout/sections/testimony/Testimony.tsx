import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Accent} from "../../../components/Accent";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { S } from './Testimony_Styles';


export const Testimony: React.FC = () => {
    return (
        <S.StyledTestimony>
            <FlexWrapper justify={"center"} direction={"column"}>
                <SectionTitle>For any questions please mail me:</SectionTitle>
                <S.Mail><Accent>sanyaskl2012@gmail.com</Accent></S.Mail>
            </FlexWrapper>
        </S.StyledTestimony>
    );
};