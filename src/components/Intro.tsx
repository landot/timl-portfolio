import { NavigationMenu } from "./NavigationMenu";
import { PageText } from "./styles/PageText.styles";
import { HeadingLarge } from "./styles/Heading.styles";
import { IntroSection, IntroMessage } from "./styles/Intro.styles";

export function Intro() {
    return (
        <IntroSection>
            <NavigationMenu location="header" />
            <IntroMessage>
                <HeadingLarge>Nice to meet you! I'm <u>Tim Landowski</u>.</HeadingLarge>
                <PageText>Passionate SDET ready to unleash creativity in frontend development. Proficient in HTML, CSS, JavaScript, and frameworks like React. Seeking opportunities to craft visually captivating web experiences and elevate user satisfaction. Excited to contribute expertise to dynamic frontend projects that make a lasting impact.</PageText>
            </IntroMessage>
        </IntroSection>
    )
}
