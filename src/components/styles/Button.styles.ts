import styled from "styled-components";

export const LinkText = styled.p`
    margin: 0 0 10px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 2.28571px;
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    white-space: nowrap;
`

export const LinkContainer = styled.a`
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;

    &:hover {
        text-decoration: none;
    }

    &:hover ${LinkText} {
        color: ${props => props.theme.colors.greenAccent};
    }
`

export const Line = styled.div`
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.greenAccent};
`