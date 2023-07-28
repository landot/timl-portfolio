import styled from "styled-components"
import { HeadingMedium } from "./Heading.styles"
import { PageText } from "./PageText.styles"
import { SectionStyles } from "./Section.styles"

export const LatestSectionStyles = styled(SectionStyles)`
    ${HeadingMedium} {
        margin-bottom: 10px;
        u {
            text-decoration-color: rgb(78, 225, 160);
        }
        u:hover {
            color: rgb(78, 225, 160);
        }
    }

    ${PageText} {
        font-size: 14px;
        line-height: 16px;
        
        &:hover {
            color: rgb(78, 225, 160);
        }
    }
`

export const RepoSectionStyles = styled.div`
    display: flex;
    flex-direction: column;
`

export const RecentCommitSectionStyles = styled.ul``

export const RecentCommitStyles = styled.li`
    margin-top: 5px;
    display: flex;
`

export const LinkStyles = styled.a`
    color: inherit;
    text-decoration: none;
    width: fit-content;
`
