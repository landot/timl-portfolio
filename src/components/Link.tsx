import { LinkContainer, LinkText, Line } from "./styles/Link.styles";

export function Link(props: {text: string, href: string}) {
    return (
        <LinkContainer href={props.href} target="_blank" rel="noopener noreferrer">
            <LinkText>{props.text}</LinkText>
            <Line />
        </LinkContainer>
    )
}
