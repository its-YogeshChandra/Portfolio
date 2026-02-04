import { getRecentCommits } from "@/lib/github";
import { CommitCard } from "./commit-card";
import { Github } from "lucide-react";

export const GithubActivity = async () => {
    const commits = await getRecentCommits();

    return (
        <div className="w-full flex flex-col gap-y-8 px-20 mt-20 mb-20">
            <div className="w-max h-max flex gap-x-3 items-center">
                <div className="w-20 h-[3px] bg-linear-to-r from-gray-600 to-gray-200"></div>
                <div className="flex items-center gap-3">
                    <Github className="w-8 h-8" />
                    <p className="text-3xl font-bold">LATEST COMMITS</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {commits.length > 0 ? (
                    commits.map((commit) => (
                        <CommitCard
                            key={commit.id}
                            repo={commit.repo}
                            message={commit.message}
                            date={commit.date}
                            url={commit.url}
                        />
                    ))
                ) : (
                    <p className="text-gray-500 italic">No recent public commits found.</p>
                )}
            </div>
        </div>
    );
};
