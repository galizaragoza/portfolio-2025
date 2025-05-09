// components/ProjectCarousel.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from "@/data/projects";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  items: Project[];
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export default function ProjectCarousel({ items }: Props) {
  return (
    <section
      aria-labelledby="projects-heading"
      className="py-20 min-h-screen"
      role="region"
      aria-roledescription="carousel"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          id="projects-heading"
          className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-12"
        >
          Mis proyectos
        </h2>

        <div className="relative">
          <Carousel>
            <CarouselContent className="space-x-8">
              {items.map((proj) => (
                <CarouselItem key={proj.title} role="group" aria-label={proj.title}>
                  <motion.div
                    className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 px-6 pt-6">
                      {proj.title}
                    </h3>
                    <div className="relative w-full h-[400px] md:h-[600px] mt-4 overflow-hidden rounded-t-2xl">
                      {proj.href ? (
                        <Link href={proj.href} target="_blank" className="block">
                          <Image
                            src={proj.image}
                            alt={proj.alt}
                            fill
                            className="object-cover"
                          />
                        </Link>
                      ) : (
                        <Image
                          src={proj.image}
                          alt={proj.alt}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="px-6 py-4">
                      <p className="text-gray-700 mb-4">{proj.description}</p>
                      {proj.links?.length && (
                        <ul className="flex flex-wrap gap-4">
                          {proj.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                target="_blank"
                                className="text-blue-600 hover:underline font-medium"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              aria-label="Anterior"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition"
            >
              <FaChevronLeft size={20} />
            </CarouselPrevious>

            <CarouselNext
              aria-label="Siguiente"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition"
            >
              <FaChevronRight size={20} />
            </CarouselNext>

          </Carousel>
        </div>
      </div>
    </section>
  );
}
