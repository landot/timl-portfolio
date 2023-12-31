import { IProject } from "../data/projects";
import { Link } from "./Link";
import { HeadingMedium } from "./styles/Heading.styles";
import { PageText } from "./styles/PageText.styles";
import { ProjectContainer, ProjectImage, ProjectImageContainer, ProjectImageOverlay, SkillContainer } from "./styles/Project.styles";

export function Project(props: IProject) {
    return (
        <ProjectContainer>
            <ProjectImageContainer>
                <ProjectImageOverlay>
                    <Link text={"View Project"} href={props.projectUrl}/>
                    <Link text={"View Code"} href={props.codeUrl}/>
                </ProjectImageOverlay>
                <ProjectImage src={props.imgSrc} alt={`${props.name} project screenshot`}/>
            </ProjectImageContainer>
            <HeadingMedium>{props.name}</HeadingMedium>
            <SkillContainer>
                {props.skills.map((skill, index) => (
                    <PageText key={`${skill}-${index}`}>{skill}</PageText>
                ))}
            </SkillContainer>
        </ProjectContainer>
    )
}