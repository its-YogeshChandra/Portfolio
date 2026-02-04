import { Badge } from "@/components/ui/badge"

export const Skills = () => {
    const skills = [
        {
            name: "React",
        },
        {
            name: "Next.js",
        },
        {
            name: "TypeScript",
        },
        {
            name: "JavaScript",
        },
        {
            name: "Tailwind CSS",
        },
        {
            name: "Git",
        },
        {
            name: "GitHub",
        },
        {
            name: "MongoDB",
        },
        {
            name: "Anchor"
        },
        {
            name: "PostgresSql"
        },
        {
            name: "Solana"
        },
        {
            name: "Rust"
        },
        {
            name: "Bunjs"
        },
        {
            name: "Node.js"
        }, 
        {
            name : "Express.js"
        },
        {
            name : "Docker"
        }
        ]
    return (
        <div className="w-full h-max flex flex-col gap-y-4">
           <div className="w-max h-max flex gap-x-3 items-center">
                <div className="w-20 h-[3px] bg-linear-to-r from-gray-600 to-gray-200"></div>
                <p className="text-3xl font-bold"> SKILLS/TECH STACK</p>
            </div>
            <div className="w-full h-full flex flex-wrap gap-x-3 gap-y-3">
                {skills.map((skill) => (
                <Badge key={skill.name} className="w-max h-max px-3 py-1 text-sm bg-gray-200 text-black">
                    <p>{skill.name}</p>
                </Badge>
                ))}
            </div>
        </div>
    )
}