"use client";
import Image from "next/image";
import { FaReact, FaHtml5, FaNodeJs, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaSquareWhatsapp } from "react-icons/fa6";
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
import estudents from '../../public/estudents.jpg';
import logotask from '../../public/logotask.jpg'
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
                Soy Mario, desarrollador web <br /> full-stack
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
                    <Carousel>
                      <CarouselContent>
                        <CarouselItem>
                          <h2 className="text-4xl font-bold">
                            eStudents
                          </h2>
                          <Link href={'https://www.estudents.xyz'} target="_blank">
                            <Image
                              src={estudents}
                              alt="eStudents"
                              height={1600}
                              width={2400}
                              className="hover:opacity-70 transition-opacity"
                            />
                          </Link>
                          <p className="text-xl pt-4"
                          >
                            eStudents es una start-up que yo mismo cofundé con dos amigos míos. Los detalles puedes conocerlos visitando la página (clicando en la imagem), está hecha íntegramente por mí
                            y tiene detrás cientos de horas de trabajo.
                          </p>
                        </CarouselItem>
                        <CarouselItem>
                          <h2 className="text-4xl font-bold">
                            TaskTalk
                          </h2>
                          <Link href={'https://www.estudents.xyz'} target="_blank">
                            <Image
                              src={logotask}
                              alt="eStudents"
                              height={1600}
                              width={2400}
                              className="hover:opacity-70 transition-opacity"
                            />
                          </Link>
                          <p className="text-xl pt-4"
                          >
                            TaskTalk fue mi proyecto de final del Bootcamp que hice en Nuclio Digital School, el proyecto consiste en una aplicación de gestión de tareas en tableros, similar
                            a Asana, así como chat P2P y videollamadas. Ahora mismo no se encuentra levantado, aquí tienes el <Link href={'https://github.com/FSDSTR1023/naranja-backend'} 
                            className="text-blue-700 hover:underline">backend</Link> y aquí el <Link href={'https://github.com/FSDSTR1023/naranja-frontend'} 
                            className="text-blue-700 hover:underline">frontend</Link>
                          </p>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </motion.div>
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
                    Máster en desarrollo Full-Stack impartido por Nuclio Digital School{"  "}
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
            {/* Sección de Contacto animada */}
            <motion.section
              id="contact"
              className="min-h-screen"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <h2 className="text-5xl pt-10 font-semibold">
                Puedes contactarme vía email o LinkedIn
              </h2>
              <h3 className="text-4xl pt-4 font-semibold">
                Y aquí tienes también mi CV y el resto de mis redes
              </h3>
              <div className="pt-4">
                <ul className="pt-10 flex flex-row justify-evenly gap-8">
                  <li>
                    <Link href={'https://github.com/galizaragoza'} target="_blank">
                      <FaGithubSquare size={60} />
                    </Link>
                  </li>
                  <li>
                    <Link href={'https://www.linkedin.com/in/mario-hinojosa/'} target="_blank">
                      <FaLinkedin size={60} className="text-[#3661bf]" />
                    </Link>
                  </li>
                  <li>
                    <Link href={'mailto:galizaragozadev@gmail.com'} target="_blank">
                      <IoMdMail size={60} />
                    </Link>
                  </li>
                  <li>
                    <Link href={'https://wa.me/+34644458505'} target="_blank">
                      <FaSquareWhatsapp size={60} className="text-[#66c259]" />
                    </Link>
                  </li>
                </ul>
                <div className="pt-20 flex flex-row justify-evenly">
                  <Link href={'/resume'} target="_blank">
                    <h3 className="text-3xl hover:text-blue-900 transition-colors hover:underline">
                      My resume (English)
                    </h3>
                  </Link>
                  <Link href={'/curriculum'} target="_blank">
                    <h3 className="text-3xl hover:text-blue-900 transition-colors hover:underline">
                      Mi currículum (Castellano)
                    </h3>
                  </Link>
                </div>
              </div>
            </motion.section>
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
