"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiCredly } from "react-icons/si";
import { CgArrowsExpandDownRight } from "react-icons/cg";
import { useTranslations } from "next-intl";

export default function NavBar() {
  const t = useTranslations("Nav");
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <div className="flex flex-col space-y-2">
      <Link
        href="#projects-heading"
        className="text-base text-white hover:text-gray-600 transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {t("projects")}
      </Link>
      <Link
        href="#experience"
        className="text-base text-white hover:text-gray-600 transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {t("experience")}
      </Link>
      <Link
        href="#about"
        className="text-base text-white hover:text-gray-600 transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {t("education")}
      </Link>
      <Link
        href="#contact"
        className="text-base text-white hover:text-gray-600 transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {t("contact")}
      </Link>
    </div>
  );

  const socialIcons = (
    <ul className="flex flex-row mt-10 justify-between">
      <li>
        <Link href="https://www.linkedin.com/in/mario-hinojosa/" target="_blank">
          <FaLinkedin
            size={40}
            className="text-[#3661bf] bg-white dark:bg-gray-800 rounded-lg p-1"
          />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/galizaragoza" target="_blank">
          <FaGithubSquare
            size={40}
            className="text-black dark:text-white bg-white dark:bg-gray-800 rounded-lg p-1"
          />
        </Link>
      </li>
      <li>
        <Link href="mailto:galizaragozadev@gmail.com" target="_blank">
          <IoMdMail
            size={40}
            className="text-black dark:text-white bg-white dark:bg-gray-800 rounded-lg p-1"
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
            className="text-[#e1762e] bg-white dark:bg-gray-800 rounded-lg p-1"
          />
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      {/* Desktop */}
      <nav className="hidden lg:fixed lg:top-12 lg:left-12 lg:w-64 lg:px-4 lg:py-4 lg:bg-gray-900 lg:shadow-md lg:rounded-md lg:flex lg:flex-col lg:justify-between">
        <h2 className="text-xl font-bold text-white mb-10">
          Mario Hinojosa Freire
        </h2>
        {links}
        {socialIcons}
      </nav>

      {/* Toggle button (mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-12 left-12 z-50 p-2 rounded-md bg-gray-200 dark:bg-gray-700 lg:hidden"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <CgArrowsExpandDownRight
          size={24}
          className={`text-gray-800 dark:text-gray-200 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Mobile nav deslizable */}
      <motion.nav
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.5 }}
        className="fixed top-12 left-0 w-64 px-4 py-4 bg-gray-900 shadow-md rounded-md flex flex-col justify-between z-40 lg:hidden"
      >
        <h2 className="text-xl font-bold text-white mb-10">
          Mario Hinojosa Freire
        </h2>
        {links}
        {socialIcons}
      </motion.nav>
    </>
  );
}
