import { ProjectCard } from "./project-card"
export const Projects = () => {
    const projects = [1, 2, 3, 4, 5, 6]
    return (
        <div className="w-full h-screen mt-16 flex flex-col gap-y-7 px-20">
            <div className="w-max h-max flex gap-x-3 items-center">
                <div className="w-20 h-[3px] bg-linear-to-r from-gray-600 to-gray-200"></div>
                <p className="text-3xl font-bold"> PROJECTS</p>
            </div>

            {/* card components for the project */}
            <div className="w-full h-[600px] flex flex-wrap gap-y-8 gap-x-8 justify-center">
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} />
                    ))
                }
            </div>
        </div>
    )
}