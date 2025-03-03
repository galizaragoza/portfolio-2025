import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";


export default function Home() {
  return (
    <div className="min-h-full w-full font-manrope">
      <main className="flex flex-col min-h-screen bg-gray-100">
        <div className="flex justify-end">
          <div className="w-[70%] pe-20 pt-40 text-start">
            <h1 className="text-black text-6xl">
              Hola, soy Mario, desarrollador web fullstack
            </h1>
            <h2 className="text-black text-4xl tracking-wide leading-snug pt-4">
              Llevo programando alrededor de unos tres años, hice un curso de programación y luego un bootcamp, y desde que lo terminé no he dejado de aprender por mí cuenta. Empecé una startup
              en la que soy el desarrollador principal y sigo formándome en mi propia área, así como en blockchain, ciberseguridad e inteligencia artificial.
            </h2>
            <p className="text-black text-3xl leading-snug pt-2">
              Estas son algunas de las tecnologías que mejor manejo:
            </p>
            <ul className="flex flex-row gap-8 pt-8">
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
              </li><li>
                <SiNextdotjs size={60} className="text-[#000000]" />
              </li>
              <li>
                <IoLogoJavascript size={60} className="text-[#f7e018]" />
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="absolute bottom-0 w-full h-16 flex items-center justify-center bg-gray-900">
        {/* Contenido del footer */}
      </footer>
    </div>
  );
}
