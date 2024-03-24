import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {Accent} from "../../../components/Accent";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../styles/Common";


export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexWrapper justify={"center"} direction={"column"}>
                <SectionTitle>For any questions please mail me:</SectionTitle>
                <Mail><Accent>sanyaskl2012@gmail.com</Accent></Mail>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  padding-top: 100px;

`

const Mail = styled.span`
  ${font({family: "DM Sans, sans-serif", weight: 700, Fmax: 58, Fmin: 28})}
  text-align: center;
  letter-spacing: -1px;
`
