"use client";

import { motion } from "framer-motion";
import { ContributionGraph } from "./contribution-graph";
import { CommitCard } from "./commit-card";
import { Github } from "lucide-react";

interface GithubSectionProps {
    commits: any[];
}

export const GithubSection = ({ commits }: GithubSectionProps) => {
    return (
        <div className="w-full flex flex-col gap-y-10 px-6 md:px-20 mt-10 mb-20">
            {/* Header - No Github Logo as requested */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-max h-max flex gap-x-3 items-center"
            >
                <div className="w-20 h-[3px] bg-linear-to-r from-gray-600 to-gray-200 dark:from-gray-400 dark:to-gray-800"></div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">GITHUB ACTIVITY</p>
            </motion.div>

            {/* Contribution Graph with Fade Up */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <ContributionGraph />
            </motion.div>

            {/* Commits Grid with Stagger */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15
                        }
                    }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {commits.map((commit, index) => (
                    <motion.div
                        key={commit.id}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, ease: "easeOut" }
                            }
                        }}
                    >
                        <CommitCard
                            repo={commit.repo}
                            message={commit.message}
                            date={commit.date}
                            url={commit.url}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
