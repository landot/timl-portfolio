import { useTheme } from "styled-components";
import { ReactComponent as GithubLogo } from '../assets/images/icon-github.svg';
import { ReactComponent as LinkedinLogo } from '../assets/images/icon-linkedin.svg';
import { ReactComponent as FrontendMentorLogo } from '../assets/images/icon-frontend-mentor.svg';
import { NavigationSection, PortfolioName, Links, StyledLink } from "./styles/NavigationMenu.styles";

export function NavigationMenu(props: {location: string}) {
    const theme = useTheme();

    return (
        <NavigationSection aria-label={`${props.location} navigation section`}>
            <PortfolioName>timlandowski</PortfolioName>
            <Links aria-label={`${props.location} navigation links`}>
                <StyledLink href="https://github.com/landot" name="github">
                    <GithubLogo fill={theme.colors.white}/>
                </StyledLink>
                <StyledLink href="https://www.frontendmentor.io/profile/landot" name="frontend mentor">
                    <FrontendMentorLogo fill={theme.colors.white}/>
                </StyledLink>
                <StyledLink href="https://www.linkedin.com/in/timla/" name="linkedin">
                    <LinkedinLogo fill={theme.colors.white} />
                </StyledLink>
            </Links>
        </NavigationSection>
    )
}