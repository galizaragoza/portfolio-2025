'use client';
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectCarousel from "@/components/ProjectCarousel";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ContactSection from "@/components/ContactMe";
import { techStack } from "@/data/techStack";
import { projects } from "@/data/projects";

export default function LocalePage() {
  return (
    <div className="min-h-full min-w-full font-manrope max-w-screen">
      <main className="flex flex-col min-h-screen">
        <div className="flex justify-end">
          <div className="w-[70%] pe-20 pt-40 text-start">
            <div className="flex flex-col min-h-[50vh]">
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
