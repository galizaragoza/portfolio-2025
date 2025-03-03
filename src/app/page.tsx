"use client";

import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { AiFillOpenAI } from "react-icons/ai";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import screenshot1 from '../../public/estudents/screenshot1.jpg';
import screenshot2 from '../../public/estudents/screenshot2.jpg';
import screenshot3 from '../../public/estudents/screenshot3.jpg';
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export default function Home() {
  return (
    <div className="min-h-full w-full font-manrope">
      <main className="flex flex-col min-h-screen bg-gray-200">
        <div className="flex justify-end">
          <div className="w-[70%] pe-20 pt-40 text-start">
            <section className="min-h-screen">
              <motion.h1
                className="text-black text-6xl font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
              >
                Hola, soy Mario, desarrollador web fullstack
              </motion.h1>
              <motion.h2
                className="text-black text-4xl tracking-wide leading-snug pt-4 font-semibold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
              >
                Llevo programando alrededor de unos tres años, hice un curso de programación y luego un bootcamp, y desde que lo terminé no he dejado de aprender por mí cuenta. Empecé una startup
                en la que soy el desarrollador principal y sigo formándome en mi propia área, así como en blockchain, ciberseguridad e inteligencia artificial.
              </motion.h2>
              <motion.p
                className="text-black text-3xl leading-snug pt-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
              >
                Estas son algunas de las tecnologías que mejor manejo:
              </motion.p>
              <motion.ul
                className="flex flex-row gap-8 pt-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
              >
                <li>
                  <FaReact size={60} className="text-[#0c9fcb]" />
                </li>
                <li>
                  <FaHtml5 size={60} className="text-[#e44d26]" />
                </li>
                <li>
                  <FaNodeJs size={60} className="text-[#75ad63]" />
                </li>
                <li>
                  <SiMongodb size={60} className="text-[#09934e]" />
                </li>
                <li>
                  <RiTailwindCssFill size={60} className="text-[#38bdf8]" />
                </li>
                <li>
                  <SiTypescript size={60} className="text-[#3077c5]" />
                </li>
                <li>
                  <SiNextdotjs size={60} className="text-[#000000]" />
                </li>
                <li>
                  <IoLogoJavascript size={60} className="text-[#f7e018]" />
                </li>
                <li>
                  <AiFillOpenAI size={60} className="text-[#000000]" />
                </li>
              </motion.ul>
            </section>
            <section className="min-h-screen" id="projects">
              <motion.p
                className="text-5xl pt-10 font-semibold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={textVariants}
              >
                Estos son algunos de los proyectos en los que he trabajado (o estoy trabajando)
              </motion.p>
              <div className="flex flex-col">
                <div className="p-10">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={textVariants}
                  >
                    <Link
                      className="text-4xl font-bold hover:text-blue-900 transition-colors"
                      href={'https://www.estudents.xyz'}
                      target="_blank"
                    >

                      eStudents
                    </Link>
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={textVariants}
                  >
                    <Carousel>
                      <CarouselContent>
                        <CarouselItem>
                          <Link href={'https://www.estudents.xyz'} target="_blank">
                            <Image
                              src={screenshot1}
                              alt="eStudents"
                              height={1600}
                              width={2400}
                              className="hover:opacity-70 transition-opacity"
                            /></Link>
                        </CarouselItem>
                        <CarouselItem>
                          <Link href={'https://www.estudents.xyz/en/newsletter'} target="_blank">
                            <Image
                              src={screenshot2}
                              alt="eStudents"
                              height={1600}
                              width={2400}
                              className="hover:opacity-70 transition-opacity"
                            /></Link>
                        </CarouselItem>
                        <CarouselItem>
                          <Link href={'https://www.estudents.xyz/en/about-us'} target="_blank">
                            <Image
                              src={screenshot3}
                              alt="eStudents"
                              height={1600}
                              width={2400}
                              className="hover:opacity-70 transition-opacity"
                            /></Link>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </motion.div>
                  <motion.p
                    className="text-xl pt-4">
                    eStudents es una start-up que yo mismo cofundé con dos amigos míos. Los detalles puedes conocerlos visitando la página (clicando en cualquier imagen), está hecha íntegramente por mí
                    y tiene detrás cientos de horas de trabajo.
                  </motion.p>
                </div>
              </div>
            </section>
            <section id="xp" className="min-h-screen">
              <div className="flex flex-row justify-evenly">
                <motion.div
                  className="flex flex-col"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={textVariants}
                >
                  <p className="text-5xl pt-10 font-semibold">
                    Formación
                  </p>
                  <p className="text-3xl max-w-[70%] pt-10">
                    Curso de desarrollo Full-Stack impartido por DePC
                  </p>
                  <p className="text-3xl max-w-[70%] pt-10">
                    Máster en desarrollo Full-Stack impartido por Nuclio Digital School {"  "}
                    <Link
                      href={'https://drive.google.com/file/d/1nBRw1K_eHOmiBlqCY6pB7e0JLRn9dIDn/view?usp=sharing'}
                      target="_blank"
                      className="underline text-blue-500"
                    >
                      (certificado)
                    </Link>
                  </p>
                  <p className="text-3xl max-w-[70%] pt-10">
                    Formación autodidacta mediante contenidos de internet
                  </p>
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={textVariants}
                >
                  <p className="text-5xl pt-10 font-semibold">
                    Experiencia
                  </p>
                  <p className="text-3xl max-w-[70%] pt-10">
                    Desarrollador full-stack en solitario para
                    eStudents 
                  </p>
                </motion.div>
              </div>
            </section>
            <motion.section
              id="about"
              className="min-h-screen"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <p className="text-5xl pt-10 font-semibold">
                Cómo he llegado hasta aquí
              </p>
              <p className="text-2xl pt-4">
                Desde muy pequeño siempre me ha interesado la tecnología y el código, me generaba mucha curiosidad entender cómo es que funcionan todos esos elementos con los que interactuaba los días, y esa curiosidad siempre estuvo ahí.
              </p>
              <p className="text-2xl pt-2">
                Sin embargo, más de adolescente, cuando realmente tuve la oportunidad de ponerme a estudiar programación y ciberseguridad, ver que eran áreas tan extensas de conocimiento me dio vértigo, y terminé renunciando a ello. Hice un bachillerato de humanidades y entré en una carrera que nunca terminó de gustarme. Mi experiencia en la universidad fue más bien corta; apenas un par de meses después de empezar el primer curso lo dejé y empecé a trabajar como repartidor a domicilio, trabajo en el que estaría casi dos años.
              </p>
              <p className="text-2xl pt-2">
                En algún momento de esos dos años, se me encendió la bombilla, y decidí comenzar a estudiar programación por mi cuenta, en principio sin otro fin más que el de disfrutarlo, pero conforme aprendía entré a un curso, luego a otro y descubrí lo mucho que me apasionaba el sector tecnológico, y tenía claro que debía dedicarme a ello.
              </p>
              <p className="text-2xl pt-2">
                En el momento de escribir esto, a 03/03/2025, he realizado dos cursos, pasado cientos y cientos de horas en tutoriales de YouTube y completado un Máster en desarrollo Full-Stack impartido por Nuclio Digital School. He hecho decenas de pequeños proyectos y he empezado una startup en la que trabajo todos los días. Hay varios proyectos a los que quiero dedicar tiempo cuando tenga más y muchos certificados que quiero estudiar, tanto en IA como en ciberseguridad, y al final todo se resume en lo siguiente: la tecnología es mi pasión.
              </p>
              <p className="text-2xl pt-2">
                Por esto sé que mi futuro está en el sector tecnológico, porque me encanta aprenderlo, aplicarlo, resolver los problemas, conocer a los expertos de cada tema...
                En definitiva, me encanta programar.
              </p>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  );
}
