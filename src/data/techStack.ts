import { IconType } from "react-icons";
import { FaReact, FaHtml5, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { AiFillOpenAI } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

export interface TechItem {
  Icon: IconType;
  color: string;
  label: string;
}

export const techStack: TechItem[] = [
  { Icon: FaReact, color: "#0c9fcb", label: "React" },
  { Icon: FaHtml5, color: "#e44d26", label: "HTML5" },
  { Icon: FaNodeJs, color: "#75ad63", label: "Node.js" },
  { Icon: SiMongodb, color: "#09934e", label: "MongoDB" },
  { Icon: RiTailwindCssFill, color: "#38bdf8", label: "Tailwind CSS" },
  { Icon: SiTypescript, color: "#3077c5", label: "TypeScript" },
  { Icon: SiNextdotjs, color: "#000000", label: "Next.js" },
  { Icon: IoLogoJavascript, color: "#f7e018", label: "JavaScript" },
  { Icon: AiFillOpenAI, color: "#000000", label: "OpenAI" },
  { Icon: BiLogoPostgresql, color: "#336791", label: "PostgreSQL" },
  { Icon: FaDocker, color: "#2496ed", label: "Docker" },
];
