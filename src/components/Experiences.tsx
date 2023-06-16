import styled from "styled-components";
import { ExperienceData } from "../data/experiences";
import { Experience } from "./Experience";
import { SectionBreak } from "./SectionBreak";
import { Heading } from "./styles/Heading.styles";
import { SectionStyles } from "./styles/Section.styles";
import { Break } from "./styles/SectionBreak.styles";

const ExperiencesSection = styled(SectionStyles)`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export function Experiences() {
    return (
        <ExperiencesSection>
            <Break />
            <Heading>Work Experience</Heading>
            {ExperienceData.map((experience, index) => (
                <>
                    <Experience {...experience} key={index}/>
                    <SectionBreak />
                </>
            ))}
        </ExperiencesSection>
    )
}
