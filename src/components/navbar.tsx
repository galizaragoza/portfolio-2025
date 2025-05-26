// components/NavBar.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiCredly } from "react-icons/si";

const navVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const NavBar = () => {
  return (
    <motion.nav
      className="fixed top-12 left-12 w-72 h-[fit] px-4 py-4 bg-gray-900 shadow-md rounded-md flex flex-col justify-between"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <h2 className="text-xl font-bold text-white mb-10">
        Mario Hinojosa Freire
      </h2>
      <div className="flex flex-col space-y-2">
        <Link
          href="#projects-heading"
          className="text-base text-white hover:text-gray-300 transition-colors cursor-pointer"
        >
          Proyectos
        </Link>
        <Link
          href="#experience"
          className="text-base text-white hover:text-gray-300 transition-colors"
        >
          Experiencia
        </Link>
        <Link
          href="#about"
          className="text-base text-white hover:text-gray-300 transition-colors"
        >
          Formación y certificados
        </Link>
        <Link
          href="#contact"
          className="text-base text-white hover:text-gray-300 transition-colors"
        >
          Contacto
        </Link>
      </div>
      <div>
        <ul className="flex flex-row mt-10 justify-between">
          <li>
            <Link
              href="https://www.linkedin.com/in/mario-hinojosa/"
              target="_blank"
            >
              <FaLinkedin
                size={40}
                className="text-[#3661bf] bg-white rounded-lg p-1"
              />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/galizaragoza" target="_blank">
              <FaGithubSquare
                size={40}
                className="text-black bg-white rounded-lg p-1"
              />
            </Link>
          </li>
          <li>
            <Link href="mailto:galizaragozadev@gmail.com" target="_blank">
              <IoMdMail
                size={40}
                className="text-black bg-white rounded-lg p-1"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.credly.com/users/mario-hinojosa.9a72904a"
              target="_blank"
            >
              <SiCredly
                size={40}
                className="text-[#e1762e] bg-white rounded-lg p-1"
              />
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default NavBar;
