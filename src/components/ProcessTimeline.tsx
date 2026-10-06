"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { process } from "@/content";
import { Stagger, StaggerItem } from "./Reveal";

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <div className="relative">
      <span className="absolute top-2 right-[19px] bottom-2 w-0.5 rounded-full bg-ink/10" aria-hidden />
      <motion.span
        style={{ scaleY }}
        className="absolute top-2 right-[19px] bottom-2 w-0.5 origin-top rounded-full bg-amber"
        aria-hidden
      />
      <div ref={ref}>
        <Stagger className="space-y-7">
          {process.map((p, i) => (
            <StaggerItem key={p.title} className="relative flex gap-5">
              <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border-2 border-amber bg-paper font-display text-lg text-ink">
                {i + 1}
              </span>
              <div className="pt-1">
                <h3 className="font-display text-xl text-ink">{p.title}</h3>
                <p className="leading-relaxed text-slate">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
