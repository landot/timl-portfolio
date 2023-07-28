import styled from "styled-components";
import { HeadingMedium } from "./Heading.styles";
import { PageText } from "./PageText.styles";

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;

    ${HeadingMedium} {
        text-transform: uppercase;
    }
`

export const ProjectImage = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: left;
`

export const ProjectImageOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0, .75);
    mix-blend-mode: normal;
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 48px;
    align-items: center;
    visibility: hidden;
`

export const ProjectImageContainer = styled.div`
    width: fit-content;
    height: fit-content;
    position: relative;


    &:hover ${ProjectImageOverlay}, &:focus ${ProjectImageOverlay} {
        visibility: visible;
    }
`

export const SkillContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 7px;

    ${PageText} {
        margin-right: 18px;
        text-transform: uppercase;
    }
`