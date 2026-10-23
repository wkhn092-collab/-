'use client';

import { MotionConfig, motion, useReducedMotion, type HTMLMotionProps, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

/** amount works better on phones than a negative margin (sticky bars shrink the visible area). */
const viewport = { once: true, amount: 0.12 } as const;
const ease = [0.22, 1, 0.36, 1] as const;

export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/**
 * Soft rise into place. Opacity is never animated to 0 — on mobile, IntersectionObserver
 * sometimes never flips whileInView, and content would stay invisible forever.
 */
export default function Reveal({ delay = 0, children, ...rest }: HTMLMotionProps<'div'> & { delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div {...rest}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { y: 16 },
  show: { y: 0, transition: { duration: 0.5, ease } },
};

export function Stagger({ children, ...rest }: HTMLMotionProps<'div'>) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div {...rest}>{children}</div>;
  }
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...rest }: HTMLMotionProps<'div'>) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div {...rest}>{children}</div>;
  }
  return (
    <motion.div variants={itemVariants} {...rest}>
      {children}
    </motion.div>
  );
}
