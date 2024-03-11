import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledSpan} from "../../../components/StyledSpan";


export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <StyledSpan>sanyaskl2012@gmail.com</StyledSpan>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  
`