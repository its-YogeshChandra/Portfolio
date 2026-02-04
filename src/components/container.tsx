import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container w-[80%] mx-auto text-black h-max ">
            {children}
        </div>
    )
}