"use client";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectCarousel from "@/components/ProjectCarousel";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ContactSection from "@/components/ContactMe";
import NavBar from "@/components/NavBar";
import { techStack } from "@/data/techStack";
import { projects } from "@/data/projects";

export default function LocalePage() {
  return (
    <div className="min-h-full min-w-full font-manrope">
      <NavBar />
      <main className="flex flex-col min-h-screen">
        <div className="flex flex-col md:flex-row justify-end">
          <div className="w-full md:w-3/4 px-4 md:px-20 pt-40 text-start">
            <div className="mb-30">
              <Hero />
              <TechStack items={techStack} />
            </div>
            <ProjectCarousel items={projects} />
            <Experience />
            <Education />
            <ContactSection />
          </div>
        </div>
      </main>
    </div>
  );
}
