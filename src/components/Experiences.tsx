import styled from "styled-components";
import { ExperienceData } from "../data/experiences";
import { Experience } from "./Experience";
import { SectionBreak } from "./SectionBreak";
import { HeadingLarge } from "./styles/Heading.styles";
import { SectionStyles } from "./styles/Section.styles";
import { Break } from "./styles/SectionBreak.styles";

const ExperiencesSection = styled(SectionStyles)`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export function Experiences() {
    return (
        <ExperiencesSection id='experience'>
            <Break />
            <HeadingLarge>Work Experience</HeadingLarge>
            {ExperienceData.map((experience, index) => (
                <div key={index}>
                    <Experience {...experience} />
                    <SectionBreak />
                </div>
            ))}
        </ExperiencesSection>
    )
}
