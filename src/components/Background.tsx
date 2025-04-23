// components/InteractiveBackground.tsx
"use client";
import React, { ReactNode } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

export default function InteractiveBackground({ children }: Props) {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  // Gradient formal: blanco suave → gris azulado → azul noche
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(
         circle at ${x}% ${y}%,
         rgba(255,255,255,0.8)    0%,   /* blanco suave en el centro */
         rgba(226,232,240,0.6)   5%,   /* gris claro (Light Blue Gray) */
         rgba(100,116,139,0.4)  30%,   /* gris azulado medio */
         rgba(30,41,59,0.9)    100%    /* azul noche profundo */
       )`
  );

  function handleMouseMove(e: React.MouseEvent) {
    mouseX.set((e.clientX / window.innerWidth) * 100);
    mouseY.set((e.clientY / window.innerHeight) * 100);
  }
  function handleMouseLeave() {
    mouseX.set(50);
    mouseY.set(50);
  }

  return (
    <div
      className="relative w-screen min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="fixed inset-0 -z-10"
        style={{ background }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
