import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {StyledAccent} from "../../../components/StyledAccent";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexWrapper justify={"center"} direction={"column"}>
                <SectionTitle>For any questions please mail me:</SectionTitle>
                <StyledAccent>
                    sanyaskl2012@gmail.com
                </StyledAccent>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
padding-top: 100px;


  ${StyledAccent} {
    text-align: center;
    font-family: DM Sans, sans-serif;
    font-size: 58px;
    font-weight: 700;
    letter-spacing: -1px;
  }
`
