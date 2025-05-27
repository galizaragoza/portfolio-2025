"use client";
import { motion } from "framer-motion";
import { TechItem } from "@/data/techStack";

interface Props {
  items: TechItem[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TechStack({ items }: Props) {
  return (
    <motion.section
      aria-labelledby="tech-heading"
      className="pt-8 md:pt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.ul className="flex flex-wrap gap-8 justify-center px-4 sm:px-6 lg:px-8" variants={containerVariants}>
        {items.map(({ Icon, color, label }) => (
          <motion.li
            key={label}
            aria-label={label}
            className="transition-transform duration-300 ease-in-out"
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon size={60} style={{ color }} />
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
