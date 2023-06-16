import styled from "styled-components";
import { SectionStyles } from "./Section.styles";

export const SkillsSection = styled(SectionStyles)`
    width: 100%;
`

export const SkillsContainer = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(auto-fill, 180px);
    grid-gap: 20px;  
    justify-content: center;
    align-content: center;
    margin-top: 50px;
`