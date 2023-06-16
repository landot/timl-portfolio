import styled from "styled-components";
import { SectionStyles } from "./Section.styles";

export const ProjectsContainer = styled(SectionStyles)`
    width: 100%;
    height: fit-content;
`

export const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max(340px, 45%), 2fr));
    grid-gap: 70px 30px;  
    justify-content: center;
    align-content: center;

    @media screen and (max-width: ${props => props.theme.viewports.tablet})  {
        grid-gap: 60px 24px;  
    }
`