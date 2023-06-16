import { SkillData } from '../data/skills';
import { Skill } from "./Skill";
import { Heading } from './styles/Heading.styles';
import { Break } from './styles/SectionBreak.styles';
import { SkillsContainer, SkillsSection } from "./styles/Skills.styles";

export function Skills() {
    return (
        <SkillsSection>
            <Break />
            <Heading>Skills</Heading>
            <SkillsContainer>
                {SkillData.map((skill, index) => (
                    <Skill {...skill} key={`${skill.name}-${index}`}/>
                ))}
            </SkillsContainer>
        </SkillsSection>
    )
}