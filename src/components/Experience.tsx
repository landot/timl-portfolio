import { IExperience } from "../data/experiences"
import { ExperienceContainer, ExperienceHeader } from "./styles/Experience.styles"
import { PageText } from "./styles/PageText.styles"

export function Experience(props: IExperience) {
    return (
        <ExperienceContainer>
            <ExperienceHeader>
                <PageText>{props.role}</PageText>
                <PageText>{props.company}</PageText>
                <PageText>{`${props.startDate}-${props.endDate}`}</PageText>
            </ExperienceHeader>
            <ul>
                {props.description.map((point, index) => (
                    <li key={index}>
                        <PageText>{point}</PageText>
                    </li>
                ))}
            </ul>
        </ExperienceContainer>
    )
}