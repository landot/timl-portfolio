import styled from "styled-components"
import { Heading } from "./Heading.styles"
import { Break } from "./SectionBreak.styles"

export const SectionStyles = styled.div`
    width: 100%;
    margin-bottom: 70px;

    ${Break} {
        margin-bottom: 20px;
    }

    ${Heading} {
        margin-bottom: 50px;
    }
`