// data/projects.ts
import { StaticImageData } from "next/image";
import estudentsImg from "../../public/estudents.jpg";
import logotaskImg from "../../public/logotask.jpg";
import cybertarotImg from "../../public/cybertarot.jpg";
import haciendasomostodosImg from "../../public/haciendasomostodos.jpg";

export interface Project {
  title: string;
  href?: string;
  image: StaticImageData;
  alt: string;
  description: string;
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    title: "eStudents",
    href: "https://www.estudents.xyz",
    image: estudentsImg,
    alt: "Captura de eStudents",
    description:
      "eStudents es una start-up que cofundé. Soy el desarrollador único y el MVP está previsto para Agosto, puedes visitar la landing page clicando en la imagen.",
  },
  {
    title: "TaskTalk",
    href: undefined,
    image: logotaskImg,
    alt: "Logo de TaskTalk",
    description:
      "Proyecto final del bootcamp que cursé, ambos repositorios se encuentran abajo, el proyecto incluía funciones como chat y videollamadas P2P y grupales y tableros de gestión de tareas.",
    links: [
      { label: "Backend", href: "https://github.com/FSDSTR1023/naranja-backend" },
      { label: "Frontend", href: "https://github.com/FSDSTR1023/naranja-frontend" },
    ],
  },
  {
    title: "Hacienda somos todos",
    href: "https://haciendasomosotodos.vercel.app",
    image: haciendasomostodosImg,
    alt: "Captura de HaciendaSomosTodos",
    description:
      "Pequeño proyecto que calcula la aportación total vitalicia en impuestos mediante un formulario.",
  },
  {
    title: "CyberTarot",
    href: "https://cyber-tarot.vercel.app",
    image: cybertarotImg,
    alt: "Captura de CyberTarot",
    description:
      "Otro pequeño proyecto centrado en UX/UI, en el se ve la colección de cartas de un videojuego con sus repsectivas descripciones.",
  }
];
