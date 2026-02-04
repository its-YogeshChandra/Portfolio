import Image from "next/image";
import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero.section";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Container>
        <HeroSection />
      </Container>
    </div>
  )
}
