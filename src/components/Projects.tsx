import { ProjectData } from "../data/projects";
import { Project } from "./Project";
import { Heading } from "./styles/Heading.styles";
import { ProjectGrid, ProjectsContainer as ProjectsSection } from "./styles/Projects.styles";
import { Break } from "./styles/SectionBreak.styles";

export function Projects() {
    return (
        <ProjectsSection>
            <Break />
            <Heading>Projects</Heading>
            <ProjectGrid>
                {ProjectData.map((project, index) => (
                    <Project {...project} key={`${project.name}-${index}`}/>
                ))}
            </ProjectGrid>
        </ProjectsSection>
    )
}
