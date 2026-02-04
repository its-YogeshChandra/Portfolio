import React from "react";

export const Navbar = () => {
    return (
        <div className="w-full h-20 border-b-2 border-gray-200 flex justify-between items-center py-4 px-10">
            <div className="flex flex-col ">
                <p className="text-xl font-bold">Yogesh Chandra Pandey</p>
                <p className="text-gray-500">Full Stack Developer</p>
            </div>
            <div className="flex gap-12 text-black font-semibold text-sm">
                <p>About</p>
                <p>Skills</p>
                <p>Projects</p>
                <p>Connect</p>
            </div>
           
        </div>
    )
}
