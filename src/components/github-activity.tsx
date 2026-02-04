import { getRecentCommits } from "@/lib/github";
import { GithubSection } from "./github-section";

export const GithubActivity = async () => {
    const commits = await getRecentCommits();

    return <GithubSection commits={commits} />;
};
