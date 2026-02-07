import { StaticImageData } from "next/image";
import project1_image from "../../public/mainpage_courseselling.png"
import project2_image from "../../public/mainpage_streamweaver.png"
import project3_image from "../../public/mainpage_faultnote.png"

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string | StaticImageData;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

/**
 * ===========================================
 * PROJECT DATA - ADD YOUR PROJECTS HERE
 * ===========================================
 * 
 * To add a new project, simply add a new object to the array below.
 * Each project should have:
 * - id: Unique identifier (number)
 * - title: Project name
 * - description: Brief description of the project
 * - category: Category badge (e.g., "WEB DEV", "MOBILE APP", "BLOCKCHAIN")
 * - image: Path to image in /public folder (e.g., "/projects/my-project.png")
 * - technologies: Array of tech stack used
 * - liveUrl: (optional) Link to live demo
 * - githubUrl: (optional) Link to GitHub repo
 */

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "LearnVerge",
    description: "A courseselling app with crm, custom auth ",
    category: "WEB DEV",
    image: project1_image,
    technologies: ["Vite.js", "JavaScript", "express.js", "mongodb", "react-hook-form"],
    liveUrl: "https://course-sellling-appfrontend.vercel.app/",
    githubUrl: "https://github.com/its-YogeshChandra/CourseSelllingApp.git",
  },
  {
    id: 2,
    title: "StreamWeaver",
    description: "A video to hls converter,with multi-resolution, variety of codecs and custom hls size",
    category: "WEB DEV",
    image: project2_image,
    technologies: ["Next.js", "rust ", "ffmpeg", "nginx"],
    liveUrl: "https://stream-weaver-ruby.vercel.app/",
    githubUrl: "https://github.com/its-YogeshChandra/StreamWeaver.git",
  },
  {
    id: 3,
    title: "FaultNote",
    description: "A tui application for learning from mistakes",
    category: "TUI",
    image: project3_image,
    technologies: ["Rust", "Ratatui", "tokio", "reqwest"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/its-YogeshChandra/FaultNote.git",
  },
  {
    id: 4,
    title: "Amm contract",
    description: "A amm contract with cpmm concept, with add liquidity, remove liquidity, swap, ",
    category: "Blockchain",
    image: "/projects/project-4.png",
    technologies: ["anchor", "solana", "rust"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/its-YogeshChandra/Spool_Amm.git",
  },

];
