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
            <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:border-gray-300 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
                    <GitCommit size={20} />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-gray-500">{repo}</span>
                        <span className="text-xs text-gray-400">{formatDate(date)}</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                        {message}
                    </p>
                </div>
            </div>
        </Link>
    );
};
