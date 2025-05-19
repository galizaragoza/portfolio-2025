"use client";
import TechStack from "@/components/TechStack";
import Hero from "@/components/Hero";
import ProjectCarousel from "@/components/ProjectCarousel";
import { techStack } from "@/data/techStack";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-full min-w-full font-manrope max-w-screen">
      <main className="flex flex-col min-h-screen">
        <div className="flex justify-end">
          <div className="w-[70%] pe-20 pt-40 text-start">
            <div className="flex flex-col min-h-screen">
              <Hero />
              <TechStack items={techStack} />
            </div>
            <ProjectCarousel items={projects} />

          </div>
        </div>
      </main>
    </div>
  );
}
