import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {Accent} from "../../../components/Accent";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexWrapper justify={"center"} direction={"column"}>
                <SectionTitle>For any questions please mail me:</SectionTitle>
                <Accent>
                    sanyaskl2012@gmail.com
                </Accent>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
padding-top: 100px;


  ${Accent} {
    text-align: center;
    font-family: DM Sans, sans-serif;
    font-size: 58px;
    font-weight: 700;
    letter-spacing: -1px;
  }
`
