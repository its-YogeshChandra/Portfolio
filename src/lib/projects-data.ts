import { StaticImageData } from "next/image";

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
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.",
        category: "WEB DEV",
        image: "/projects/project-1.png",
        technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/username/project-1",
    },
    {
        id: 2,
        title: "AI Chat Application",
        description: "An intelligent chatbot powered by OpenAI with context-aware responses, message history, and multi-language support.",
        category: "AI / ML",
        image: "/projects/project-2.png",
        technologies: ["React", "OpenAI", "Node.js", "MongoDB"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/username/project-2",
    },
    {
        id: 3,
        title: "DeFi Dashboard",
        description: "A comprehensive decentralized finance dashboard for tracking crypto portfolios, swaps, and staking rewards in real-time.",
        category: "BLOCKCHAIN",
        image: "/projects/project-3.png",
        technologies: ["Solana", "Rust", "React", "Web3.js"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/username/project-3",
    },
    {
        id: 4,
        title: "Task Management App",
        description: "A collaborative task manager with real-time sync, team workspaces, Kanban boards, and smart deadline reminders.",
        category: "WEB DEV",
        image: "/projects/project-4.png",
        technologies: ["Vue.js", "Firebase", "Tailwind"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/username/project-4",
    },
    {
        id: 5,
        title: "Mobile Fitness Tracker",
        description: "A cross-platform fitness app with workout plans, progress tracking, nutrition logging, and social challenges.",
        category: "MOBILE APP",
        image: "/projects/project-5.png",
        technologies: ["React Native", "Expo", "GraphQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/username/project-5",
    },
    {
        id: 6,
        title: "DevOps Automation Tool",
        description: "A CI/CD pipeline automation tool with one-click deployments, container orchestration, and monitoring integrations.",
        category: "DEVOPS",
        image: "/projects/project-6.png",
        technologies: ["Docker", "Kubernetes", "Go", "AWS"],
        githubUrl: "https://github.com/username/project-6",
    },
];
