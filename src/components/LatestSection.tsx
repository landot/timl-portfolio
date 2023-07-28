import { useEffect, useState } from "react";
import { GithubEvent } from "../types/GithubEventTypes";
import { getLatestCommits } from "../utils/getLatestCommits";
import { HeadingLarge, HeadingMedium } from "./styles/Heading.styles";
import { LatestSectionStyles, LinkStyles, RecentCommitSectionStyles, RecentCommitStyles } from "./styles/LatestSection.styles";
import { PageText } from "./styles/PageText.styles";

export function LatestSection() {
    const [latest, setLatest] = useState<GithubEvent[][]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function loadLatestResults() {
          setLoading(true);
  
          try {
            const data = await getLatestCommits();
            setLatest(data);
          } catch (err: unknown) {
            console.log(err);
          } finally {
            setLoading(false);
          }
        }
        loadLatestResults();
    }, []);

    if(loading || latest.length === 0) {
        return <></>
    }

    return (
        <LatestSectionStyles id="latest">
            {latest.length > 0 && (
                <>
                    <HeadingLarge>Recent Commits</HeadingLarge>
                    {latest.map(project => (
                        <div key={project[0].repo.name}>
                            <LinkStyles href={`https://github.com/${project[0].repo.name}`}>
                                <HeadingMedium><u>{project[0].repo.name}</u></HeadingMedium>
                            </LinkStyles>
                            <RecentCommitSectionStyles>
                                {/* only show last 5 GithubEvents per project */}
                                {project.slice(0, 5).map(p => (
                                    p.payload.commits && p.payload.commits.map(c => (
                                        <RecentCommitStyles key={c.sha}>
                                            <LinkStyles href={`https://github.com/${project[0].repo.name}/commit/${c.sha}`}>
                                                <PageText>- {new Date(p.created_at).toLocaleDateString('en-US')}: {c.message}</PageText>
                                            </LinkStyles>
                                        </RecentCommitStyles>
                                    ))
                                ))}
                            </RecentCommitSectionStyles>
                        </div>
                    )
                    )}
                </>
            )}
        </LatestSectionStyles>
    )
}
