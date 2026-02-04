import React from "react";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
    return (
        <div className="w-full h-20 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex justify-between items-center py-4 px-6 md:px-10 transition-colors duration-300">
            <div className="flex flex-col">
                <p className="text-xl font-bold text-gray-900 dark:text-white">Yogesh Chandra Pandey</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Full Stack Developer</p>
            </div>
            <div className="flex items-center gap-6">
                <div className="hidden md:flex gap-8 text-black dark:text-white font-semibold text-sm">
                    <p className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">About</p>
                    <p className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">Skills</p>
                    <p className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">Projects</p>
                    <p className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">Connect</p>
                </div>
                <ModeToggle />
            </div>
        </div>
    )
}
