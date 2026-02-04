import { Badge } from "@/components/ui/badge";
import React from "react";
import { Mail, Github, Linkedin, } from 'lucide-react';
import twitter from "../../public/twitter.png"
import github from "../../public/github.png"
import linkedin from "../../public/linkedin.png"
import mail from "../../public/email.png"
import profile from "../../public/wellington-ferreira-72TE8cWKXRY-unsplash.jpg"
import location from "../../public/pin.png"

import Image from "next/image";

export const HeroSection = () => {

    //have to provide links to the buttons 
    return (
        <div className="w-full h-max mt-10 flex flex-col gap-y-5">
            <Badge className="px-6 py-2 text-black bg-gray-100 flex gap-x-3 ">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="text-[18px]">Available for work</p>
            </Badge>
            <div className="w-max h-max flex gap-x-3 items-center mt-4">
                <div className="w-20 h-[3px] bg-linear-to-r from-gray-600 to-gray-200"></div>
                <p className="text-3xl font-bold"> ABOUT/PROFILE</p>
            </div>
            <div className="w-full min-h-100  flex gap-x-2 ">
                <div className="w-2/3 min-h-100  flex flex-col mt-15">
                    <div>
                        <p className="text-4xl font-extrabold">Full Stack </p>
                        <p className="text-4xl font-extrabold">Developer</p>
                    </div>
                    <div className="w-full h-20 border-l-4 border-black mt-4 px-2">
                        <p className="text-[18px]">Full-stack developer with a strong interest in blockchain and Rust. I enjoy building scalable systems, clean APIs, and reliable backends with modern web technologies</p>
                    </div>
                    <div className="w-full h-10 flex gap-x-2 items-center mt-4">
                        <Image src={location} alt="location" className="w-4 h-4" />
                        <p className="text-[18px] text-gray-400">Uttarakhand, India</p>
                    </div>
                    <div className="mt-4 w-full h-20 flex gap-x-6 items-center ">
                       <button>
                        <Badge className=" px-3 py-2 flex bg-gray-100 text-black" >
                            <Image src={github} alt="github" className="w-4 h-4" />
                        <p className="text-sm">GitHub</p>
                        </Badge>
                       </button>
                       <button>
                        <Badge className=" px-3 py-2 flex bg-gray-100 text-black"> 
                            <Image src={linkedin} alt="linkedin" className="w-4 h-4" />
                        <p className="text-sm">Linkedin</p>
                        </Badge>
                       </button>
                       <button>
                        <Badge className=" px-3 py-2 flex bg-gray-100 text-black"> 
                            <Image src={mail} alt="mail" className="w-4 h-4" />
                        <p className="text-sm">Mail</p>
                        </Badge>
                       </button>
                       <button>
                        <Badge className=" px-3 py-2 flex bg-gray-100 text-black">
                            <Image src={twitter} alt="twitter" className="w-4 h-4" />
                            <p className="text-sm">Twitter</p>
                        </Badge>
                       </button>
                    </div>
                </div>
                <div className="w-1/2 min-h-100 flex pl-5">
                 <div className="w-72 h-72 rounded-full bg-red-500">
                    <Image src={profile} alt="profile" className="w-full h-full rounded-full border-2 border-white" />
                 </div>
                </div>
            </div>
        </div>
    )
}
