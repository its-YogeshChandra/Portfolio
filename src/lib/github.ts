
export interface Commit {
    sha: string;
    message: string;
    url: string;
}

export interface PushEventPayload {
    push_id: number;
    size: number;
    distinct_size: number;
    ref: string;
    head: string;
    before: string;
    commits: Commit[];
}

export interface GitHubEvent {
    id: string;
    type: string;
    actor: {
        id: number;
        login: string;
        display_login: string;
        gravatar_id: string;
        url: string;
        avatar_url: string;
    };
    repo: {
        id: number;
        name: string;
        url: string;
    };
    payload: PushEventPayload;
    public: boolean;
    created_at: string;
}

export async function getRecentCommits(username: string = "its-YogeshChandra") {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/events`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch GitHub events: ${res.statusText}`);
        }

        const events: GitHubEvent[] = await res.json();

        // Filter for PushEvents
        const pushEvents = events.filter((event) => event.type === "PushEvent");

        // Flatten commits from push events
        const commits = pushEvents.flatMap((event) => {
            // API returns commits in the payload
            if (!event.payload.commits) return [];

            return event.payload.commits.map((commit) => ({
                id: commit.sha,
                message: commit.message,
                repo: event.repo.name,
                date: event.created_at,
                url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
            }));
        });

        // Return the top 10 most recent commits
        return commits.slice(0, 10);
    } catch (error) {
        console.error("Error fetching GitHub commits:", error);
        return [];
    }
}
