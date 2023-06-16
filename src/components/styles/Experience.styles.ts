import styled from "styled-components"

export const ExperienceContainer = styled.div`
    width: 100%;
    padding: 0 30px;

    ul {
        padding: 0;
    }

    ul li {
        margin: 10px 0;
        list-style-type: none;
    }
`

export const ExperienceHeader = styled.h2`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: ${props => props.theme.viewports.tablet})  {
        flex-direction: column;
    }
`