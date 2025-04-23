// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  return (
    <section className="flex items-center justify-center px-4 text-center">
      <motion.div
        className="max-w-3xl space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-black drop-shadow-lg"
          variants={itemVariants}
        >
          Mario Hinojosa Freire
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-900 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Desarrollador web fullstack, cofundador y programador de eStudents, apasionado por la tecnología y la programación, en busca de nuevos desafios y en constante aprendizaje.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Link
            href="#projects-heading"
            className="inline-block px-8 py-3 bg-blue-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition"
          >
            Ver proyectos
          </Link>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 border-2 bg-black hover:border-black border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition"
          >
            Contáctame
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
