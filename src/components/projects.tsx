"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card"
import { motion } from "framer-motion";

export const Projects = () => {
    const projects = [1, 2, 3, 4, 5, 6]
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.div
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full h-auto mt-16 flex flex-col gap-y-10 px-6 md:px-20 mb-10 scroll-mt-28"
        >
            <div className="w-max h-max flex gap-x-3 items-center">
                <div className="w-20 h-[3px] bg-linear-to-r from-gray-600 to-gray-200 dark:from-gray-400 dark:to-gray-800"></div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white"> PROJECTS</p>
            </div>

            {/* card components for the project */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
                className="w-full h-auto flex flex-wrap gap-8 justify-center"
            >
                {
                    projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            isFocused={hoveredIndex === index}
                            isBlurred={hoveredIndex !== null && hoveredIndex !== index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        />
                    ))
                }
            </motion.div>
        </motion.div>
    )
}