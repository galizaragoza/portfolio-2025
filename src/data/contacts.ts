// data/contacts.ts
import { IconType } from "react-icons";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSquareWhatsapp } from "react-icons/fa6";

export interface ContactItem {
  Icon: IconType;
  href: string;
  label: string;
  color?: string;
}

export const contacts: ContactItem[] = [
  {
    Icon: FaGithubSquare,
    href: "https://github.com/galizaragoza",
    label: "GitHub",
  },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mario-hinojosa/",
    label: "LinkedIn",
    color: "#3661bf",
  },
  {
    Icon: IoMdMail,
    href: "mailto:galizaragozadev@gmail.com",
    label: "Email",
  },
  {
    Icon: FaSquareWhatsapp,
    href: "https://wa.me/+34644458505",
    label: "WhatsApp",
    color: "#66c259",
  },
];
