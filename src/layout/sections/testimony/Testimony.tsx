import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {StyledAccent} from "../../../components/StyledAccent";


export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <StyledAccent>
                sanyaskl2012@gmail.com
            </StyledAccent>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`

    ${StyledAccent}{
      text-align: center;
      font-family: DM Sans,sans-serif;
      font-size: 58px;
      font-weight: 700;
      letter-spacing: -1px;
    }
`
