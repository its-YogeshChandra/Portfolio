"use client";

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
};

export const Skills = () => {
    const skills = [
        { name: "React" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Tailwind CSS" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "MongoDB" },
        { name: "Anchor" },
        { name: "PostgresSql" },
        { name: "Solana" },
        { name: "Rust" },
        { name: "Bunjs" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Docker" }
    ]
    return (
        <motion.div
            id="skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full h-max flex flex-col gap-y-4 scroll-mt-28"
        >
            <div className="w-max h-max flex gap-x-3 items-center">
                <div className="w-20 h-[3px] bg-linear-to-r from-gray-600 to-gray-200 dark:from-gray-400 dark:to-gray-800"></div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white"> SKILLS/TECH STACK</p>
            </div>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full h-full flex flex-wrap gap-3"
            >
                {skills.map((skill) => (
                    <motion.div key={skill.name} variants={item}>
                        <Badge className="w-max h-max px-3 py-1 text-sm bg-gray-200 text-black dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                            <p>{skill.name}</p>
                        </Badge>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}