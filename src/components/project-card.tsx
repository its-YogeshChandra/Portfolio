import Image, { StaticImageData } from "next/image";
import { Github, ExternalLink, Figma } from "lucide-react";
import { Badge } from "./ui/badge";
import image from "../../public/venti-views-7wL-HlNfi4Y-unsplash.jpg"
import github from "../../public/github.png"

// Category badge color variants
const categoryColors: Record<string, { bg: string; text: string }> = {
    WEB: { bg: "bg-blue-100", text: "text-blue-700" },
    "UI/UX": { bg: "bg-purple-100", text: "text-purple-700" },
    MOBILE: { bg: "bg-green-100", text: "text-green-700" },
    BLOCKCHAIN: { bg: "bg-orange-100", text: "text-orange-700" },
    API: { bg: "bg-cyan-100", text: "text-cyan-700" },
};

interface ProjectCardProps {
    title: string;
    description: string;
    image: string | StaticImageData;
    category: keyof typeof categoryColors;
    techStack: string[];
    codeLink?: string;
    liveLink?: string;
    figmaLink?: string;
    maxTechDisplay?: number;
}

export const ProjectCard = (
) => {

    return (
        <div className=" w-[30%] h-full flex flex-col rounded-[10px] overflow-hidden gap-y-4 border-1 border-gray-200 group hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
            <div className="w-full h-[60%]  relative">
                <Badge className="bg-blue-100 top-3 left-2 absolute z-10 text-black">WEB</Badge>
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="w-full h-1/2 flex items-center justify-center">
                        <Image src={image} alt="project image" className="object-contain" />
                    </div>
                </div>
            </div>
            <div className="w-full h-[40%] px-3 flex flex-col gap-y-2">
                <p className="text-2xl font-bold">Project Title</p>
                <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                <div className="flex gap-x-2 ">
                    <Badge className="text-md text-gray-900 px-3 bg-gray-200">
                        figure
                    </Badge>
                    <Badge className="text-md text-gray-900 px-3 bg-gray-200">
                        figure
                    </Badge>
                    <Badge className="text-md text-gray-900 px-3 bg-gray-200">
                        figure
                    </Badge>
                </div>
                <div className="flex gap-x-2 pl-1 mt-3">
                    <button className="w-max h-max bg-gray-200 text-black px-2 py-1 text-xl flex gap-x-2 justify-center items-center hover:border-1 hover:border-white">
                        <Image src={github} alt="github" className="w-5 h-5" />
                        Code
                    </button>
                    <button className="w-max h-max bg-black text-white text-xl px-3 py-1 hover:border-1 hover:border-white">Live </button>
                </div>
            </div>
        </div>
    )
};
