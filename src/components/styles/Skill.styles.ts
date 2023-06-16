import styled from "styled-components";

export const SkillHeader = styled.h2`
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.white};
    margin: 0;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
`

export const SkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    height: fit-content;
    width: fit-content;

    ${SkillHeader} {
        margin-bottom: 14px;
    }
`
