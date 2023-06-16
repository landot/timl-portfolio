import { Link } from "./Link";
import { NavigationMenu } from "./NavigationMenu";
import { PageText } from "./styles/PageText.styles";
import rings from "../assets/images/pattern-rings.svg";
import { Heading } from "./styles/Heading.styles";
import { IntroContainer, IntroMessage, RingLeft, RingRight } from "./styles/Intro.styles";

export function Intro() {
    return (
        <IntroContainer>
            <NavigationMenu location="header" />
            <IntroMessage>
                <Heading>Nice to meet you! I'm <u>Tim Landowski</u>.</Heading>
                <PageText>Passionate SDET ready to unleash creativity in frontend development. Proficient in HTML, CSS, JavaScript, and frameworks like React. Seeking opportunities to craft visually captivating web experiences and elevate user satisfaction. Excited to contribute expertise to dynamic frontend projects that make a lasting impact.</PageText>
            </IntroMessage>
            <Link text={"Contact Me"} href={""} />
            <RingLeft src={rings} alt='decorative rings' aria-hidden="true"/>
            <RingRight src={rings} alt='decorative rings' aria-hidden="true"/>
        </IntroContainer>
    )
}
