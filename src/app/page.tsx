import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ParticleCanvas } from "@/components/portfolio/ParticleCanvas";
import { AiAgent } from "@/components/portfolio/AiAgent";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#070305] text-foreground selection:bg-rose-500/30 selection:text-white overflow-x-hidden">
      <ParticleCanvas />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AiAgent />
    </div>
  );
}
