import { ProjectData } from "../data/projects";
import { Link } from "./Link";
import { Project } from "./Project";
import { Heading } from "./styles/Heading.styles";
import { ProjectGrid, ProjectsContainer, ProjectsHeader } from "./styles/Projects.styles";

export function Projects() {
    return (
        <ProjectsContainer>
            <ProjectsHeader>
                <Heading>Projects</Heading>
                <Link text="Contact Me" href="" />
            </ProjectsHeader>
            <ProjectGrid>
                {ProjectData.map((project, index) => (
                    <Project {...project} key={`${project.name}-${index}`}/>
                ))}
            </ProjectGrid>
        </ProjectsContainer>
    )
}
