import styled from "styled-components";
import { NavigationContainer } from "./NavigationMenu.styles";
import { PageText } from "./PageText.styles";

export const RingLeft = styled.img`
    position: absolute;
    z-index: 1;
    left: -250px;
    top: 80px;
`

export const RingRight = styled.img`
    position: absolute;
    z-index: 1;
    right: 200px;
    bottom:  75px;
`

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
        margin-bottom: 66px;
        max-width: 450px;
    }
`

export const IntroContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 680px;
    margin-bottom: 100px;
    ${NavigationContainer} {
        margin-bottom: 120px;
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