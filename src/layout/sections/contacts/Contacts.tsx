import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Accent} from "../../../components/Accent";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { S } from './Contacts_Styles';


export const Contacts: React.FC = () => {
    return (
        <S.Contacts id={"contact"}>
            <FlexWrapper justify={"center"} direction={"column"}>
                <SectionTitle>For any questions please mail me:</SectionTitle>
                <S.Mail href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" >
                    <Accent>sanyaskl2012@gmail.com</Accent>
                </S.Mail>
            </FlexWrapper>
        </S.Contacts>
    );
};