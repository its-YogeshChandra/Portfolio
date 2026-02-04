import { Badge } from "@/components/ui/badge";
import React from "react";

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
         <div className="w-full h-100 bg-red-500 flex gap-x-2">
            <div className="w-1/2 h-full bg-green-400"></div>
            <div className="w-1/2 h-full bg-blue-400"></div>
         </div>
        </div>
    )
}
