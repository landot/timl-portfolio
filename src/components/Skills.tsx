import { SkillData } from '../data/skills';
import { Skill } from "./Skill";
import { HeadingLarge } from './styles/Heading.styles';
import { Break } from './styles/SectionBreak.styles';
import { SkillsContainer, SkillsSection } from "./styles/Skills.styles";

export function Skills() {
    return (
        <SkillsSection id='skills'>
            <Break />
            <HeadingLarge>Skills</HeadingLarge>
            <SkillsContainer>
                {SkillData.map((skill, index) => (
                    <Skill {...skill} key={`${skill.name}-${index}`}/>
                ))}
            </SkillsContainer>
        </SkillsSection>
    )
}