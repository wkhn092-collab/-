"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

export default function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 200, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-6, 6]), spring);

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div className="h-full [perspective:900px]">
      <motion.div
        onPointerMove={handleMove}
        onPointerLeave={reset}
        onPointerUp={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileTap={{ scale: 0.98 }}
        className={`group relative h-full rounded-2xl border border-ink/10 bg-white shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-amber/60 hover:shadow-[0_18px_40px_-12px_rgba(21,25,28,0.25)] ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
