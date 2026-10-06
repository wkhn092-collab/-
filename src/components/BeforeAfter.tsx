"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
};

export default function BeforeAfter({ before, after }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [pos, setPos] = useState(50);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (!inView || reduce || touched) return;
    const controls = animate(50, [50, 68, 32, 50], {
      duration: 2.2,
      ease: "easeInOut",
      delay: 0.3,
      onUpdate: setPos,
    });
    return () => controls.stop();
  }, [inView, reduce, touched]);

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-[3/4] w-full max-w-md touch-pan-y overflow-hidden rounded-3xl bg-ink shadow-[0_30px_60px_-20px_rgba(21,25,28,0.5)] select-none"
    >
      <Image src={before.src} alt={before.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${100 - pos}%)` }}>
        <Image src={after.src} alt={after.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>

      <span className="absolute top-4 right-4 rounded-full bg-amber px-3 py-1 text-sm font-bold text-ink">אחרי</span>
      <span className="absolute top-4 left-4 rounded-full bg-ink/75 px-3 py-1 text-sm font-bold text-white">לפני</span>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `${100 - pos}%` }}>
        <span className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-lg">
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
          </svg>
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => {
          setTouched(true);
          setPos(Number(e.target.value));
        }}
        aria-label="גררו כדי להשוות לפני ואחרי"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
