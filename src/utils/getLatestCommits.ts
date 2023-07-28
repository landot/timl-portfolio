import { GithubEvent } from "../types/GithubEventTypes";

export async function getLatestCommits(): Promise<GithubEvent[][]>  {
  const res = await fetch('https://api.github.com/users/landot/events');
  if (!res.ok) {
    throw {
      message: `${res.status}: Failed to fetch github event data for user`, 
    }
  }
  const events: GithubEvent[] = await res.json();
  const validEvents = events.filter(event => event.type === 'PushEvent' && event.public);
  const groupedByName: { [key: string]: GithubEvent[] } = validEvents.reduce((acc, item) => {
      if (!acc[item.repo.name]) {
        acc[item.repo.name] = [];
      }
      acc[item.repo.name].push(item);
      return acc;
  }, {});
    
  const result: GithubEvent[][] = Object.values(groupedByName);
  return result || [];
}
