import Image from "next/image";
import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero.section";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { GithubActivity } from "@/components/github-activity";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <HeroSection />
        <Skills />
      </Container>
      <Projects />
      <GithubActivity />
    </div>
  )
}
