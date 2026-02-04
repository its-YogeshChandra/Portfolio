import { Badge } from "@/components/ui/badge";
import React from "react";
import { Mail, Github, Linkedin, } from 'lucide-react';


export const HeroSection = () => {
    return (
        <div className="w-full h-max mt-10 flex flex-col gap-y-5">
            <Badge className="px-6 py-2 text-black bg-gray-100 flex gap-x-3 ">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="text-[18px]">Available for work</p>
            </Badge>
            <div className="w-max h-max flex gap-x-3 items-center">
                <div className="w-20 h-[3px] bg-linear-to-r from-gray-600 to-gray-200"></div>
                <p className="text-3xl font-bold"> ABOUT/PROFILE</p>
            </div>
            <div className="w-full min-h-100  flex gap-x-2 mt-6">
                <div className="w-2/3 min-h-100  flex flex-col">
                    <div>
                        <p className="text-4xl font-extrabold">Full Stack </p>
                        <p className="text-4xl font-extrabold">Developer</p>
                    </div>
                    <div className="w-full h-20 border-l-4 border-black mt-4 px-2">
                        <p className="text-[18px]">Full-stack developer with a strong interest in blockchain and Rust. I enjoy building scalable systems, clean APIs, and reliable backends with modern web technologies</p>
                    </div>
                    <div className="mt-4 w-full h-20 flex gap-x-4 items-center bg-green-400">
                        <Badge className=" px-3 py-2 flex"> <Github size={24} /> 
                        <p>GitHub</p>
                        </Badge>
                        <Badge className=" px-3 py-2 flex"> <Linkedin size={24} /> 
                        <p>Linkedin</p>
                        </Badge>
                        <Badge className=" px-3 py-2 flex"> <Mail size={24} /> 
                        <p>Mail</p>
                        </Badge>
                        <Badge className=" px-3 py-2"></Badge>
                    </div>
                </div>
                <div className="w-1/2 min-h-100 bg-blue-500"></div>
            </div>
        </div>
    )
}
