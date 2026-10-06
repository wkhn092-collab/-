"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./Icons";

type StickyCtaProps = { watchId: string; hideOnIds: string[] };

export default function StickyCta({ watchId, hideOnIds }: StickyCtaProps) {
  const [pastHero, setPastHero] = useState(false);
  const [hidden, setHidden] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const target = document.getElementById(watchId);
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) =>
      setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0),
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [watchId]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>
      setHidden((prev) => {
        const next = { ...prev };
        for (const e of entries) next[e.target.id] = e.isIntersecting;
        return next;
      }),
    );
    for (const id of hideOnIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [hideOnIds]);

  const visible = pastHero && !Object.values(hidden).some(Boolean);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-amber/20 bg-ink/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden"
        >
          <a
            href="#quote"
            className="press flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber text-base font-bold text-ink hover:bg-amber-light"
          >
            <WhatsAppIcon className="size-5" />
            הצעת מחיר בוואטסאפ
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
