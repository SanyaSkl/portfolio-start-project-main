import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledSpan} from "../../../components/StyledSpan";
import {Work} from "./work/Work";
import {FlexWrapper} from "../../../components/FlexWrapper";
import img1 from "../../../assets/images/img1.webp"
import img2 from "../../../assets/images/img2.webp"
import img3 from "../../../assets/images/img3.webp"
import img4 from "../../../assets/images/img4.webp"
import img5 from "../../../assets/images/img5.webp"
import img6 from "../../../assets/images/img6.webp"
import {Container} from "../../../components/Container";

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <StyledSpan>Things I’ve built so far</StyledSpan>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"flex-start"}>
                    <Work src={img1}
                          title={"Project Tile goes here"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          techStack={"Tech stack : HTML , JavaScript, SASS, React"}/>
                    <Work src={img2}
                          title={"Project Tile goes here"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          techStack={"Tech stack : HTML , JavaScript, SASS, React"}/>
                    <Work src={img3}
                          title={"Project Tile goes here"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          techStack={"Tech stack : HTML , JavaScript, SASS, React"}/>
                    <Work src={img4}
                          title={"Project Tile goes here"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          techStack={"Tech stack : HTML , JavaScript, SASS, React"}/>
                    <Work src={img5}
                          title={"Project Tile goes here"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          techStack={"Tech stack : HTML , JavaScript, SASS, React"}/>
                    <Work src={img6}
                          title={"Project Tile goes here"}
                          text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                          techStack={"Tech stack : HTML , JavaScript, SASS, React"}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};


const StyledWorks = styled.section`
  min-height: 100vh;
`
