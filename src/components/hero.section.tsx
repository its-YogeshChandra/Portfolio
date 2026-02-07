"use client";

import { Badge } from "@/components/ui/badge";
import React from "react";
import { Mail, Github, Linkedin, } from 'lucide-react';
import twitter from "../../public/twitter.png"
import github from "../../public/github.png"
import linkedin from "../../public/linkedin.png"
import mail from "../../public/email.png"
import profile from "../../public/wellington-ferreira-72TE8cWKXRY-unsplash.jpg"
import location from "../../public/pin.png"
import { motion } from "framer-motion";
import portimage from "../../public/port.jpeg"

import Image from "next/image";

export const HeroSection = () => {

    //have to provide links to the buttons 
    const socialLinks = [
        {
            name: "GitHub",
            icon: github,
            url: "https://github.com/its-YogeshChandra?tab=overview&from=2026-02-01&to=2026-02-05"
        },
        {
            name: "LinkedIn",
            icon: linkedin,
            url: "https://linkedin.com/in/yourusername"
        },
        {
            name: "Mail",
            icon: mail,
            url: "mailto:ychandraalways4u@gmail.com"
        },
        {
            name: "Twitter",
            icon: twitter,
            url: "https://x.com/Lg__Crusty"
        }
    ]
    return (
        <motion.div
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-max pt-28 flex flex-col gap-y-5 scroll-mt-28"
        >
            <Badge className="w-max px-6 py-2 text-black dark:text-white bg-gray-100 dark:bg-gray-800 flex gap-x-3 ">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="text-[18px]">Available for work</p>
            </Badge>
            <div className="w-max h-max flex gap-x-3 items-center mt-4">
                <div className="w-20 h-[3px] bg-linear-to-r from-gray-600 to-gray-200 dark:from-gray-400 dark:to-gray-800"></div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white"> ABOUT/PROFILE</p>
            </div>
            <div className="w-full min-h-100 flex flex-col-reverse md:flex-row gap-x-2 ">
                <div className="w-full md:w-2/3 min-h-100 flex flex-col mt-10 md:mt-15">
                    <div>
                        <p className="text-4xl font-extrabold text-gray-900 dark:text-white">Full Stack </p>
                        <p className="text-4xl font-extrabold text-gray-900 dark:text-white">Developer</p>
                    </div>
                    <div className="w-full h-auto border-l-4 border-black dark:border-white mt-4 px-2">
                        <p className="text-[18px] text-gray-700 dark:text-gray-300">Full-stack developer with a strong interest in blockchain and Rust. I enjoy building scalable systems, clean APIs, and reliable backends with modern web technologies</p>
                    </div>
                    <div className="w-full h-10 flex gap-x-2 items-center mt-4">
                        <Image src={location} alt="location" className="w-4 h-4 dark:invert" />
                        <p className="text-[18px] text-gray-400">Uttarakhand, India</p>
                    </div>
                    <div id="connect" className="mt-4 w-full h-auto flex flex-wrap gap-4 items-center scroll-mt-28">
                        {socialLinks.map((link) => (
                            <a href={link.url} key={link.name} target="_blank" rel="noopener noreferrer">
                                <Badge className=" px-3 py-2 flex bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                    <Image src={link.icon} alt={link.name.toLowerCase()} className={`w-4 h-4 ${link.name === 'GitHub' ? 'dark:invert' : ''}`} />
                                    <p className="text-sm ml-2">{link.name}</p>
                                </Badge>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 min-h-100 flex justify-center md:justify-start md:pl-5 md:mt-0">
                    <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-red-500 relative">
                        <Image src={portimage} alt="profile" className="w-full h-full rounded-full border-2 border-white object-cover" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
