import styled from "styled-components";
import { SectionStyles } from "./Section.styles";
import { HeadingLarge } from "./Heading.styles";
import { PageText } from "./PageText.styles";
import { NavigationSection } from "./NavigationMenu.styles";

export const IntroMessage = styled.div`
    z-index: 2;
    width: 80%;

    u {
        text-decoration-color: ${props => props.theme.colors.greenAccent};
    }

    u:hover {
        color: ${props => props.theme.colors.greenAccent};
    }

    ${PageText} {
        margin-top: 40px;
    }

    ${HeadingLarge}, ${PageText} {
        text-align: center;
    }
`

export const IntroSection = styled(SectionStyles)`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: auto;

    ${NavigationSection} {
        margin-bottom: 50px;
    }

    @media screen and (max-width: ${props => props.theme.viewports.tablet})  {
        height: 600px;
    }

    @media screen and (max-width: ${props => props.theme.viewports.mobile})  {
        align-items: center;
        height: fit-content;
    }

`

export const ProfileImage = styled.img`
    position: absolute;
    z-index: 2;
    width: 445px;
    height: 720px;
    right: 0;
    top: -40px;

    @media screen and (max-width: ${props => props.theme.viewports.tablet})  {
        width: 322px;
        height: 600px;
    }

    @media screen and (max-width: ${props => props.theme.viewports.mobile})  {
        width: 174px;
        height: 383px;
        position: relative;
        right: 0;
        top: -100px;
    }

`