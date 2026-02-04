import { GitCommit } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface CommitCardProps {
    repo: string;
    message: string;
    date: string;
    url: string;
}

export const CommitCard = ({ repo, message, date, url }: CommitCardProps) => {
    // Format the date to "X hours/days ago"
    const formatDate = (dateString: string) => {
        const diff = Date.now() - new Date(dateString).getTime();
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days}d ago`;
        if (hours > 0) return `${hours}h ago`;
        return `${minutes}m ago`;
    };

    return (
        <Link href={url} target="_blank" className="block group">
            <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                    <GitCommit size={20} />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{repo}</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">{formatDate(date)}</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {message}
                    </p>
                </div>
            </div>
        </Link>
    );
};
