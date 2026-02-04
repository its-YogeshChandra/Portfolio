"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar, ThemeInput } from "react-activity-calendar";
import { useTheme } from "next-themes";

interface Contribution {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
    total: {
        [year: string]: number;
    };
    contributions: Contribution[];
}

export const ContributionGraph = () => {
    const [data, setData] = useState<Contribution[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);
    const username = "its-YogeshChandra";
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
                );
                const json: ApiResponse = await res.json();
                setData(json.contributions);
                setTotal(json.total.lastYear);
            } catch (error) {
                console.error("Error fetching contribution data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const themeColors: ThemeInput = {
        light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    };

    if (loading) {
        return (
            <div className="w-full h-32 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 animate-pulse">
                <p className="text-gray-400">Loading contributions...</p>
            </div>
        );
    }

    // Determine scheme safely (default to light if server/unmounted)
    const currentScheme = mounted && theme === "dark" ? "dark" : "light";

    return (
        <div className="w-full p-6 bg-white dark:bg-gray-900 rounded-[20px] border border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                    See me winning in <span className="text-blue-600 dark:text-blue-400">2025</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-medium">
                    {total} total contributions in the last year
                </p>
            </div>

            <div className="w-full overflow-x-auto pb-2">
                <ActivityCalendar
                    data={data}
                    theme={themeColors}
                    colorScheme={currentScheme}
                    labels={{
                        totalCount: "{{count}} contributions in the last year",
                    }}
                    showWeekdayLabels
                    blockSize={12}
                    blockMargin={4}
                    fontSize={12}
                />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <p>Learn more about how contribution graph works.</p>
                <div className="flex items-center gap-1">
                    <span>Less</span>
                    <div className="flex gap-[2px]">
                        <div className="w-3 h-3 bg-[#ebedf0] dark:bg-[#161b22] rounded-sm"></div>
                        <div className="w-3 h-3 bg-[#9be9a8] dark:bg-[#0e4429] rounded-sm"></div>
                        <div className="w-3 h-3 bg-[#40c463] dark:bg-[#006d32] rounded-sm"></div>
                        <div className="w-3 h-3 bg-[#30a14e] dark:bg-[#26a641] rounded-sm"></div>
                        <div className="w-3 h-3 bg-[#216e39] dark:bg-[#39d353] rounded-sm"></div>
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
    );
};
