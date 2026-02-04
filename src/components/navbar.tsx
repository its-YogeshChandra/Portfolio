"use client";

import React from "react";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="w-full h-20 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex justify-between items-center py-4 px-6 md:px-10 transition-colors duration-300 fixed top-0 z-50">
            <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <p className="text-xl font-bold text-gray-900 dark:text-white">Yogesh Chandra Pandey</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Full Stack Developer</p>
            </div>
            <div className="flex items-center gap-6">
                <div className="hidden md:flex gap-8 text-black dark:text-white font-semibold text-sm">
                    <button onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors">About</button>
                    <button onClick={() => scrollToSection('skills')} className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Skills</button>
                    <button onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Projects</button>
                    <button onClick={() => scrollToSection('connect')} className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Connect</button>
                </div>
                <ModeToggle />
            </div>
        </div>
    )
}
