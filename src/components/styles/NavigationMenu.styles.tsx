import styled from "styled-components";
import { SectionStyles } from "./Section.styles";

export const NavLink = ({className, href, children, name}: {className?: string, href: string, children: JSX.Element, name: string}) => (
    <a 
        href={href} 
        className={className} 
        aria-label={`link to go to ${name}`}
        target="_blank" 
        rel="noopener noreferrer"
    >
        {children}
    </a>
)

export const StyledLink = styled(NavLink)`
    width: 24px;
    height: 24px;
    margin: 0 16px;

    &:hover svg {
        fill: ${props => props.theme.colors.greenAccent};
    }
`

export const Links = styled.nav`
    width: fit-content;
    height: fit-contnet;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const NavigationSection = styled.div`
    z-index: 3;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${props => props.theme.viewports.mobile}) {
        flex-direction: column;
        justify-content: flex-start;

        ${Links} {
            margin-top: 20px;
        }
    }
`

export const PortfolioName = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: -0.444444px;
    color: ${props => props.theme.colors.white};
`