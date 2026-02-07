"use client";

import Image, { StaticImageData } from "next/image";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProjectData } from "@/lib/projects-data";

interface ProjectCardProps {
    project: ProjectData;
    index?: number;
    isFocused?: boolean;
    isBlurred?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const ProjectCard = ({ project, index, isFocused, isBlurred, onMouseEnter, onMouseLeave }: ProjectCardProps) => {
    const { title, description, category, image, technologies, liveUrl, githubUrl } = project;

    const variants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={variants}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={cn(
                "w-full md:w-[30%] min-w-[300px] h-[480px] flex flex-col rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm transition-all duration-500 ease-out group cursor-pointer",
                isFocused ? "scale-105 shadow-2xl z-20" : "hover:shadow-2xl hover:-translate-y-2",
                isBlurred ? "scale-95 opacity-50 blur-[2px] grayscale" : ""
            )}
        >
            {/* Image Container */}
            <div className="w-full h-[55%] relative overflow-hidden bg-gray-50 dark:bg-gray-800/50">
                <Badge className="absolute top-4 left-4 z-10 bg-white/90 dark:bg-black/80 backdrop-blur-md text-black dark:text-white border border-gray-200 dark:border-gray-700 font-medium px-3 py-1 shadow-sm rounded-full pointer-events-none">
                    {category}
                </Badge>

                <div className="w-full h-full p-6 flex items-center justify-center">
                    <Image
                        src={image}
                        alt={`${title} screenshot`}
                        width={400}
                        height={300}
                        className="object-contain w-full h-full drop-shadow-lg transform group-hover:scale-105 transition-transform duration-700 ease-out rounded-lg"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="w-full h-[45%] p-6 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {title}
                        </h3>
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ArrowUpRight size={20} />
                            </a>
                        )}
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-1">
                        {technologies.map((tech) => (
                            <span key={tech} className="text-[10px] font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded-md">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-2">
                    {liveUrl ? (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black py-2.5 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity active:scale-95 duration-200"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ExternalLink size={16} />
                            View Live
                        </a>
                    ) : (
                        <span className="flex-1 flex items-center justify-center gap-2 bg-gray-400 dark:bg-gray-600 text-white dark:text-gray-300 py-2.5 rounded-xl font-medium text-sm cursor-not-allowed">
                            No Demo
                        </span>
                    )}
                    {githubUrl ? (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors active:scale-95 duration-200 text-gray-700 dark:text-gray-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Github size={20} />
                        </a>
                    ) : (
                        <span className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed">
                            <Github size={20} />
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    )
};
